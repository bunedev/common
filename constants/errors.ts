// Enum for Error Codes
export const ErrorCodes = {
  // Common Errors
  InternalServerError: 500000,
  PermissionDenied: 500001,
  UpdateFailed: 500002, 
  CreateFailed: 500003,
  DeleteFailed: 500004, 

  // Article Errors
  ArticleNotFound: 200000,
  ArticleCreateFailed: 200001,
  ArticleUpdateFailed: 200002,
  ArticleDeleteFailed: 200003,

  // Payment Errors
  PaymentFailed: 300000,
  RefundFailed: 300001,
  InsufficientFunds: 300002,

  // Auth Errors
  AuthenticationFailed: 400000,
  InvalidToken: 400001,
  ExpiredToken: 400002,
  RoleNotFound: 400003,
  PermissionNotFound: 400004,
  PasswordInvalid: 400005,
  
  // User Errors
  UserNotFound: 100000, 
  UserExisted: 100004,
  UserCreateFailed: 100005,
  UserUpdateFailed: 100006,
  UserNotActive: 100007,
  UserSuspended: 100008,
  UserLocked: 100009,
  UserClosed: 100010,
  UserArchived: 100011,
  AccountNotRegister: 100012,
  InvalidOTP: 100013
  // other errors
};

// Object for Error Messages
export const ErrorMessages = {
  // Common Error Messages
  InternalServerError: 'Internal server error!',
  PermissionDenied: 'Permission denied!',
  UpdateFailed: 'Update failed!', 
  CreateFailed: 'Create failed!', 
  DeleteFailed: 'Delete failed!', 

  // Article Error Messages
  ArticleNotFound: 'Article not found!',
  ArticleCreateFailed: 'Article create failed!',
  ArticleUpdateFailed: 'Article update failed!',
  ArticleDeleteFailed: 'Article delete failed!',

  // Payment Error Messages
  PaymentFailed: 'Payment failed!',
  RefundFailed: 'Refund failed!',
  InsufficientFunds: 'Insufficient funds!',

  // Auth Error Messages
  RoleNotFound: 'Role does not exist!',
  AuthenticationFailed: 'Authentication failed!',
  InvalidToken: 'Invalid token!',
  ExpiredToken: 'Token has expired!',
  PasswordInvalid: 'Password invalid!',
  
  // User Error Messages
  UserNotFound: 'User not found!',
  UserExisted: 'User Existed',
  UserCreateFailed: 'User create failed',
  UserUpdateFailed: 'User update failed',
  UserNotActive: 'Account Not Active',
  UserSuspended: 'The account has been temporarily disabled. Please contact us if you have any questions!',
  UserLocked: 'The account is locked, possibly due to multiple failed login attempts or security concerns. Please try again later or contact us for support.',
  UserClosed: 'The account has been permanently closed, either by the user or by the system. Please contact us if you have any questions.',
  UserArchived: ' The account is no longer active but has been archived for record-keeping purposes. Please contact us if you have any questions.',
  AccountNotRegister: 'Account is not registered!',
  InvalidOTP: 'OTP Invalid'
  // other errors
};
