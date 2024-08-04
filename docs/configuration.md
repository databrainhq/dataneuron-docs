# Configuration

After installation, you need to set up your environment variables for the LLM provider you want to use. Here are the options:

### Claude (Default)

```bash
export CLAUDE_API_KEY=your_claude_api_key_here
```

### OpenAI

```bash
export DATA_NEURON_LLM=openai
export OPENAI_API_KEY=your_openai_api_key_here
export OPENAI_MODEL=gpt-4  # Optional, defaults to gpt-4
```

### Azure OpenAI

```bash
export DATA_NEURON_LLM=azure
export AZURE_OPENAI_API_KEY=your_azure_api_key_here
export AZURE_OPENAI_API_VERSION=your_api_version_here
export AZURE_OPENAI_ENDPOINT=your_azure_endpoint_here
export AZURE_OPENAI_DEPLOYMENT_NAME=your_deployment_name_here
```

### Custom Provider

```bash
export DATA_NEURON_LLM=custom
export DATA_NEURON_LLM_API_KEY=your_custom_api_key_here
export DATA_NEURON_LLM_ENDPOINT=your_custom_endpoint_here
export DATA_NEURON_LLM_MODEL=your_preferred_model_here
```

### Ollama (for local LLM models)

```bash
export DATA_NEURON_LLM=ollama
export DATA_NEURON_LLM_MODEL=your_preferred_local_model_here
```

## Next Steps

After installation and configuration, you're ready to start using Data Neuron! Check out our [Quick Start Guide](quickstart.md) to begin interacting with your data.
