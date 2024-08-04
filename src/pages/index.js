import React from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const FeatureCard = ({ title, description }) => (
  <Card className="p-4 flex-1 min-w-[200px] w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </Card>
);

export default function Home() {
  return (
    <Layout
      title={`Chat with your Data through python sdk and API`}
      description="Chat with your data effortlessly using Data Neuron"
    >
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build Internal and Customer Facing Data Apps
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Maintain semantic layer and chat with db accurately
          </p>
          <div className="inline-block">
            <CodeBlock language="bash" className="text-lg">
              pip install dataneuron
            </CodeBlock>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 overflow-x-hidden">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Choose Your Integration
          </h2>
          <div className="flex flex-wrap gap-8">
            <Card className="p-6 flex-1 min-w-[300px]">
              <h3 className="text-2xl font-semibold mb-4">Python SDK</h3>
              <CodeBlock
                language="python"
                className="text-lg whitespace-pre-wrap"
              >
                {`from dataneuron import DataNeuron

dn = DataNeuron(db_config='database.yaml', context='your_context')
dn.initialize()

# Optional: Set client context for multi-tenant scenarios
dn.set_client_context("client_123")

result = dn.query("How many users signed up last month?")
print(f"SQL: {result['sql']}")
print(f"Result: {result['result']}")`}
              </CodeBlock>
              <Button className="mt-4" asChild>
                <Link to="/docs/python-sdk/setup">Learn More</Link>
              </Button>
            </Card>
            <Card className="p-6 flex-1 min-w-[300px]">
              <h3 className="text-2xl font-semibold mb-4">API Endpoint</h3>
              <CodeBlock language="markdown" className="whitespace-pre-wrap">
                {`Server: dnn --server 

Request: POST /chat
{
  "messages": [
    {"role": "user", "content": "How many users signed up last month?"}
  ],
  "context_name": "your_context",
  "client_value": "client_123"  // Optional: For multi-tenant scenarios
}

Response:
{
  "sql": "SELECT COUNT(*) FROM users WHERE ...",
  "result": {"count": 1234},
  "explanation": "Last month, 1234 new users signed up."
}`}
              </CodeBlock>
              <Button className="mt-4" asChild>
                <Link to="/docs/api-endpoint/setup">Learn More</Link>
              </Button>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Chat using CLI</h2>
          <Card className="p-6">
            <div className="w-full max-w-[350px] md:max-w-none mx-auto overflow-hidden">
              <video className="w-full rounded-md shadow-lg" controls>
                <source
                  src="https://github.com/user-attachments/assets/06969cf9-ca2b-4f95-8a33-8764556ce625"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Semantic Layer</h2>
          <Card className="p-6">
            <p className="mb-4">
              The framework to maintain your semantic layer
            </p>
            <div className="w-full max-w-[350px] md:max-w-none mx-auto overflow-hidden">
              <video className="w-full rounded-md shadow-lg" controls>
                <source
                  src="https://github.com/user-attachments/assets/b5bc7c7f-5a0a-43fb-8802-2fd88a6aa296"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <div className="flex flex-wrap gap-4">
            <FeatureCard
              title="Semantic Layer"
              description="Easily maintain and improve your data context using YAML files, ensuring accurate and relevant query responses."
            />
            <FeatureCard
              title="Natural Language to SQL"
              description="Convert plain English questions into precise SQL queries effortlessly."
            />
            <FeatureCard
              title="Multiple Databases"
              description="Support for SQLite, PostgreSQL, MySQL, MSSQL, CSV files (via DuckDB), and Clickhouse."
            />
            <FeatureCard
              title="Multi-Tenant Support"
              description="Easily manage client-specific data access and queries within a single instance."
            />
            <FeatureCard
              title="Flexible Integration"
              description="Use as a Python SDK, deploy as an API endpoint, or interact via CLI for versatile integration options."
            />
            <FeatureCard
              title="LLM Integration"
              description="Powered by major Language Models like Claude (default), OpenAI, LLAMA, and more."
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
          <p className="text-lg mb-4">
            Ready to transform how you interact with your data?
          </p>
          <Button size="lg" asChild>
            <Link to="/docs/intro">View Documentation</Link>
          </Button>
        </section>
      </main>
    </Layout>
  );
}
