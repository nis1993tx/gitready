export const webApp = {
  name: "Web App",
  description: "For web applications built with React, Next.js, Vue, etc.",
  category: "web-app",
  markdown: `# {{PROJECT_NAME}}

{{SHORT_DESCRIPTION}}

![Demo]({{DEMO_GIF_OR_SCREENSHOT_URL}})

## Features

- {{FEATURE_1}}
- {{FEATURE_2}}
- {{FEATURE_3}}

## Tech Stack

- **Frontend:** {{FRONTEND_TECH}}
- **Backend:** {{BACKEND_TECH}}
- **Database:** {{DATABASE}}
- **Deployment:** {{DEPLOYMENT}}

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
git clone https://github.com/{{YOUR_GITHUB}}/{{REPO_NAME}}.git
cd {{REPO_NAME}}
npm install
\`\`\`

### Environment Variables

Create a \`.env.local\` file:

\`\`\`
{{ENV_VAR_1}}=your_value
{{ENV_VAR_2}}=your_value
\`\`\`

### Running Locally

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
{{PROJECT_STRUCTURE}}
\`\`\`

## Contributing

Contributions are welcome! Please open an issue first to discuss what you'd like to change.

## License

[MIT](LICENSE)
`,
};
