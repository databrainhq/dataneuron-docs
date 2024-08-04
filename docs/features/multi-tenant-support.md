# Multi-tenant Support

Data Neuron provides robust multi-tenant support, allowing you to manage and isolate data for different clients or organizations within a single instance.

This function will add the appropriate WHERE clause to filter the query based on the client context.

**Important**: Before using client context features, you need to generate the `client_info.yaml` file using the following command:

```bash
dnn --mc
```

This command will create a `client_info.yaml` file that Data Neuron uses to infer table information for client filtering.

**Important Note on Limitations (WIP)**:

- Currently, this client-specific filter works on tables with a `client_id` column. For example, if you query "My order items" but the `order_items` table doesn't have a `client_id` column (while the `orders` table does), the system won't automatically add a JOIN clause.
- This feature doesn't work with Recursive CTEs yet.

## Implementation

### Using the Python SDK

```python
from dataneuron import DataNeuron

dn = DataNeuron(db_config='database.yaml', context='base_context')
dn.initialize()

# Set client context for a specific tenant
dn.set_client_context("tenant_123")

# Now all queries will be scoped to tenant_123
result = dn.query("How many users signed up last month?")
```

### Using the API

```json
POST /chat
{
  "messages": [
    {"role": "user", "content": "How many users signed up last month?"}
  ],
  "context_name": "base_context",
  "client_value": "tenant_123"
}
```

## Next Steps

- Explore [advanced querying techniques](../python-sdk/advanced-usage.md)
