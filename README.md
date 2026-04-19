# Creative Tech Catalog

A demo product catalog web app built with Next.js and TypeScript.

## Live Demo

[creative-tech-catalog.vercel.app](https://creative-tech-catalog.vercel.app)

## Features

- Product listing with search and category filter
- Dynamic product detail pages
- Quote request form with server action validation
- Dark mode with persisted user preference
- Responsive UI with mobile navigation
- REST-style API routes serving local product data

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project Structure

- `src/app` — routes and layouts
- `src/components` — reusable UI
- `src/data/products.json` — mock product data (served via `/api/products`)
- `src/lib` — utility/business logic
- `src/types` — shared types
- `public/images` — local product images

## Roadmap

- Replace mock data with a real database
- Add tests for catalog filtering and quote flow
- Improve form feedback states