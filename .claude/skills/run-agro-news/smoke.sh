#!/usr/bin/env bash
# Smoke test for AgroNews — start dev server, hit key routes, report status.
# Usage: bash .claude/skills/run-agro-news/smoke.sh
set -euo pipefail

PORT="${PORT:-3000}"
BASE="http://localhost:$PORT"
PID_FILE="/tmp/agronews-dev.pid"

cleanup() {
  if [ -f "$PID_FILE" ]; then
    kill "$(cat "$PID_FILE")" 2>/dev/null || true
    rm -f "$PID_FILE"
  fi
}
trap cleanup EXIT

echo "=== Installing deps ==="
npm install --prefer-offline --no-audit 2>&1 | tail -3

echo "=== Starting dev server on port $PORT ==="
npx next dev -p "$PORT" &>/dev/null &
echo $! > "$PID_FILE"

# Wait for server ready (compile + hydrate)
for i in $(seq 1 30); do
  if curl -s -o /dev/null -w '' "$BASE" 2>/dev/null; then
    echo "Server ready after ${i}s"
    break
  fi
  sleep 1
done
# Let Next.js finish initial compilation
sleep 3

echo ""
echo "=== Route checks ==="
ROUTES=(
  "/"
  "/news"
  "/about"
  "/contacts"
  "/events"
  "/press-releases"
  "/feedback"
  "/digital-gov"
  "/anti-corruption"
  "/api/telegram"
)

PASS=0
FAIL=0
for route in "${ROUTES[@]}"; do
  CODE=$(curl -s -o /dev/null -w "%{http_code}" "$BASE$route" 2>/dev/null || echo "000")
  if [ "$CODE" = "200" ]; then
    echo "  OK  $CODE $route"
    PASS=$((PASS + 1))
  else
    echo "  FAIL $CODE $route"
    FAIL=$((FAIL + 1))
  fi
done

echo ""
echo "=== API checks ==="
# Telegram (works without token)
TG_COUNT=$(curl -s "$BASE/api/telegram" 2>/dev/null | grep -o '"id"' | wc -l)
echo "  Telegram posts returned: $TG_COUNT"

# YouTube (needs API key, returns empty gracefully)
YT=$(curl -s "$BASE/api/youtube" 2>/dev/null)
if echo "$YT" | grep -q '"error"'; then
  echo "  YouTube: no API key (expected without YOUTUBE_API_KEY env)"
else
  YT_COUNT=$(echo "$YT" | grep -o '"id"' | wc -l)
  echo "  YouTube videos returned: $YT_COUNT"
fi

echo ""
echo "=== Result: $PASS passed, $FAIL failed ==="
[ "$FAIL" -eq 0 ] && exit 0 || exit 1
