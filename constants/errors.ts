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
  UserNotActive: 100007
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
  UserNotActive: 'Account Not Active'
  // other errors
};
