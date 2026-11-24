// Replace the placeholders below with the values from your own AWS account
// (see deployment/03-frontend-deployment.md and deployment/07-frontend-backend-integration.md).
const awsConfig = {
  Auth: {
    Cognito: {
      userPoolId: '<region>_<user-pool-id>',          // Cognito -> User pools -> User pool ID
      userPoolClientId: '<app-client-id>',            // Cognito -> App clients -> Client ID
      loginWith: {
        email: true,
      },
    }
  },
  API: {
    // API Gateway invoke URL, no trailing slash
    baseUrl: 'https://<api-id>.execute-api.<region>.amazonaws.com'
  }
};

export default awsConfig;
