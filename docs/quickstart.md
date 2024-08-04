# Quick Start Guide

This guide will help you get up and running with Data Neuron in just a few minutes. You'll learn how to set up your database configuration, create a context, and start querying your data using natural language.

## 1. Initialize Database Configuration

First, let's set up your database configuration:

```bash
dnn --db-init <database_type>
```

Replace `<database_type>` with one of: sqlite, mysql, mssql, postgres, csv, or clickhouse.

This command will create a `database.yaml` file in your current directory, which Data Neuron will use to connect to your database.

## 2. Generate Context

Next, let's create a semantic layer for your data:

```bash
dnn --init
```

Follow the prompts to:

1. Provide a name for your context (e.g., "product_analytics" or "customer_success")
2. Select the tables you want to include in this context

This will create YAML files in the `context/<contextname>` directory, forming your semantic layer.

## 3. Start Chatting with Your Data

Now you're ready to start querying your data using natural language:

```bash
dnn --chat <context_name>
```

For example:

```bash
dnn --chat product_analytics
```

You can now ask questions about your data in plain English. For example:

- "How many active users do we have?"
- "What were our top 5 selling products last month?"
- "Show me the revenue trend for the past 6 months"

## 4. Saving Metrics to Dashboards

While chatting, you can save interesting metrics to a dashboard:

1. When you get a useful result, Data Neuron will ask if you want to save it.
2. If you choose to save, you'll be prompted to name the metric and choose a dashboard.
3. The metric will be saved in `dashboards/<dashname>.yml`

## 5. Generating Reports

To generate a PDF report of your dashboard:

```bash
dnn --report
```

This will create a PDF report based on your saved metrics.

## Using Data Neuron in Your Python Projects

To integrate Data Neuron into your Python code:

```python
from dataneuron import DataNeuron

# Initialize DataNeuron
dn = DataNeuron(db_config='database.yaml', context='your_context_name')
dn.initialize()

# Optional: Set client context for multi-tenant scenarios
dn.set_client_context("client_123")

# Ask a question
result = dn.query("How many users signed up last month?")

print(f"SQL Query: {result['sql']}")
print(f"Result: {result['result']}")
print(f"Explanation: {result['explanation']}")
```

## Next Steps

Now that you've got the basics, you can:

- [Learn more about the Python SDK](python-sdk/setup.md)
- [Explore the API Endpoint](api-endpoint/setup.md)
- [Optimize your semantic layer](advanced-features/semantic-layer-optimization.md)
- [Set up multi-tenant support](features/multi-tenant-support.md)

Happy data querying with Data Neuron!
