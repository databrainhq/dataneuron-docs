# Basic Usage of Python SDK

Once you've set up the Data Neuron Python SDK, you can start interacting with your data using natural language queries and chat-like interactions.

## Initializing DataNeuron

First, initialize the DataNeuron class:

```python
from dataneuron import DataNeuron

# Initialize DataNeuron
dn = DataNeuron(db_config='database.yaml', context='user_analytics')
dn.initialize()

# Optional: Set client context for multi-tenant scenarios
dn.set_client_context("client_123")
```

## Querying Data

To query your data, use the `query` method:

```python
result = dn.query("How many users signed up last month?")

print(f"SQL Query: {result['sql']}")
print(f"Results: {result['result']}")
print(f"Explanation: {result['explanation']}")
```

The `result` object contains the following information:

- `sql`: The generated SQL query
- `result`: The query results
- `explanation`: A natural language explanation of the results

## Using Chat Functionality

For a more interactive, conversation-like experience, use the `chat` method:

```python
sql, response = dn.chat("What were our top 5 selling products last quarter?")

print(f"SQL Query: {sql}")
print(f"Response: {response}")
```

The `chat` method maintains a conversation history, allowing for context-aware follow-up questions. For example:

```python
sql, response = dn.chat("How do those compare to the previous quarter?")
print(f"SQL Query: {sql}")
print(f"Response: {response}")
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

## Complete Example

Here's a complete example demonstrating both query and chat functionalities:

```python
from dataneuron import DataNeuron

# Initialize DataNeuron
dn = DataNeuron(db_config='database.yaml', context='user_analytics')
dn.initialize()

# Optional: Set client context for multi-tenant scenarios
dn.set_client_context("client_123")

# Use query method
query_result = dn.query("What were our top 5 selling products last quarter?")
print(f"Query SQL: {query_result['sql']}")
print(f"Query Results: {query_result['result']}")

# Use chat method
chat_sql, chat_response = dn.chat("How do those compare to the previous quarter?")
print(f"Chat SQL: {chat_sql}")
print(f"Chat Response: {chat_response}")
```

This basic usage guide covers the fundamental operations of querying data and using the chat functionality with Data Neuron. As you become more comfortable with these basics, you can explore more advanced features to leverage the full power of Data Neuron in your applications.
