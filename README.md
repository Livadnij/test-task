# Test Task

A Nuxt 4 single-page app for browsing tutors. It fetches tutor profiles from JSONPlaceholder (`/users`) through an Axios wrapper, enriches them with mock profile details, and shows cards with a modal for more info.

## Stack
- Nuxt 4 + Vue 3 + Vite (SPA mode, `ssr: false`)
- Pinia for state, Vue Router for navigation
- Axios client with typed error normalization
- SCSS with shared variables/mixins; FontAwesome icons
- Vitest for unit tests

## Quick start
1. Copy env vars: `cp .env.example .env` (or create `.env`) and set `NUXT_PUBLIC_BASE_URL` (defaults to `https://jsonplaceholder.typicode.com`).
2. Install deps: `npm install`.
3. Run dev server: `npm run dev` (default at `http://localhost:3000`).

## Scripts
- `npm run dev` - start development server.
- `npm run build` - build for production.
- `npm run generate` - prerender static output.
- `npm run preview` - preview the production build locally.
- `npm run lint` / `npm run fix` - lint code or auto-fix issues.
- `npm run test` / `npm run test:watch` - run Vitest unit tests.

## Project layout
- `app/pages/tutors/index.vue` - tutors page fetching data via `getTutors`, rendering cards and a details modal.
- `app/api/api.ts` & `app/api/requests/tutor.requests.ts` - Axios client + typed request helpers hitting `/users`.
- `app/stores/tutors/*` - Pinia store for tutors list, selection, and modal state.
- `app/components/*` - UI atoms (buttons), molecules (card/header), and the tutor modal.
- `app/assets/scss` - global styles, variables, and mixins shared across components.
- `app/helpers/*` - small helpers (string/array) with coverage in `tests/array.test.ts`.
- `app/types/*` - shared TypeScript interfaces for tutors and API errors.
