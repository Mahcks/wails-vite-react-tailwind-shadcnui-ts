# Wails + Vite + React + Tailwind CSS + shadcn/ui + TypeScript

A Wails v2 desktop app template with a Go backend and a React frontend. It tracks stable releases; Wails v3 is still beta.

## Requirements

- Go 1.25 or newer
- Node.js 20.19+ or 22.12+ (Node 21 and 23 are unsupported by Vite)
- The [Wails v2 platform dependencies](https://wails.io/docs/gettingstarted/installation)
- The current stable Wails v2 CLI: `go install github.com/wailsapp/wails/v2/cmd/wails@latest`

## Create an app

```sh
wails init -n myapp -t https://github.com/Mahcks/wails-vite-react-tailwind-shadcnui-ts
cd myapp
wails dev
```

Wails installs frontend dependencies when needed. To install them yourself, run `npm ci` in `frontend/`.

## Work on the frontend

```sh
cd frontend
npm ci
npm run lint
npm run build
npx shadcn@latest add dialog
```

The template includes Button, Card, Input, and Label. Add more components with the shadcn CLI from `frontend/`.

## Build

```sh
wails build
```

The executable is written to `build/bin/`. The scripts in `scripts/` provide platform-specific build commands; macOS builds need a macOS host and Linux builds need the Linux native dependencies.

## Keeping the template current

The frontend versions in `frontend/package.json` are the versions tested together here. Dependabot proposes npm and GitHub Actions updates weekly, and CI checks the frontend. TypeScript stays on 6.x until typescript-eslint supports 7.x; review major upgrades before merging. Generated projects use the installed Wails v2 CLI version in their `go.mod`.

See the [Wails documentation](https://wails.io/docs/introduction) for development and packaging details.
