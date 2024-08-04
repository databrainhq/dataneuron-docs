# Python SDK Advanced Features

The Data Neuron Python SDK offers several advanced features for complex data operations and system interactions. This guide covers direct SQL execution, database information retrieval, client context management, and other advanced capabilities.

## Client Context Management

For multi-tenant scenarios, you can set and use client contexts:

```python
# Set client context
dn.set_client_context("client_123")

# Execute a query with client context applied
result = dn.execute_query("SELECT * FROM orders")
```

### Client Filtered Query

The `client_filtered_query` function allows you to see how setting a client context affects your SQL queries:

```python
# Initialize DataNeuron and set client context
dn = DataNeuron(db_config='database.yaml', context='your_context')
dn.initialize()
dn.set_client_context("client_123")

# Get a client-filtered query without executing it
filtered_query = dn.client_filtered_query("SELECT * FROM orders")
print(f"Filtered query: {filtered_query}")
```

This function will add the appropriate WHERE clause to filter the query based on the client context.

**Important**: Before using client context features, you need to generate the `client_info.yaml` file using the following command:

```bash
dnn --mc
```

This command will create a `client_info.yaml` file that Data Neuron uses to infer table information for client filtering.

**Important Note on Limitations (WIP)**:

- Currently, this client-specific filter works on tables with a `client_id` column. For example, if you query "My order items" but the `order_items` table doesn't have a `client_id` column (while the `orders` table does), the system won't automatically add a JOIN clause.
- This feature doesn't work with Recursive CTEs yet.

## Direct SQL Execution

You can execute SQL queries directly:

```python
result = dn.execute_query("SELECT * FROM users LIMIT 5")
print(result)

# For queries where you need column names as well:
result, column_names = dn.execute_query_with_column_names("SELECT * FROM users LIMIT 5")
print(f"Columns: {column_names}")
print(f"Data: {result}")
```

## Database Information

Retrieve information about your database structure:

```python
# Get a list of all tables
tables = dn.get_table_list()
print("Available tables:", tables)

# Get detailed information about a specific table
table_info = dn.get_table_info("users")
print("User table info:", table_info)
```

## Chat Functionality

DataNeuron supports a chat-like interaction:

```python
sql, response = dn.chat("Who are our top customers?")
print(f"SQL: {sql}")
print(f"Response: {response}")
```

### Managing Chat History

By default, DataNeuron maintains its own chat history. However, if you need to set a previous chat history, you can do so:

```python
chat_history = [
    {"role": "user", "content": "How many orders do we have?"},
    {"role": "assistant", "content": "We have 1000 orders."}
]
dn.set_chat_history(chat_history)
```

This is optional and typically used when you want to continue a conversation from a previous session or integrate with an external chat system.

## Error Handling

It's good practice to wrap DataNeuron calls in try-except blocks:

```python
try:
    result = dn.query("What is our revenue this month?")
except ValueError as e:
    print(f"Error: {str(e)}")
```

## Logging

Enable logging for detailed information about operations:

```python
dn = DataNeuron(db_config='database.yaml', context='your_context', log=True)
dn.initialize()
```

## Advanced Usage Examples

### Combining Features

You can combine these advanced features for more complex operations:

```python
# Initialize with logging
dn = DataNeuron(db_config='database.yaml', context='your_context', log=True)
dn.initialize()

# Set client context
dn.set_client_context("client_456")

# Get all table names and execute a filtered query for each
tables = dn.get_table_list()
for table in tables:
    filtered_query = dn.client_filtered_query(f"SELECT COUNT(*) as count FROM {table}")
    print(f"Filtered query for {table}: {filtered_query}")
    result = dn.execute_query(filtered_query)
    print(f"Table {table} has {result[0]['count']} rows for client 456")

# Use chat functionality with client context
sql, response = dn.chat("What were our top-selling products last month?")
print(f"SQL for client 456: {sql}")
print(f"Response: {response}")
```

These advanced features allow you to leverage the full power of Data Neuron in your Python applications, enabling more complex and flexible data operations while maintaining proper client context and data isolation.
