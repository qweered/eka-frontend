# AGENTS.md

This document provides essential information for AI coding agents working on the Ekala Frontend project. It complements the README.md with machine-readable instructions and project-specific guidelines.

## Project Overview

Ekala Frontend is a modern React TypeScript application built with Vite, serving as the web interface for the Ekala Nix ecosystem. The project showcases core packages, CI/CD workflows, and provides an elegant user experience for developers working with Nix package management.

**Key Technologies:**

- React 19 with TypeScript
- Vite for bundling and development
- Reatom for state management and routing
- Tailwind CSS v4 for styling
- shadcn/ui component library (based on Base UI, not Radix UI)
- @base-ui/react for component primitives
- @better-fetch for API calls
- Zod for runtime validation

## Development Environment Setup

### Prerequisites

- Node.js (latest LTS recommended)
- pnpm package manager

### Initial Setup

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Environment Configuration

- `BACKEND_URL`: Base URL for API requests (configured in `src/lib/better-fetch.ts`)
- Create `.env.local` for local development overrides

## Build and Test Commands

### Development

```bash
# Start dev server with HMR
pnpm dev

# Type checking without build
pnpm typecheck
```

### Production

```bash
# Build for production (runs TypeScript check first)
pnpm build

# Preview production build locally
pnpm preview
```

### Code Quality

```bash
# Lint code
pnpm lint

# Auto-fix linting issues
pnpm lint:fix

# Format code
pnpm fmt
```

## Code Style Guidelines

### TypeScript

- Use TypeScript strict mode (enforced via `tsconfig.json`)
- Prefer explicit types over `any`
- Use path aliases: `@/*` maps to `src/*`
- Export components using named exports (default exports disabled via oxlint)

### React Patterns

- Use functional components exclusively
- Prefer `reatomComponent` from `@reatom/react` for components that need state
- Use `wrap()` from `@reatom/core` for event handlers that trigger actions
- Keep components focused and composable

### File Organization

- Components: `src/components/` (UI components in `src/components/ui/`)
- Pages: `src/pages/` (route-level components)
- Hooks: `src/hooks/`
- Utilities: `src/lib/`
- Routes: `src/routes.ts` (Reatom route definitions)

### Styling

- Use Tailwind CSS utility classes
- Follow shadcn/ui component patterns
- Use CSS variables for theming (via `next-themes`)
- Prefer Tailwind classes over custom CSS

### Naming Conventions

- Components: PascalCase (e.g., `HomePage`, `Button`)
- Files: kebab-case for pages/components (e.g., `home.tsx`, `ci.tsx`)
- Variables/functions: camelCase
- Constants: UPPER_SNAKE_CASE

### Code Formatting

- Run `pnpm fmt` before committing
- Follow existing code style (enforced by oxfmt)
- Use consistent indentation (spaces, not tabs)
- Do not add obvious comments (e.g. `{/* Navigation */}`)

## Routing and State Management

### Reatom Routes

- Define routes in `src/routes.ts` using `reatomRoute`
- Use Zod schemas for route parameter validation
- Implement async loaders for data fetching
- Use `wrap()` for async operations in loaders

### State Management

- Use Reatom atoms for global state
- Prefer local component state when possible
- Use `reatomComponent` for reactive components

### API Calls

- Use `$fetch` from `src/lib/better-fetch.ts` for all API requests
- Configure retry logic in fetch setup
- Use Zod schemas for response validation
- Handle errors appropriately

## Component Development

### Creating New Components

1. Place UI components in `src/components/ui/` (if using shadcn patterns)
2. Place page components in `src/pages/`
3. Use `reatomComponent` wrapper for components needing state
4. Export as named exports

### Using shadcn/ui Components

- Components are in `src/components/ui/`
- **Important:** This project uses shadcn/ui based on Base UI (`@base-ui/react`), not Radix UI
- Follow shadcn/ui documentation for props and usage
- When referencing underlying primitives, use Base UI documentation, not Radix UI
- Customize via Tailwind classes and component variants

### Example Component Structure

```typescript
import { reatomComponent } from '@reatom/react'
import { Button } from '@/components/ui/button'

export const MyComponent = reatomComponent(() => {
  return (
    <div className="container">
      <Button>Click me</Button>
    </div>
  )
}, 'MyComponent')
```

## Testing Instructions

### Before Committing

- Run `pnpm lint` to check for linting errors
- Run `pnpm typecheck` to verify TypeScript types
- Run `pnpm fmt` to ensure consistent formatting
- Ensure the dev server starts without errors: `pnpm dev`

### Git Hooks

- Pre-commit hook runs automatically via Lefthook
- Pre-push hook runs automatically via Lefthook
- Hooks configuration: `lefthook.yml`

## Pull Request Guidelines

### PR Title Format

- Use descriptive titles that explain the change
- Prefix with component/feature area if applicable
- Examples:
  - `feat: Add CI status page`
  - `fix: Resolve routing issue in home page`
  - `refactor: Improve API error handling`

### PR Description

- Describe what changed and why
- Include relevant context
- Reference related issues if applicable
- Note any breaking changes

### Pre-PR Checklist

- [ ] Code passes `pnpm lint`
- [ ] Code passes `pnpm typecheck`
- [ ] Code is formatted (`pnpm fmt`)
- [ ] Dev server runs without errors
- [ ] Changes tested manually in browser
- [ ] No console errors or warnings

## Security Considerations

### Environment Variables

- Never commit `.env.local` or `.env` files
- Use `.env.example` for documenting required variables
- Keep API keys and secrets out of version control

### Dependencies

- Review dependency updates before merging
- Use `pnpm audit` to check for vulnerabilities
- Prefer well-maintained packages from trusted sources

### API Security

- Validate all API responses with Zod schemas
- Handle errors gracefully without exposing sensitive information
- Use HTTPS for all API calls in production

## Common Tasks

### Adding a New Page

1. Create component in `src/pages/` (e.g., `new-page.tsx`)
2. Define route in `src/routes.ts` using `reatomRoute`
3. Add navigation link in `src/App.tsx`
4. Implement page component using `reatomComponent`

### Adding a New UI Component

1. Use shadcn CLI if applicable: `npx shadcn@latest add [component]`
2. Or create manually in `src/components/ui/`
3. Follow existing component patterns
4. Export as named export

### Modifying API Calls

1. Update `src/lib/better-fetch.ts` if changing fetch configuration
2. Use `$fetch` with Zod schema for validation
3. Handle loading and error states appropriately

### Updating Dependencies

1. Update `package.json`
2. Run `pnpm install`
3. Test thoroughly
4. Update this document if workflow changes

## Troubleshooting

### Dev Server Issues

- Clear `node_modules` and reinstall: `rm -rf node_modules && pnpm install`
- Clear Vite cache: `rm -rf node_modules/.vite`
- Check Node.js version compatibility

### Type Errors

- Run `pnpm typecheck` to see all errors
- Ensure path aliases are configured correctly
- Check `tsconfig.json` and `tsconfig.app.json`

### Linting Issues

- Run `pnpm lint:fix` to auto-fix issues
- Check `lefthook.yml` for hook configuration
- Ensure oxlint is properly configured

## Project-Specific Notes

### Reatom Integration

- This project uses Reatom for both state management and routing
- Routes are defined as Reatom atoms with loaders
- Components use `reatomComponent` wrapper for reactivity
- Always use `wrap()` for async operations in Reatom context

### Tailwind CSS v4

- Uses Tailwind CSS v4 via `@tailwindcss/vite` plugin
- Configuration may differ from v3
- Check Tailwind v4 documentation for new features

### Build Output

- Production build outputs to `dist/` directory
- Static assets are handled by Vite
- Ensure `index.html` references correct entry points

### GitHub Pages Deployment

- Deployment is automated via GitHub Actions workflow (`.github/workflows/deploy.yml`)
- The workflow builds and deploys on every push to `main` branch
- Base path is set to `/eka-frontend/` in `vite.config.ts` for GitHub Pages
- The site will be available at `https://qweered.github.io/eka-frontend/`
- To deploy manually, push to `main` or trigger the workflow from GitHub Actions tab
- Ensure GitHub Pages is enabled in repository settings (Settings → Pages → Source: GitHub Actions)

### shadcn/ui and Base UI

- This project uses shadcn/ui components built on **Base UI** (`@base-ui/react`), not Radix UI
- Base UI provides the underlying primitives for accessibility and behavior
- When working with component internals or creating custom components, reference Base UI documentation
- Do not install or use `@radix-ui/*` packages - use `@base-ui/react` instead
- The shadcn CLI should be configured to use Base UI as the underlying library

## Additional Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [Reatom Documentation](https://reatom.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Base UI Documentation](https://base-ui.com) - **Important:** Underlying primitives for shadcn/ui components
- [Zod Documentation](https://zod.dev)

---

**Last Updated:** 2025-12-17

**Maintainer Notes:**

- Keep this file updated as the project evolves
- Add new patterns and conventions as they emerge
- Review during code reviews and project audits
