# Multi-tenant Support

Data Neuron provides robust multi-tenant support, allowing you to manage and isolate data for different clients or organizations within a single instance.

## Key Features

1. **Data Isolation**: Ensure that each tenant's data is securely separated from others.
2. **Customizable Contexts**: Create specific contexts for each tenant, tailoring the semantic layer to their needs.
3. **Efficient Resource Utilization**: Share computational resources across tenants while maintaining data separation.

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

## Best Practices

1. **Consistent Naming**: Use a consistent naming convention for tenant identifiers.
2. **Access Control**: Implement strict access controls to prevent cross-tenant data access.
3. **Performance Monitoring**: Monitor query performance across tenants to ensure fair resource allocation.

## Next Steps

- Learn how to [optimize your semantic layer](../advanced-features/semantic-layer-optimization.md) for multi-tenant scenarios
- Explore [advanced querying techniques](../python-sdk/advanced-querying.md) with multi-tenant data
