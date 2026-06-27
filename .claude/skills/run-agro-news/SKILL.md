---
name: run-agro-news
description: Run, build, test, screenshot the AgroNews government agriculture agency website (Next.js). Use when asked to run, start, dev, build, smoke-test, or verify the app.
---

AgroNews — Next.js 14 news/landing site for Uzbekistan's Agency for Agricultural Development (zahq.uz). Tailwind CSS, multi-language (uz/ru/en), Netlify deploy. Backend API at `zahq.uz`, Telegram feed scraped without token, YouTube needs `YOUTUBE_API_KEY`.

All paths relative to repo root.

## Prerequisites

- Node.js 18+
- npm

## Install & Build

```bash
npm install
npm run build
```

Build output goes to `.next/`. Netlify picks it up via `@netlify/plugin-nextjs`.

## Run (agent path) — smoke test

The smoke script starts dev server, hits all routes + API endpoints, reports pass/fail:

```bash
bash .claude/skills/run-agro-news/smoke.sh
```

Output shows per-route HTTP status and Telegram/YouTube API responses. Exit 0 = all good.

To run on a custom port:

```bash
PORT=3001 bash .claude/skills/run-agro-news/smoke.sh
```

## Run (agent path) — manual curl

```bash
npx next dev -p 3000 &
sleep 5
curl -s http://localhost:3000          # homepage
curl -s http://localhost:3000/news     # news listing
curl -s http://localhost:3000/api/telegram  # telegram feed JSON
```

## Run (human path)

```bash
npm run dev
# Opens at http://localhost:3000
```

## Key pages

| Route | Content |
|---|---|
| `/` | Main landing — stats, map, news, videos, telegram, gallery |
| `/news` | News listing from zahq.uz API |
| `/about` | About the agency |
| `/contacts` | Contact info |
| `/events` | Events |
| `/press-releases` | Press releases |
| `/anti-corruption` | Anti-corruption section |
| `/digital-gov` | Digital governance |
| `/feedback` | Feedback form |
| `/surveys` | Surveys |

## API routes

| Endpoint | Env vars | Fallback |
|---|---|---|
| `/api/telegram` | `TELEGRAM_BOT_TOKEN` (optional), `TELEGRAM_CHANNEL_USERNAME` | Scrapes `t.me/agrosanoat_uz` HTML — works without token |
| `/api/youtube` | `YOUTUBE_API_KEY`, `YOUTUBE_CHANNEL_ID` | Returns `{"error":"YouTube API key not configured","videos":[]}` |

## Environment variables

None required for basic dev. Optional:

```
NEXT_PUBLIC_API_URL=https://zahq.uz    # default, no need to set
YOUTUBE_API_KEY=...                     # for YouTube video section
YOUTUBE_CHANNEL_ID=...                  # YouTube channel
TELEGRAM_BOT_TOKEN=...                 # for Telegram bot API (optional, scraping works without)
TELEGRAM_CHANNEL_USERNAME=agrosanoat_uz # default
```

## Test

No test suite configured. Smoke script is the primary verification.

## Generate API types

```bash
npm run generate:api-types
```

Reads `openapi.yaml` → writes `lib/api-types.ts`.

## Gotchas

- **Telegram API works without bot token** — the route scrapes `t.me` channel HTML as fallback. Bot token gives richer data but isn't required.
- **YouTube section silently empty without API key** — no crash, just `videos: []`.
- **Backend API at zahq.uz** — all news/events data comes from this external API. If zahq.uz is down, news sections show empty or error states. No local mock server.
- **Image domains whitelisted in next.config.js** — `zahq.uz`, `img.youtube.com`, `i.ytimg.com`, `cdn*.telesco.pe`, `images.unsplash.com`. Adding new image sources requires updating `remotePatterns`.
- **Multi-language** — handled client-side via `useLanguage` hook, not Next.js i18n routing.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Module not found` on first run | Run `npm install` |
| Images broken (hostname not configured) | Add hostname to `remotePatterns` in `next.config.js` |
| YouTube section empty | Set `YOUTUBE_API_KEY` env var |
| News section empty | Check if `zahq.uz` is reachable |
