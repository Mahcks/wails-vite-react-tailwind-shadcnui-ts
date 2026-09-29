# Your new Wails app

The project is ready to run:

```sh
cd {{.ProjectDir}}
wails dev
```

Wails installs frontend packages when needed. For a clean frontend install, run `npm ci` in `frontend/`.

The Go greeting method is in `app.go`; the React view is in `frontend/src/App.tsx`. This template includes shadcn/ui Button, Card, Input, and Label. From `frontend/`, add more with `npx shadcn@latest add [component-name]`.

Check the frontend with `npm run lint` and `npm run build` from `frontend/`. Build the desktop app with `wails build` from the project root. Output goes to `build/bin/`.

For platform setup and packaging, see the [Wails docs](https://wails.io/docs/introduction).
