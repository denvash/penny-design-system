# Penny Design System - Example

"Penny" - minimal example of a design system implementation example; [Figma](https://www.figma.com/design/wwAMVAirmeYLPxt1oq6IoB/Penny---Design-System-example?node-id=0-1&t=GdqcYMk1yqHFwWnL-1).

Supported components:

1. Button
2. Card
3. Modal
4. Drawer

![Components Preview](image.png)

## Goal

1. Bootstap template
2. Implementation example

## Installation

```
yarn install
yarn storybook
```

![Preview](image-1.png)

## Package Details

1. Vite (React+Typescript): build tool
2. Storybook: UI dev env
3. Tailwind CSS: simplification CSS layer
4. Headless UI: minimal layer on top of native HTML elements (unstyled, accessibility)
5. cva: CSS-in-TS variants layer
6. cx: conditionally string joins
7. Prettier + plugin: formatting regex detected plaintext (format tw class names)
8. vite-tsconfig-paths: consider path alias TS compiler feature.
9. @storybook/builder-vite: consider the vite builder for SB (to include path aliases)
10. PostCSS + Autoprefixer plugin: transform CSS styles with JS plugins (used by tw).

## DevX configurations

Allow tailwind [IntelliSense](https://tailwindcss.com/docs/editor-setup) in VSCode, extend `settings.json`:

```
  // tailwind
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(((?:[^()]|\\([^()]*\\))*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(((?:[^()]|\\([^()]*\\))*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ["clsx\\(([^)]*)\\)", "\"([^\"]*)\""]
  ],
  "tailwindCSS.includeLanguages": {
    "html.erb": "html",
    "javascript": "javascript",
    "typescriptreact": "typescriptreact",
    "typescript": "typescript"
  },
```

This allows extension detect+lint inside `cva()`,`cx()`,`clsx()` scope.
