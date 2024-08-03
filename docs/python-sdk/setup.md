# Python SDK Setup

The Data Neuron Python SDK allows you to integrate powerful natural language querying capabilities directly into your Python applications.

## Installation

If you haven't already installed Data Neuron, you can do so with pip:

```bash
pip install dataneuron
```

````

## Configuration

1. Import the DataNeuron class:

```python
from dataneuron import DataNeuron
```

2. Initialize DataNeuron with your database configuration and context:

```python
dn = DataNeuron(db_config='path/to/database.yaml', context='your_context_name')
dn.initialize()
```

3. (Optional) Set up client context for multi-tenant scenarios:

```python
dn.set_client_context("client_123")
```

## Next Steps

Now that you've set up the Python SDK, learn how to use it in the [Basic Usage](basic-usage.md) guide.

````

## docs/python-sdk/basic-usage.md

````markdown
# Basic Usage of Python SDK

Once you've set up the Data Neuron Python SDK, you can start querying your data using natural language.

## Querying Data

To query your data, use the `query` method:

```python
result = dn.query("How many users signed up last month?")
```
````

The `result` object contains the following information:

- `sql`: The generated SQL query
- `result`: The query results
- `explanation`: A natural language explanation of the results

## Example

Here's a complete example of how to use the SDK:

```python
from dataneuron import DataNeuron

# Initialize DataNeuron
dn = DataNeuron(db_config='database.yaml', context='user_analytics')
dn.initialize()

# Optional: Set client context for multi-tenant scenarios
dn.set_client_context("client_123")

# Query the data
result = dn.query("What were our top 5 selling products last quarter?")

# Print the results
print(f"SQL Query: {result['sql']}")
print(f"Results: {result['result']}")
print(f"Explanation: {result['explanation']}")
```

## Error Handling

It's good practice to wrap your queries in try-except blocks:

```python
try:
    result = dn.query("What is our current user retention rate?")
    print(result['explanation'])
except ValueError as e:
    print(f"An error occurred: {str(e)}")
```

## Next Steps

<!-- - Learn about [Advanced Features](advanced-features.md) of the Python SDK -->

- Explore how to [deploy your application](../deployment/aws-lambda.md) with Data Neuron

````

## docs/api-endpoint/setup.md

```markdown
# API Endpoint Setup

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
