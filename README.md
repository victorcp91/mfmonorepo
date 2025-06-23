# Module Federation Demo

A demonstration project showcasing **Module Federation** architecture using modern web technologies.

## 🚀 Tech Stack

- **[Nx Monorepo](https://nx.dev)** - Development tools for monorepo management
- **[React 19](https://react.dev)** - UI library with latest features
- **[Module Federation](https://module-federation.io)** - Microfrontend architecture
- **[Rspack](https://rspack.dev)** - Fast Rust-based bundler
- **[TanStack Query](https://tanstack.com/query)** - Server state management
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://typescriptlang.org)** - Type-safe JavaScript

## 🏗️ Architecture

This project demonstrates a **microfrontend architecture** with:

- **Shell App** (Host) - Main application shell with navigation
- **Jokes Remote** - Consumes [Official Joke API](https://official-joke-api.appspot.com) to display random jokes
- **Dog Remote** - Consumes [Dog CEO API](https://dog.ceo/api) to display random dog images

Each microfrontend can be developed, deployed, and scaled independently while sharing common dependencies.

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm 8+

### Installation

```bash
npm install
```

### Running the Application

Start the complete application (shell + all remotes):

```bash
nx serve shell
```

This will start:

- **Shell app** at http://localhost:4200
- **Dog remote** at http://localhost:4201
- **Jokes remote** at http://localhost:4202

### Individual Development

Run each microfrontend independently:

```bash
# Shell app only
nx serve shell

# Dog images remote only
nx serve dog

# Jokes remote only
nx serve jokes
```

### Building

Build all applications for production:

```bash
# Build shell (host)
nx build shell

# Build remotes
nx build dog
nx build jokes

# Build all at once
nx run-many --target=build --projects=shell,dog,jokes
```

### Testing

Run tests for all projects:

```bash
nx run-many --target=test --all
```

## 📱 Usage

1. Navigate to http://localhost:4200
2. Explore the home page explaining the project
3. Click **"Jokes"** to see random jokes from the API
4. Click **"Dog Images"** to see random dog photos
5. Each section is a separate microfrontend loaded dynamically

## 🎯 Key Features

- **Dynamic Module Loading** - Remotes are loaded on-demand
- **Shared Dependencies** - React, TanStack Query shared between apps
- **Independent Development** - Each team can work on separate microfrontends
- **API Integration** - Real-world examples consuming external APIs
- **Modern Tooling** - Latest React, TypeScript, and build tools
