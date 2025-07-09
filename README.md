SideKick AI: The AI-Powered App Builder

![alt text](https://via.placeholder.com/1280x640.png?text=GenApp+AI+-+Build+Full-Stack+Apps+with+a+Prompt)

<p align="center">
<a href="https://github.com/your-username/your-repo-name/blob/main/LICENSE">
<img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License">
</a>
<a href="https://github.com/your-username/your-repo-name/pulls">
<img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
</a>
<a href="https://twitter.com/your-twitter-handle">
<img src="https://img.shields.io/twitter/follow/your-twitter-handle?style=social" alt="Follow on Twitter">
</a>
</p>

GenApp AI is a full-stack, AI-powered application builder that generates complete web applications from simple text prompts. This project demonstrates how to orchestrate programmable AI agents using a modern, AI-first toolchain to handle everything from code generation to a full Git workflow.

This repository is the official codebase for the Full-Stack AI App Builder Tutorial Series.
✨ Key Features

    🚀 Modern Frontend: Built with Next.js 15 and React 19 for peak performance.

    🎨 Sleek UI: Styled with Tailwind v4 and pre-built components from Shadcn/ui.

    📡 End-to-End Type Safety: Using tRPC for robust, type-safe API communication.

    🧠 AI Agent Architecture: Programmable AI agents powered by the Inngest Agent Toolkit.

    🔁 Reliable Background Jobs: Asynchronous task orchestration with Inngest.

    🖥️ Secure Code Execution: Isolated, secure cloud sandboxes for runtime execution with E2B.

    🐳 Templated Environments: Docker-based sandbox templating for consistent and reproducible runtimes.

    🧠 Multi-Model Support: Seamlessly switch between OpenAI, Anthropic, and Grok models.

    🧱 AI-Powered Generation: Create components and entire applications from simple text prompts.

    🗂️ Live Project Previews: Instant access to generated projects via live URLs.

    📦 Robust Database: Postgres integration with Prisma ORM and Neon serverless Postgres.

    🔐 Authentication & Billing: Secure user management and subscription billing handled by Clerk.

    🧾 Usage-Based Credits: Built-in credit system to track and manage AI usage.

    🧪 Dual View Interface: Toggle between a live application preview and a code explorer.

🛠️ Tech Stack
Category	Technology
Framework	

![alt text](https://img.shields.io/badge/Next.js-15-black?logo=next.js)

![alt text](https://img.shields.io/badge/React-19-blue?logo=react)

Styling	

![alt text](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?logo=tailwind-css)

![alt text](https://img.shields.io/badge/shadcn/ui-black?logo=v)

API & Types	

![alt text](https://img.shields.io/badge/tRPC-2A9FEE?logo=trpc&logoColor=white)

![alt text](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

AI & Background	

![alt text](https://img.shields.io/badge/Inngest-FF6B35?logo=inngest&logoColor=white)

![alt text](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=white)

![alt text](https://img.shields.io/badge/Anthropic-D06A42?logo=anthropic&logoColor=white)

Sandbox	

![alt text](https://img.shields.io/badge/E2B-FFC600?logo=e2b&logoColor=black)

![alt text](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)

Database	

![alt text](https://img.shields.io/badge/Prisma-2D3748?logo=prisma&logoColor=white)

![alt text](https://img.shields.io/badge/Neon-00E5AC?logo=neon&logoColor=black)

![alt text](https://img.shields.io/badge/PostgreSQL-4169E1?logo=postgresql&logoColor=white)

Auth & Billing	

![alt text](https://img.shields.io/badge/Clerk-6C47FF?logo=clerk&logoColor=white)

DevOps	

![alt text](https://img.shields.io/badge/CodeRabbit-6D49D2?logo=coderabbit&logoColor=white)

📍 Current Project Status

This project is actively being developed following the Full-stack AI App Builder tutorial. The repository reflects the progress made in the video series.

I have just completed the E2B Sandboxes integration and are actively working towards finalizing the app.

🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.
Prerequisites

    Node.js (v18 or later)

    pnpm package manager (npm install -g pnpm)

    Docker Desktop (must be running)

    Accounts with Clerk, Neon, OpenAI, and E2B.

Installation & Setup

    Clone the repository:
    Generated bash

          
    git clone https://github.com/your-username/your-repo-name.git
    cd your-repo-name

        

    IGNORE_WHEN_COPYING_START

Use code with caution. Bash
IGNORE_WHEN_COPYING_END

Install dependencies:
Generated bash

      
pnpm install

    

IGNORE_WHEN_COPYING_START
Use code with caution. Bash
IGNORE_WHEN_COPYING_END

Set up environment variables:
Create a .env.local file in the root of the project by copying the example file.
Generated bash

      
cp .env.example .env.local

    

IGNORE_WHEN_COPYING_START
Use code with caution. Bash
IGNORE_WHEN_COPYING_END

Now, fill in the .env.local file with your credentials:
Generated env

      
# Neon Database Connection String (from your Neon dashboard)
DATABASE_URL="postgres://..."

# Clerk Authentication (from your Clerk dashboard)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_test_..."
CLERK_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# Inngest Keys (run `npx inngest-cli@latest dev` to get these)
INNGEST_EVENT_KEY="<your-inngest-event-key>"
INNGEST_SIGNING_KEY="<your-inngest-signing-key>"

# AI Model Keys
OPENAI_API_KEY="sk-..."
# ANTHROPIC_API_KEY="sk-ant-..." # Optional
# GROQ_API_KEY="gsk_..." # Optional

# E2B Sandbox API Key (from your E2B dashboard)
E2B_API_KEY="e2b_..."

    

IGNORE_WHEN_COPYING_START
Use code with caution. Env
IGNORE_WHEN_COPYING_END

Set up the database:
Run the Prisma migration to set up your database schema on Neon.
Generated bash

      
pnpm prisma migrate dev

    

IGNORE_WHEN_COPYING_START

    Use code with caution. Bash
    IGNORE_WHEN_COPYING_END

Running the Application

You need to run two processes simultaneously in separate terminal windows.

    Start the Next.js development server:
    Generated bash

          
    pnpm dev

        

    IGNORE_WHEN_COPYING_START

Use code with caution. Bash
IGNORE_WHEN_COPYING_END

Your application will be available at http://localhost:3000.

Start the Inngest development server:
This command proxies your local Inngest functions and provides a UI for inspecting events and runs.
Generated bash

      
pnpm inngest:dev

    

IGNORE_WHEN_COPYING_START

    Use code with caution. Bash
    IGNORE_WHEN_COPYING_END

    The Inngest Dev Server will be available at http://localhost:8288.

🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

    Fork the Project

    Create your Feature Branch (git checkout -b feature/AmazingFeature)

    Commit your Changes (git commit -m 'Add some AmazingFeature')

    Push to the Branch (git push origin feature/AmazingFeature)

    Open a Pull Request

All PRs are automatically reviewed by CodeRabbit AI for instant feedback on your changes.
📄 License

Distributed under the MIT License. See LICENSE for more information.

    Clerk

    Vercel for the Next.js framework.
