# Usage

### JavaScript

```javascript
const axios = require("axios");

const baseUrl = "https://your-api-url.com";
const apiKey = "your_api_key";

const headers = {
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
};

// Chat example
axios
  .post(
    `${baseUrl}/chat`,
    {
      messages: [
        {
          role: "user",
          content: "What were our top selling products last month?",
        },
      ],
      context_name: "sales_analytics",
      client_id: "client_123",
    },
    { headers }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

// Execute metric example
axios
  .post(
    `${baseUrl}/execute-metric`,
    {
      dashboard_id: "sales_overview",
      metric_name: "Monthly Revenue",
      parameters: { month: "2023-05" },
    },
    { headers }
  )
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

## Best Practices

1. Always use HTTPS to ensure secure communication.
2. Keep your API key confidential and rotate it regularly.
3. Implement proper error handling in your client applications.
4. Consider implementing rate limiting to prevent abuse of the API.
5. Use appropriate context names and client IDs to ensure accurate and relevant results.

For more information on integrating Data Neuron into your applications, refer to our [SDK documentation](python-sdk/setup.md) and [deployment guides](deployment/aws-lambda.md).
