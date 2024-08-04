# Installation

This guide will walk you through the process of installing Data Neuron and its dependencies.

## Prerequisites

Before installing Data Neuron, ensure you have the following:

- Python 3.7 or higher
- pip (Python package installer)
- Access to a supported database (SQLite, PostgreSQL, MySQL, MSSQL, CSV files, or Clickhouse)

## Installation Options

Data Neuron can be installed with different database support options. Choose the option that best fits your needs:

### 1. Base Package (SQLite support only)

```bash
pip install dataneuron
```

### 2. With Specific Database Support

For PostgreSQL:

```bash
pip install dataneuron[postgres]
```

For MySQL:

```bash
pip install dataneuron[mysql]
```

For MSSQL:

```bash
pip install dataneuron[mssql]
```

For CSV support:

```bash
pip install dataneuron[csv]
```

For Clickhouse:

```bash
pip install dataneuron[clickhouse]
```

### 3. With All Database Supports

```bash
pip install dataneuron[all]
```

### 4. With PDF Report Generation

To include PDF report generation capabilities, add the `pdf` extra:

```bash
pip install dataneuron[pdf]
```

You can combine extras as needed, for example:

```bash
pip install dataneuron[postgres,pdf]
```

Note: If you're using zsh, you might need to use quotes around the package name:

```bash
pip install "dataneuron[mysql,pdf]"
```

## System dependencies

1. Set the appropriate environment variables for your chosen LLM provider (see [Configuration](configuration) for details).

2. If you plan to use PDF report generation, install `wkhtmltopdf`:

   - On macOS: `brew install wkhtmltopdf`
   - On Ubuntu: `sudo apt-get install wkhtmltopdf`

3. Depending on the database, you should have the system dependency, some dbs don't require while others do.

## Verifying the Installation

To verify that Data Neuron has been installed correctly, run:

```bash
dnn --version
```

This should display the version number of Data Neuron.

## Next Steps

Now that you have Data Neuron installed, you're ready to:

- [Configure your environment](configuration)
- [Get started with your first query](quickstart.md)

If you encounter any issues during installation, please check our [Troubleshooting](troubleshooting.md) guide or reach out to our community for support.
