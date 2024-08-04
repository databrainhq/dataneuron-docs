import React from "react";
import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const FeatureCard = ({ title, description }) => (
  <Card className="p-4">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </Card>
);

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Chat with your data effortlessly using Data Neuron"
    >
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Build Internal and Customer Facing Data Apps
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            The library for you to maintain semantic layer and do text2sql
            accurately with your DB
          </p>
          <div className="inline-block">
            <CodeBlock language="bash" className="text-lg">
              pip install dataneuron
            </CodeBlock>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Choose Your Integration
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Python SDK</h3>
              <CodeBlock language="python">
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
            <Card className="p-6">
              <h3 className="text-2xl font-semibold mb-4">API Endpoint</h3>
              <CodeBlock language="json">
                {`POST /chat
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
            <p className="mb-4">
              Experience Data Neuron directly from your command line:
            </p>
            <CodeBlock language="bash">dnn --chat your_context_name</CodeBlock>
            <div className="mt-4 bg-gray-200 dark:bg-gray-700 p-4 rounded-md text-center">
              [CLI Chat Video Placeholder]
            </div>
          </Card>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
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
