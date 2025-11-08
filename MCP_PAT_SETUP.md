# GitHub Personal Access Token (PAT) Setup for MCP Server

This guide explains how to configure the Model Context Protocol (MCP) server to use a Personal Access Token (PAT) for GitHub authentication.

## Prerequisites

Before you begin, you need to create a Personal Access Token in your GitHub account.

### Step 1: Create a GitHub Personal Access Token

1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token" → "Generate new token (classic)"
3. Give your token a descriptive name (e.g., "MCP Server Token")
4. Select the following scopes:
   - `repo` - Full control of private repositories
   - `read:packages` - Download packages from GitHub Package Registry
5. Click "Generate token"
6. **Important:** Copy the token immediately and store it securely. You won't be able to see it again!

## Configuration Options

This repository includes two configuration approaches for MCP server PAT authentication:

### Option 1: VS Code Settings (Recommended)

The MCP server configuration is included in `.vscode/settings.json`:

```json
{
  "mcp.servers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "headers": {
        "Authorization": "Bearer ${input:github_token}"
      }
    }
  },
  "inputs": [
    {
      "id": "github_token",
      "type": "promptString",
      "description": "GitHub Personal Access Token",
      "password": true
    }
  ]
}
```

### Option 2: Standalone MCP Configuration

Alternatively, you can use the `mcp-config.json` file in the root directory:

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "headers": {
        "Authorization": "Bearer ${input:github_token}"
      }
    }
  },
  "inputs": [
    {
      "id": "github_token",
      "type": "promptString",
      "description": "GitHub Personal Access Token",
      "password": true
    }
  ]
}
```

## How to Use

### Initial Setup

1. **Skip OAuth**: When prompted to authenticate with GitHub, cancel the OAuth flow
2. **Restart MCP Server**: In VS Code, reload the window or restart the MCP server
3. **Enter PAT**: When prompted, paste your Personal Access Token
4. The token will be securely stored and used for all GitHub API requests

### Configuration Explained

- **headers.Authorization**: Uses Bearer token authentication with your PAT
- **${input:github_token}**: References the input prompt defined below
- **inputs**: Defines a secure prompt for entering the PAT
  - `id`: Unique identifier referenced in the headers
  - `type`: Set to "promptString" for text input
  - `description`: User-facing prompt text
  - `password`: Set to `true` to hide the token while typing

## Security Best Practices

1. **Never commit your PAT to version control**
2. **Use tokens with minimal required scopes**
3. **Rotate tokens regularly**
4. **Revoke tokens immediately if compromised**
5. **Store tokens securely** (e.g., in a password manager)

## Troubleshooting

### Token Not Working

- Verify the token has the correct scopes (`repo` and `read:packages`)
- Check if the token has expired
- Ensure you copied the entire token without extra spaces

### MCP Server Not Starting

- Restart VS Code completely
- Check the VS Code output panel for MCP server logs
- Verify the configuration JSON is valid (no syntax errors)

### Need to Change Token

1. Restart the MCP server in VS Code
2. When prompted, enter the new token
3. Or update your VS Code settings to clear cached credentials

## Additional Resources

- [GitHub PAT Documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/)
- [VS Code Settings Reference](https://code.visualstudio.com/docs/getstarted/settings)

## Support

If you encounter issues:
1. Check the troubleshooting section above
2. Review MCP server logs in VS Code
3. Verify your GitHub token is valid and has correct permissions
4. Contact the MyDreamConnect Tech Bootcamp support team

---

**Note**: This configuration is part of the MyDreamConnect Tech Bootcamp — Cohort 3 project infrastructure.
