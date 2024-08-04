# Setup

This documentation covers the RESTful API endpoints provided by Data Neuron for integrating natural language querying capabilities into your applications.

## Base URL

The base URL for the API will depend on your deployment. For example:

- AWS Lambda: `https://your-api-gateway-url.amazonaws.com/stage`
- Self-hosted: `http://your-server-ip:port`

<!-- ## Authentication

Include your API key in the `Authorization` header of each request:

```
Authorization: Bearer YOUR_API_KEY
``` -->

## Endpoints

### 1. Chat

Process a chat message and return a response.

- **URL**: `/chat`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "messages": [
      { "role": "user", "content": "How many users signed up last month?" }
    ],
    "context_name": "your_context",
    "client_id": "client_123"
  }
  ```
- **Response**:
  ```json
  {
    "response": {
      "data": [{ "count": 1234 }],
      "column_names": ["count"]
    },
    "sql": "SELECT COUNT(*) as count FROM users WHERE signup_date >= DATE_TRUNC('month', CURRENT_DATE - INTERVAL '1 month') AND signup_date < DATE_TRUNC('month', CURRENT_DATE)"
  }
  ```

### 2. Generate Report

Generate an HTML report for a dashboard.

- **URL**: `/reports`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "dashboard_name": "sales_overview",
    "instruction": "Generate a report of our top-selling products",
    "image_path": "optional/path/to/image.jpg"
  }
  ```
- **Response**: HTML content

### 3. List Dashboards

Get a list of all available dashboards.

- **URL**: `/dashboards`
- **Method**: GET
- **Response**:
  ```json
  {
    "dashboards": [
      { "id": "sales_overview", "name": "Sales Overview" },
      { "id": "user_analytics", "name": "User Analytics" }
    ]
  }
  ```

### 4. Get Dashboard Details

Get details of a specific dashboard.

- **URL**: `/dashboards/<dashboard_id>`
- **Method**: GET
- **Response**:
  ```json
  {
    "id": "sales_overview",
    "name": "Sales Overview",
    "metrics": [
      {
        "name": "Total Revenue",
        "sql_query": "SELECT SUM(amount) FROM sales"
      }
    ]
  }
  ```

### 5. Execute Metric

Execute a specific metric's SQL query.

- **URL**: `/execute-metric`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "dashboard_id": "sales_overview",
    "metric_name": "Total Revenue",
    "parameters": {
      "start_date": "2023-01-01",
      "end_date": "2023-12-31"
    }
  }
  ```
- **Response**:
  ```json
  {
    "columns": ["total_revenue"],
    "data": [{ "total_revenue": 1000000.0 }]
  }
  ```

### 6. Execute Query

Execute a custom SQL query.

- **URL**: `/execute_query`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "sql_query": "SELECT * FROM users LIMIT 5",
    "context_name": "user_analytics",
    "client_id": "client_123"
  }
  ```
- **Response**:
  ```json
  {
    "columns": ["id", "name", "email"],
    "data": [
      { "id": 1, "name": "John Doe", "email": "john@example.com" },
      { "id": 2, "name": "Jane Smith", "email": "jane@example.com" }
    ]
  }
  ```

## Error Handling

The API uses standard HTTP status codes to indicate the success or failure of requests. In case of an error, the response will include an error message in the following format:

```json
{
  "error": "Description of the error"
}
```

Common status codes:

- 200: Successful request
- 400: Bad request (e.g., missing parameters)
- 401: Unauthorized (invalid or missing API key)
- 404: Resource not found
- 500: Internal server error
