# App Hub

A polished, responsive React + TypeScript dashboard that acts as a central launcher for independently deployed web apps. Clicking a card opens the app in a new browser tab. Fully static — no backend, database, or API calls.

## Local setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Replace app URLs

Edit `src/data/apps.ts` and replace the placeholder URLs:

```ts
url: "https://REPLACE-WITH-YOUR-APP-URL-1",
```

Add or remove apps by updating the typed array in the same file. Each app needs: `id`, `name`, `description`, `url`, `category`, `tags`, and `icon`.

## Deploy to GitHub Pages

1. Push this repository to GitHub (branch `main`).
2. In the repository go to **Settings → Pages → Source** and select **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) will automatically build and deploy on every push to `main`, or you can trigger it manually via the Actions tab.

The live site will be available at:

```
https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

For this project that is normally:

```
https://ElDorado9604.github.io/app-hub/
```

## Features

- Search apps by name, description, category, or tags
- Category filters (including Favorites)
- Star/unstar favorites (persisted in localStorage)
- Recently opened apps (up to 5)
- Dark / light theme with system preference + manual toggle
- Mobile-first, accessible, touch-friendly UI
