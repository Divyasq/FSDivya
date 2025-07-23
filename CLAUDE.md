# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (starts Vite dev server)
- **Build for production**: `npm run build` (creates optimized production build)
- **Lint code**: `npm run lint` (runs ESLint across the codebase)
- **Preview production build**: `npm run preview` (serves the production build locally)

## Architecture Overview

This is a React component library showcase built with TypeScript, Vite, and TailwindCSS. The application demonstrates a catalog of reusable UI components with search, filtering, and live preview capabilities.

### Core Architecture Pattern

The application follows a **Registry-Based Component System** where:
- Components are registered in `src/data/mockData.ts` with metadata (id, name, description, category, tags)
- Each component has a corresponding demo component in `src/components/demos/`
- The registry system allows dynamic component discovery and display

### State Management

Uses React Context with useReducer pattern (`src/context/LibraryContext.tsx`):
- `LibraryState` holds components, categories, search term, and selected items
- `LibraryAction` defines state updates (search, category selection, component selection)
- `getFilteredComponents()` method handles real-time filtering by category and search term

### Key Data Structures

**Component Interface** (`src/types/component.ts`):
```typescript
interface Component {
  id: string;
  name: string;
  description: string;
  category: string;
  tags: string[];
  component: React.ComponentType<any>;
  codeExample: string;
  props?: ComponentProps;
  variants?: ComponentVariant[];
}
```

**Component Registration Pattern** (`src/data/mockData.ts`):
```typescript
{
  id: 'alert',
  name: 'Alert',
  description: 'A flexible alert component...',
  category: 'feedback',
  tags: ['alert', 'notification', 'message'],
  component: AlertDemo // Demo component that showcases the actual UI component
}
```

### Project Structure

- `src/components/ui/` - Reusable UI primitives (Button, Card, Alert, etc.)
- `src/components/layout/` - Layout components (Header, CategoryFilter)
- `src/components/library/` - Component library display components
- `src/components/demos/` - Demo components for each UI component
- `src/context/` - React Context for global state management
- `src/data/` - Component registry and mock data
- `src/types/` - TypeScript type definitions

### Component Development Pattern

When adding new components:
1. Create the UI component in `src/components/ui/`
2. Create a demo component in `src/components/demos/` that imports and showcases the UI component
3. Register the component in `src/data/mockData.ts` with appropriate metadata
4. The component will automatically appear in the library interface

### Styling System

- **TailwindCSS** for styling with custom design system
- **clsx + tailwind-merge** utility (`src/utils/cn.ts`) for conditional classes
- Consistent variant/size prop patterns across components
- Square-inspired color palette (blues, greens, neutrals)

### Current State

The project is in active development with basic component infrastructure in place. The PRD.md indicates this is Phase 1 of a multi-phase implementation focusing on foundation and core component showcase functionality.