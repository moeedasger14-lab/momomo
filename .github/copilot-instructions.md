# Copilot Instructions for Vite + React Project

## Project Architecture

This is a **React 19 + Vite 7** SPA template with:
- **Entry point**: `src/main.jsx` renders `App.jsx` into `#root` in `index.html`
- **Component structure**: Single `App.jsx` component (starter template; extend with additional components in `src/`)
- **Build tool**: Vite (ES modules, fast HMR) configured in `vite.config.js`
- **Runtime framework**: React with Babel transpilation for JSX

## Development Workflows

**Start dev server** (with HMR):
```bash
npm run dev
```
Vite serves at `http://localhost:5173` with fast refresh on file changes.

**Build for production**:
```bash
npm run build
```
Outputs optimized bundle to `dist/` directory.

**Preview production build locally**:
```bash
npm run preview
```

**Lint code**:
```bash
npm lint
```

## Code Conventions

### React Components
- **File naming**: PascalCase for component files (`App.jsx`, `Button.jsx`)
- **Hooks**: Use functional components with React Hooks (React 19 is installed)
- **State management**: `useState` for local state (see `App.jsx` for example)
- **StrictMode enabled**: App renders in `StrictMode` in `main.jsx` for development checks

### ESLint Rules
- Config uses `@eslint/js` recommended rules + React-specific plugins
- **React Hooks**: `eslint-plugin-react-hooks` enforces hooks rules (dependencies, etc.)
- **React Refresh**: `eslint-plugin-react-refresh` prevents exporting non-component values from component modules
- **Unused variables rule**: Components/constants starting with uppercase are ignored (e.g., `import Button from './Button'` even if unused is allowed)

### Asset Imports
- **Local assets**: Import with relative paths (`import viteLogo from '/vite.svg'`)
- **Asset location**: Place static files in `public/` (served at root) or import in `src/` (bundled)
- **SVG imports**: Supported as modules (see `App.jsx` importing `reactLogo`)

## Key Dependencies

- **React 19.2.0**: Latest with hooks support
- **React-DOM 19.2.0**: DOM rendering
- **Vite 7.2.4**: Build tool with ESM-first approach
- **ESLint 9.39.1**: Linting (flat config format)

## Important Notes

- **No TypeScript**: Project uses JSX files, not `.ts`/`.tsx`. Type checking can be added via JSDoc or TypeScript migration
- **Babel/SWC transpilation**: Vite uses Babel by default via `@vitejs/plugin-react` for Fast Refresh
- **No React Compiler**: Disabled by default (see README.md) due to performance impact; can be added if needed
- **Global styles**: `src/index.css` is the global stylesheet (imported in `main.jsx`)
- **Component-specific styles**: Use CSS files alongside components (e.g., `App.css` for `App.jsx`)

## Common Tasks

**Add a new component**:
1. Create `src/ComponentName.jsx` with default export
2. Create `src/ComponentName.css` if needed
3. Import and use in parent component: `import ComponentName from './ComponentName'`
4. ESLint will flag unused component imports, so ensure they're used

**Update styles**:
- Global styles → `src/index.css`
- Component styles → Adjacent `.css` file (imported in component)

**Extend ESLint configuration**:
Edit `eslint.config.js`. Config uses flat format (recommended format as of ESLint 9).

## Debugging

Enable browser DevTools in Vite dev server. HMR works out-of-the-box; changes to React components/styles reflect instantly.
