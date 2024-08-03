# Setup

The Data Neuron API allows you to integrate natural language querying capabilities into any application, regardless of the programming language.

## Prerequisites

- Data Neuron server running (either on AWS Lambda or a VPS)
- API key (if authentication is enabled)

## API Base URL

The base URL for the API will depend on your deployment. For example:

- AWS Lambda: `https://your-api-gateway-url.amazonaws.com/stage`
- VPS: `http://your-server-ip:port`

## Authentication

If authentication is enabled, include your API key in the `Authorization` header of each request:

````

Authorization: Bearer YOUR_API_KEY

```

## Next Steps

Now that you're set up to use the API, learn about the available endpoints and how to use them in the [Basic Usage](basic-usage.md) guide.
```
````
