import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const CodeBlock = ({ children, language }) => (
  <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto text-sm">
    <code className={`language-${language}`}>{children}</code>
  </pre>
);

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
      <header className="bg-blue-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">{siteConfig.title}</h1>
          <p className="mt-2 text-xl">{siteConfig.tagline}</p>
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
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <FeatureCard
              title="Natural Language to SQL"
              description="Ask questions, get data without writing complex SQL queries."
            />
            <FeatureCard
              title="Multiple Databases"
              description="Support for SQLite, PostgreSQL, MySQL, and more."
            />
            <FeatureCard
              title="Multi-Tenant Support"
              description="Easily manage client-specific data access and queries."
            />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Get Started</h2>
          <p className="text-lg mb-4">Ready to chat with your data?</p>
          <Button size="lg" asChild>
            <Link to="/docs/intro">View Documentation</Link>
          </Button>
        </section>
      </main>
    </Layout>
  );
}
