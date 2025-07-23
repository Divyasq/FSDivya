# Square Business Application Demo

A comprehensive business application built with React + Vite + TypeScript, featuring a dashboard, items management, and UI component library.

## 🚀 Quick Start

### Prerequisites

#### 1. Install Node.js
- Visit [nodejs.org](https://nodejs.org/)
- Download and install the **LTS version**
- Verify: `node --version` and `npm --version`

#### 2. Install Goose AI Assistant
- **Goose should already be installed** via Square's managed software center
- If not available, visit [Goose Releases](https://github.com/squareup/goose-releases/releases) (requires Square GitHub access)
- Open the Goose UI application once installed

### Project Setup

1. **Get the code:**
   - Visit this repository on GitHub
   - Click the green **"Use this template"** button
   - Create your own repository
   - Clone it to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
   cd YOUR-REPO-NAME
   ```

2. **Configure Goose:**
   - Open the Goose UI application
   - Click on **Settings** or **Working Directory**
   - Change the working directory to your cloned project folder (e.g., `/Users/yourname/projects/YOUR-REPO-NAME`)

3. **Install dependencies and run:**
   ```bash
   npm install
   npm run dev
   ```

Application runs at `http://localhost:5173`

## 🤖 Working with Goose

This project is optimized for Goose development. Once you've set your working directory in the Goose UI:

1. Open the Goose UI application
2. Make sure the working directory is set to your project folder
3. Start chatting with Goose about your development tasks

Goose automatically reads:
- `.goosehints` - Development guidelines
- `PRD.md` - Product requirements
- `goose.md` - Project architecture guide

### Key Features
- **Context Awareness**: Understands project structure and patterns
- **Best Practices**: Enforces development guidelines automatically
- **Incremental Development**: Breaks complex requests into manageable chunks

## 📁 Project Structure

```
src/
├── components/ui/       # 25+ reusable UI components
├── components/layout/   # Layout components
├── context/            # State management (React Context)
├── data/              # Mock data
├── pages/             # Page components
├── types/             # TypeScript definitions
└── utils/             # Utility functions
```

## 🛠 Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint

## 🏗 Tech Stack

- React 18 + TypeScript
- Vite build tool
- Tailwind CSS
- React Router v7
- Goose AI Assistant

## 🔧 Troubleshooting

**Node version issues:**
```bash
node --version  # Should be v18+
```

**Port in use:**
```bash
lsof -ti:5173 | xargs kill -9
```

**Dependencies:**
```bash
rm -rf node_modules package-lock.json && npm install
```

**Goose issues:**
- Make sure the Goose UI app is running
- Verify the working directory is set correctly in Goose settings
- Try restarting the Goose application if it becomes unresponsive

## 📚 Resources

- [Goose Documentation](https://block.github.io/goose/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/docs)
