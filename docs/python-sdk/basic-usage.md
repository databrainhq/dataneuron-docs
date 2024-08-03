# Basic Usage

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

`````

## docs/python-sdk/basic-usage.md

````markdown
# Basic Usage of Python SDK

Once you've set up the Data Neuron Python SDK, you can start querying your data using natural language.

## Querying Data

To query your data, use the `query` method:

```python
result = dn.query("How many users signed up last month?")
```
`````

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

## docs/features/natural-language-to-sql.md

```markdown
# Natural Language to SQL

One of Data Neuron's core features is its ability to convert natural language questions into SQL queries. This allows users to interact with their data using everyday language, without needing to know SQL.

## How It Works

1. **User Input**: The user asks a question in natural language.
2. **Context Analysis**: Data Neuron analyzes the question in the context of your database schema and semantic layer.
3. **SQL Generation**: A SQL query is generated based on the analysis.
4. **Execution**: The SQL query is executed against your database.
5. **Result Interpretation**: The results are interpreted and presented in a human-readable format.

## Example

User Question:
```

"How many users signed up in each month of 2023?"

````

Generated SQL:
```sql
SELECT
  DATE_TRUNC('month', signup_date) AS month,
  COUNT(*) AS new_users
FROM
  users
WHERE
  EXTRACT(YEAR FROM signup_date) = 2023
GROUP BY
  DATE_TRUNC('month', signup_date)
ORDER BY
  month
````

Result Interpretation:

```
In 2023, user signups per month were as follows:
- January: 1,234 new users
- February: 1,567 new users
- March: 2,101 new users
...
```

## Benefits

- **Accessibility**: Allows non-technical users to query data.
- **Efficiency**: Quickly get answers without writing complex SQL.
- **Flexibility**: Easily adapt to different questions and scenarios.

## Limitations

While powerful, the natural language to SQL feature has some limitations:

- Very complex queries might require manual SQL writing.
- The accuracy depends on the quality of your semantic layer setup.

## Best Practices

1. **Be Specific**: The more specific your question, the more accurate the SQL generation.
2. **Use Business Terms**: Align your questions with the terms defined in your semantic layer.
3. **Review Generated SQL**: For critical queries, always review the generated SQL for accuracy.

## Next Steps

- Learn how to [optimize your semantic layer](../advanced-features/semantic-layer-optimization.md) for better natural language understanding.
- Explore [multi-tenant support](../features/multi-tenant-support.md) to use this feature in client-specific contexts.
