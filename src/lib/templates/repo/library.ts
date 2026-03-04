export const library = {
  name: "Library / Package",
  description: "For npm packages, Python libraries, or any reusable code library.",
  category: "library",
  markdown: `# {{PACKAGE_NAME}}

[![npm version](https://img.shields.io/npm/v/{{PACKAGE_NAME}}.svg)](https://www.npmjs.com/package/{{PACKAGE_NAME}})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

{{SHORT_DESCRIPTION}}

## Installation

\`\`\`bash
npm install {{PACKAGE_NAME}}
\`\`\`

## Quick Start

\`\`\`typescript
import { {{MAIN_EXPORT}} } from '{{PACKAGE_NAME}}';

{{QUICK_START_CODE}}
\`\`\`

## API Reference

### \`{{FUNCTION_1}}({{PARAMS_1}})\`

{{FUNCTION_1_DESCRIPTION}}

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| \`{{PARAM_NAME}}\` | \`{{PARAM_TYPE}}\` | {{PARAM_DESC}} |

**Returns:** \`{{RETURN_TYPE}}\`

### \`{{FUNCTION_2}}({{PARAMS_2}})\`

{{FUNCTION_2_DESCRIPTION}}

## Examples

### {{EXAMPLE_1_TITLE}}

\`\`\`typescript
{{EXAMPLE_1_CODE}}
\`\`\`

### {{EXAMPLE_2_TITLE}}

\`\`\`typescript
{{EXAMPLE_2_CODE}}
\`\`\`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

## License

[MIT](LICENSE)
`,
};
