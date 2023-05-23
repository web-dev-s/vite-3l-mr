// https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_Operations.html

export const SignInErrors = [
  'InternalErrorException', // This exception is thrown when Amazon Cognito encounters an internal error. HTTP Status Code: 500
  'InvalidLambdaResponseException', // This exception is thrown when Amazon Cognito encounters an invalid AWS Lambda response. HTTP Status Code: 400
  'InvalidParameterException', // This exception is thrown when the Amazon Cognito service encounters an invalid parameter. HTTP Status Code: 400
  'InvalidSmsRoleAccessPolicyException', // This exception is returned when the role provided for SMS configuration doesn't have permission to publish using Amazon SNS. HTTP Status Code: 400
  'InvalidSmsRoleTrustRelationshipException', // This exception is thrown when the trust relationship is not valid for the role provided for SMS configuration. This can happen if you don't trust cognito-idp.amazonaws.com or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool. HTTP Status Code: 400
  'InvalidUserPoolConfigurationException', // This exception is thrown when the user pool configuration is not valid. HTTP Status Code: 400
  'NotAuthorizedException', // This exception is thrown when a user isn't authorized. HTTP Status Code: 400
  'PasswordResetRequiredException', // This exception is thrown when a password reset is required. HTTP Status Code: 400
  'ResourceNotFoundException', // This exception is thrown when the Amazon Cognito service can't find the requested resource. HTTP Status Code: 400
  'TooManyRequestsException', // This exception is thrown when the user has made too many requests for a given operation. HTTP Status Code: 400
  'UnexpectedLambdaException', // This exception is thrown when Amazon Cognito encounters an unexpected exception with AWS Lambda. HTTP Status Code: 400
  'UserLambdaValidationException', // This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service. HTTP Status Code: 400
  'UserNotConfirmedException', // This exception is thrown when a user isn't confirmed successfully. HTTP Status Code: 400
  'UserNotFoundException' // This exception is thrown when a user isn't found. HTTP Status Code: 400
]

export const SignUpErrors = [
  'CodeDeliveryFailureException', // This exception is thrown when a verification code fails to deliver successfully. HTTP Status Code: 400
  'InternalErrorException', // This exception is thrown when Amazon Cognito encounters an internal error.  HTTP Status Code: 500
  'InvalidEmailRoleAccessPolicyException', // This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP status code: 400. HTTP Status Code: 400
  'InvalidLambdaResponseException', // This exception is thrown when Amazon Cognito encounters an invalid AWS Lambda response. HTTP Status Code: 400
  'InvalidParameterException', // This exception is thrown when the Amazon Cognito service encounters an invalid parameter. HTTP Status Code: 400
  'InvalidPasswordException', // This exception is thrown when Amazon Cognito encounters an invalid password. HTTP Status Code: 400    'InvalidSmsRoleAccessPolicyException', // This exception is returned when the role provided for SMS configuration doesn't have permission to publish using Amazon SNS. HTTP Status Code: 400
  'InvalidSmsRoleAccessPolicyException', // This exception is returned when the role provided for SMS configuration doesn't have permission to publish using Amazon SNS. HTTP Status Code: 400
  'InvalidSmsRoleTrustRelationshipException', // This exception is thrown when the trust relationship is not valid for the role provided for SMS configuration. This can happen if you don't trust cognito-idp.amazonaws.com or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool. HTTP Status Code: 400
  'NotAuthorizedException', // This exception is thrown when a user isn't authorized. HTTP Status Code: 400
  'ResourceNotFoundException', // This exception is thrown when the Amazon Cognito service can't find the requested resource. HTTP Status Code: 400
  'TooManyRequestsException', //  This exception is thrown when the user has made too many requests for a given operation. HTTP Status Code: 400
  'UnexpectedLambdaException', // This exception is thrown when Amazon Cognito encounters an unexpected exception with AWS Lambda. HTTP Status Code: 400
  'UserLambdaValidationException', // This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service. HTTP Status Code: 400
  'UsernameExistsException' // This exception is thrown when Amazon Cognito encounters a user name that already exists in the user pool. HTTP Status Code: 400
]

export const ConfirmSignUpErrors = [
  'AliasExistsException', // This exception is thrown when a user tries to confirm the account with an email address or phone number that has already been supplied as an alias for a different user profile. This exception indicates that an account with this email address or phone already exists in a user pool that you've configured to use email address or phone number as a sign-in alias. HTTP Status Code: 400
  'CodeMismatchException', // This exception is thrown if the provided code doesn't match what the server was expecting. HTTP Status Code: 400
  'ExpiredCodeException', // This exception is thrown if a code has expired. HTTP Status Code: 400
  'InternalErrorException', // This exception is thrown when Amazon Cognito encounters an internal error. HTTP Status Code: 500
  'InvalidLambdaResponseException', // This exception is thrown when Amazon Cognito encounters an invalid AWS Lambda response. HTTP Status Code: 400
  'InvalidParameterException', // This exception is thrown when the Amazon Cognito service encounters an invalid parameter. HTTP Status Code: 400
  'LimitExceededException', // This exception is thrown when a user exceeds the limit for a requested AWS resource. HTTP Status Code: 400
  'NotAuthorizedException', // This exception is thrown when a user isn't authorized. HTTP Status Code: 400
  'ResourceNotFoundException', // This exception is thrown when the Amazon Cognito service can't find the requested resource. HTTP Status Code: 400
  'TooManyFailedAttemptsException', // This exception is thrown when the user has made too many failed attempts for a given action, such as sign-in. HTTP Status Code: 400
  'TooManyRequestsException', // This exception is thrown when the user has made too many requests for a given operation. HTTP Status Code: 400
  'UnexpectedLambdaException', // This exception is thrown when Amazon Cognito encounters an unexpected exception with AWS Lambda. HTTP Status Code: 400
  'UserLambdaValidationException', // This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service. HTTP Status Code: 400
  'UserNotFoundException' //  This exception is thrown when a user isn't found. HTTP Status Code: 400
]

export const ForgotPasswordError = [
  'CodeDeliveryFailureException', // This exception is thrown when a verification code fails to deliver successfully. HTTP Status Code: 400
  'InternalErrorException', // This exception is thrown when Amazon Cognito encounters an internal error. HTTP Status Code: 500
  'InvalidEmailRoleAccessPolicyException', // This exception is thrown when Amazon Cognito isn't allowed to use your email identity HTTP status code: 400. HTTP Status Code: 400
  'InvalidLambdaResponseException', // This exception is thrown when Amazon Cognito encounters an invalid AWS Lambda response. HTTP Status Code: 400
  'InvalidParameterException', // This exception is thrown when the Amazon Cognito service encounters an invalid parameter. HTTP Status Code: 400
  'InvalidSmsRoleAccessPolicyException', // This exception is returned when the role provided for SMS configuration doesn't have permission to publish using Amazon SNS. HTTP Status Code: 400
  'InvalidSmsRoleTrustRelationshipException', // This exception is thrown when the trust relationship is not valid for the role provided for SMS configuration. This can happen if you don't trust cognito-idp.amazonaws.com or the external ID provided in the role does not match what is provided in the SMS configuration for the user pool. HTTP Status Code: 400
  'LimitExceededException', // This exception is thrown when a user exceeds the limit for a requested AWS resource. HTTP Status Code: 400
  'NotAuthorizedException', // This exception is thrown when a user isn't authorized. HTTP Status Code: 400
  'ResourceNotFoundException', // This exception is thrown when the Amazon Cognito service can't find the requested resource. HTTP Status Code: 400
  'TooManyRequestsException', // This exception is thrown when the user has made too many requests for a given operation. HTTP Status Code: 400
  'UnexpectedLambdaException', // This exception is thrown when Amazon Cognito encounters an unexpected exception with AWS Lambda. HTTP Status Code: 400
  'UserLambdaValidationException', // This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service. HTTP Status Code: 400
  'UserNotFoundException' // This exception is thrown when a user isn't found. HTTP Status Code: 400
]

export const ConfirmForgotPassword = [
  'CodeMismatchException', // This exception is thrown if the provided code doesn't match what the server was expecting. HTTP Status Code: 400
  'ExpiredCodeException', // This exception is thrown if a code has expired. HTTP Status Code: 400
  'InternalErrorException', // This exception is thrown when Amazon Cognito encounters an internal error. HTTP Status Code: 500
  'InvalidLambdaResponseException', // This exception is thrown when Amazon Cognito encounters an invalid AWS Lambda response. HTTP Status Code: 400
  'InvalidParameterException', // This exception is thrown when the Amazon Cognito service encounters an invalid parameter. HTTP Status Code: 400
  'InvalidPasswordException', // This exception is thrown when Amazon Cognito encounters an invalid password. HTTP Status Code: 400
  'LimitExceededException', // This exception is thrown when a user exceeds the limit for a requested AWS resource. HTTP Status Code: 400
  'NotAuthorizedException', // This exception is thrown when a user isn't authorized. HTTP Status Code: 400
  'ResourceNotFoundException', // This exception is thrown when the Amazon Cognito service can't find the requested resource. HTTP Status Code: 400
  'TooManyFailedAttemptsException', // This exception is thrown when the user has made too many failed attempts for a given action, such as sign-in. HTTP Status Code: 400
  'TooManyRequestsException', // This exception is thrown when the user has made too many requests for a given operation. HTTP Status Code: 400
  'UnexpectedLambdaException', // This exception is thrown when Amazon Cognito encounters an unexpected exception with AWS Lambda. HTTP Status Code: 400
  'UserLambdaValidationException', // This exception is thrown when the Amazon Cognito service encounters a user validation exception with the AWS Lambda service. HTTP Status Code: 400
  'UserNotConfirmedException', // This exception is thrown when a user isn't confirmed successfully. HTTP Status Code: 400
  'UserNotFoundException' // This exception is thrown when a user isn't found. HTTP Status Code: 400
]
