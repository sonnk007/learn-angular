# Angular Frontend Standards (v21+)

This project uses modern Angular (v21.1+) and Vitest for testing.

## Engineering Standards

### 1. Components & Architecture
- **Signals**: Prioritize Angular Signals for state management and reactivity.
- **Standalone Components**: Use standalone components, directives, and pipes. Avoid `NgModule` unless necessary for third-party compatibility.
- **Control Flow**: Use the `@if`, `@for`, `@switch` syntax.
- **Performance**: Use `OnPush` change detection strategy by default.

### 2. Styling
- **Vanilla SCSS**: Use SCSS for styling.
- **BEM Convention**: Follow BEM (Block Element Modifier) for CSS class naming if applicable.
- **Responsive Design**: Ensure mobile-first responsiveness.

### 3. State Management & Services
- **Reactive services**: Use `inject()` function for dependency injection.
- **API Communication**: Centralize HTTP calls in dedicated services. Use Interceptors for global error handling and authentication headers.

### 4. Testing & Quality
- **Vitest**: Use Vitest for unit tests.
- **Prettier**: Ensure code adheres to the defined `.prettierrc` configuration.

## Development Workflow
- **Learning Focus**: Document complex logic and explain the usage of new Angular features (like Signals, Effects, or new APIs).
- **Type Safety**: Maintain strict TypeScript typing. Avoid `any`.
