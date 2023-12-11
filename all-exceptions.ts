import { existsSync, mkdirSync, appendFile } from 'fs';
import * as path from 'path';
import { Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { GqlArgumentsHost, GqlExceptionFilter } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';
import { write } from "bun";


@Catch()
export class GqlAllExceptionsFilter implements GqlExceptionFilter {
  private readonly logger = new Logger(GqlAllExceptionsFilter.name);
  private logFilePath = path.join('logs/error.log');

  private async logToFile(message: string) {
    const logMessage = `${new Date().toISOString()} - ${message}\n`;
    await write(this.logFilePath, logMessage);
  }

  catch(exception: unknown, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    const context = gqlHost.getContext();
    const response = context?.res;
    let status = 500;
    let message = 'Internal Server Error';
    let messageCode = 0;
    let stacktrace = [];

    if (exception instanceof GraphQLError) {
      message = exception.message;
      stacktrace = exception.stack?.split('\n') || [];
      status = exception.extensions?.status || (500 as any);
      messageCode = exception.extensions?.messageCode as any;
    } else if (exception instanceof Error) {
      status = 'status' in exception ? exception['status'] : (500 as any);
      message = exception.message;
      stacktrace = exception.stack?.split('\n') || [] as any;
    } else {
      this.logger.error('Unexpected error', exception);
    }
    if (response) {
      response.status(status).json({
        errors: [
          {
            message,
            extensions: {
              messageCode,
              stacktrace,
            },
          },
        ],
        data: null,
      });
    }

    const logOutput = `Error: ${message} Status: ${status} messageCode: ${messageCode} stacktrace: ${stacktrace}`;
    this.logToFile(logOutput);
  }
}
