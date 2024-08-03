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

```

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
```

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
- Explore [multi-tenant support](multi-tenant-support.md) to use this feature in client-specific contexts.
