# Deploying Data Neuron on AWS Lambda

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
   dataneuron[mysql]
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
     query:
       handler: handler.query
       events:
         - http:
             path: query
             method: post

   plugins:
     - serverless-python-requirements

   custom:
     pythonRequirements:
       dockerizePip: non-linux
   ```

4. **Create a Handler**

   Create a `handler.py` file:

   ```python
   import json
   from dataneuron import DataNeuron

   dn = DataNeuron(db_config='database.yaml', context='your_context')
   dn.initialize()

   def query(event, context):
       body = json.loads(event['body'])
       query_text = body['query']

       try:
           result = dn.query(query_text)
           return {
               'statusCode': 200,
               'body': json.dumps(result)
           }
       except Exception as e:
           return {
               'statusCode': 500,
               'body': json.dumps({'error': str(e)})
           }
   ```

5. **Deploy**

   Deploy your function to AWS Lambda:

   ```bash
   serverless deploy
   ```

## Considerations for Serverless Deployment

- **Cold Starts**: Be aware of cold start times for Lambda functions. Consider using provisioned concurrency for frequently accessed functions.
- **Database Connections**: Ensure your `database.yaml` configuration is set up to handle serverless environments, potentially using connection pooling.
- **Environment Variables**: Use AWS Lambda environment variables to store sensitive information like API keys.
- **Timeouts**: Configure appropriate timeouts for your Lambda function based on expected query complexity.
- **Dependencies**: Certain database adapters like mssql require a system dependency in which case it needs to be figured on how to include it, similarly htmltopdf library needs to be installed through AWS layer for reports to work.

## Monitoring and Logging

- Use AWS CloudWatch to monitor your Lambda function's performance and logs.
- Implement proper error handling and logging in your handler function.

## Next Steps

- Set up [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) to create a RESTful API for your Lambda function.
- Implement [authentication and authorization](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-control-access-to-api.html) for your API endpoints.
- Explore [AWS Lambda Layers](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) for managing dependencies in larger projects.
