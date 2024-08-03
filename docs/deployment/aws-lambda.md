# Deploying Data Neuron on AWS Lambda

Deploying Data Neuron on AWS Lambda allows you to create a scalable, serverless API for your data queries. This guide will walk you through the process of setting up Data Neuron on AWS Lambda.

## Prerequisites

- An AWS account
- AWS CLI installed and configured
- Serverless Framework installed (`npm install -g serverless`)

## Steps

1. **Prepare Your Project**

   Create a new directory for your Lambda function and initialize a new Node.js project:

   ```bash
   mkdir data-neuron-lambda && cd data-neuron-lambda
   npm init -y
   npm install dataneuron serverless-python-requirements
   ```

2. **Create a Serverless Configuration**

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

3. **Create a Handler**

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

4. **Deploy**

   Deploy your function to AWS Lambda:

   ```bash
   serverless deploy
   ```

5. **Test Your Deployment**

   Once deployed, you can test your function using the AWS Console or by making a POST request to the provided API Gateway endpoint.

## Considerations

- Ensure your `database.yaml` and any other necessary configuration files are included in your deployment package.
- Set up appropriate IAM roles and permissions for your Lambda function to access necessary AWS resources.
- Consider using AWS Secrets Manager to securely store and manage sensitive configuration data.

By deploying Data Neuron on AWS Lambda, you can create a scalable, pay-per-use API for natural language queries on your data.
