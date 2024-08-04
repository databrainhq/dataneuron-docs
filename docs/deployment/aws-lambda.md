# AWS Lambda Deployment

This guide will walk you through the process of deploying Data Neuron as a serverless application on AWS Lambda.

## Prerequisites

- An AWS account
- AWS CLI installed and configured
- Serverless Framework installed (`npm install -g serverless`)
- Python 3.8 or later

## Deployment Steps

1. **Prepare Your Project**

   Create a new directory for your Lambda function:

   ```bash
   mkdir data-neuron-lambda && cd data-neuron-lambda
   ```

2. **Install Dependencies**

   Create a `requirements.txt` file with the following content:

   ```
   dataneuron[mysql]  # Replace 'mysql' with your specific database requirement
   ```

3. **Create a Serverless Configuration**

   Create a `serverless.yml` file:

   ```yaml
   service: data-neuron-api

   provider:
     name: aws
     runtime: python3.8
     stage: ${opt:stage, 'dev'}
     region: ${opt:region, 'us-east-1'}

   functions:
     app:
       handler: dataneuron.lambda_handler
       events:
         - http:
             path: /{proxy+}
             method: ANY
       environment:
         CLAUDE_API_KEY: ${env:CLAUDE_API_KEY}
         # Add any other environment variables your app needs

   plugins:
     - serverless-python-requirements

   custom:
     pythonRequirements:
       dockerizePip: non-linux
   ```

4. **Deploy**

   Deploy your function to AWS Lambda:

   ```bash
   serverless deploy
   ```

## Considerations for Serverless Deployment

- **Cold Starts**: Be aware of cold start times for Lambda functions. Consider using provisioned concurrency for frequently accessed functions.
- **Database Connections**: Ensure your database configuration is set up to handle serverless environments, potentially using connection pooling.
- **Environment Variables**: Use AWS Lambda environment variables to store sensitive information like API keys and database credentials.
- **Timeouts**: Configure appropriate timeouts for your Lambda function based on expected query complexity.
- **Dependencies**: Certain database adapters or libraries may require additional setup. For example, MSSQL adapters or the `wkhtmltopdf` library for PDF generation may need to be included as Lambda Layers.

## Monitoring and Logging

- Use AWS CloudWatch to monitor your Lambda function's performance and logs.
- Implement proper error handling and logging in your application code.
