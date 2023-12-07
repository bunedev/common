import { GraphQLError } from 'graphql';

export function createGraphQLError(
  status: number,
  message: string,
  messageCode: number,
): GraphQLError {
  return new GraphQLError(message, {
    extensions: {
      status: status,
      messageCode: messageCode,
    },
  });
}
