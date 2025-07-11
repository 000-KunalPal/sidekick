# SideKick AI: The AI-Powered App Builder

<div align="center">
  <img src="/logo.png" alt="SideKick AI" width="120"/>
  
  <p align="center">
    <a href="https://github.com/000-KunalPal/sidekick/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
    </a>
    <a href="https://github.com/000-KunalPal/sidekick/pulls">
      <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
    </a>
    <a href="https://twitter.com/kunalpal0">
      <img src="https://img.shields.io/twitter/follow/kunalpal0?style=social" alt="Follow on X">
    </a>
  </p>
</div>

SideKick AI is an open-source, AI-native full-stack application builder that turns text prompts into fully functional web apps — from frontend to backend, database, auth, and even deployment-ready sandboxes.

> This project serves as a learning and experimentation playground for building an AI app-generation engine — inspired by tools like Lovable.dev, V0.dev, and Bolt.ai. It is an ongoing prototype that will shape the foundation for a production-grade app in the future.

## ✨ Key Features

- 🚀 **Modern Frontend**: Built using Next.js 15 and React 19
- 🎨 **Clean UI**: Styled with Tailwind CSS v4 and Shadcn/ui components
- 📡 **End-to-End Type Safety**: Powered by tRPC
- 🧠 **AI Agent Architecture**: Modular AI orchestration using Inngest Agents
- 🔁 **Async Workflows**: Background job handling with Inngest
- 🖥️ **Isolated Code Execution**: Secure sandboxes via E2B
- 🐳 **Dockerized Runtimes**: Templated environments for consistent builds
- 🤖 **Multi-Model Support**: Works with OpenAI, Anthropic, and Groq models
- ⚡ **Prompt-to-App**: Generate entire components or apps from natural language
- 🌐 **Live Previews**: Every generated app has a deployable URL
- 📦 **Postgres DB**: Integrated via Prisma ORM with Neon
- 🔐 **Auth & Billing**: Managed via Clerk with usage-based credits
- 🧾 **Developer UX**: Dual-view (Code + Preview) for rapid iterations

## 🛠️ Tech Stack

| Category | Technologies |
|----------|--------------|
| Framework | Next.js, React |
| Styling | Tailwind, Shadcn/ui |
| API & Types | tRPC, TypeScript |
| AI & Background | Inngest, OpenAI, Anthropic |
| Sandbox | E2B, Docker |
| Database | Prisma, Neon PostgreSQL |
| Auth & Billing | Clerk |
| DevOps & QA | CodeRabbit |

## 📍 Project Status

This is a work-in-progress research and prototyping repo, not a production-ready application (yet).

🔧 **The current focus is on building:**

- E2B integration for sandboxed runtime code execution
- End-to-end prompt-to-app pipeline
- Live app preview & code toggling experience

If you're interested in building with or contributing to the future of AI-assisted app development — you're in the right place!

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- pnpm (Install with: `npm install -g pnpm`)
- Docker Desktop (running)
- Accounts with Clerk, Neon, OpenAI, and E2B

### Installation

```bash
git clone https://github.com/000-KunalPal/sidekick.git
cd sidekick
pnpm install
cp .env.example .env.local
```

Fill in `.env.local` with the appropriate API keys and config from:

- [Clerk.dev](https://clerk.dev)
- [Neon.tech](https://neon.tech)
- [OpenAI](https://openai.com)
- [E2B.dev](https://e2b.dev)

### Set up Database

```bash
pnpm prisma migrate dev
```

### Start Development

In two separate terminals:

```bash
# Terminal 1
pnpm dev
# App: http://localhost:3000

# Terminal 2
pnpm inngest:dev
# Inngest UI: http://localhost:8288
```

## 🤝 Contributing

Contributions are welcome and appreciated!

1. Fork the repo
2. Create a new branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "feat: add amazing feature"`
4. Push the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

All PRs are automatically reviewed by CodeRabbit AI for feedback.

## 📄 License

This project is open-sourced under the MIT License.

## 🙋‍♂️ Why This Exists

SideKick AI is my personal initiative to explore how far we can go with LLMs, agents, and modern infra to generate real, working software from natural language.

It's a learning lab, a prototype engine, and a stepping stone towards a bigger AI app builder platform.

Let's build the future of software — together. 🌟
