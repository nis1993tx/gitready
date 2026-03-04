export const cliTool = {
  name: "CLI Tool",
  description: "For command-line tools and scripts.",
  category: "cli-tool",
  markdown: `# {{PROJECT_NAME}}

{{SHORT_DESCRIPTION}}

## Installation

\`\`\`bash
npm install -g {{PACKAGE_NAME}}
\`\`\`

Or use directly with npx:

\`\`\`bash
npx {{PACKAGE_NAME}} {{EXAMPLE_ARGS}}
\`\`\`

## Usage

\`\`\`bash
{{COMMAND}} [options] <input>
\`\`\`

### Options

| Flag | Description | Default |
|------|------------|---------|
| \`-o, --output\` | {{OPTION_1_DESC}} | {{DEFAULT_1}} |
| \`-v, --verbose\` | {{OPTION_2_DESC}} | \`false\` |
| \`-h, --help\` | Show help | |

### Examples

\`\`\`bash
# {{EXAMPLE_1_DESC}}
{{EXAMPLE_1_COMMAND}}

# {{EXAMPLE_2_DESC}}
{{EXAMPLE_2_COMMAND}}
\`\`\`

## Configuration

Create a \`.{{CONFIG_NAME}}rc\` file in your project root:

\`\`\`json
{
  "{{CONFIG_KEY}}": "{{CONFIG_VALUE}}"
}
\`\`\`

## Contributing

1. Fork the repo
2. Create your feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## License

[MIT](LICENSE)
`,
};
