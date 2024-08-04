# Python SDK Setup

The Data Neuron Python SDK allows you to integrate powerful natural language querying capabilities directly into your Python applications.

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
