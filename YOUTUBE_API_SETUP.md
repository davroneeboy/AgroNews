# Настройка автоматического парсинга YouTube видео

## Шаг 1: Получение YouTube API ключа

1. Перейдите на [Google Cloud Console](https://console.cloud.google.com/)
2. Создайте новый проект или выберите существующий
3. Включите **YouTube Data API v3**:
   - Перейдите в "APIs & Services" > "Library"
   - Найдите "YouTube Data API v3"
   - Нажмите "Enable"
4. Создайте API ключ:
   - Перейдите в "APIs & Services" > "Credentials"
   - Нажмите "Create Credentials" > "API Key"
   - Скопируйте созданный ключ

## Шаг 2: Получение Channel ID канала @Agrosanoat_uz

### Способ 1: Через YouTube API
```bash
# Используйте этот запрос (замените YOUR_API_KEY)
curl "https://www.googleapis.com/youtube/v3/channels?key=YOUR_API_KEY&forUsername=Agrosanoat_uz&part=id"
```

### Способ 2: Через веб-интерфейс
1. Откройте канал: https://www.youtube.com/@Agrosanoat_uz
2. Откройте исходный код страницы (Ctrl+U)
3. Найдите `"channelId":"UC..."` и скопируйте ID

### Способ 3: Автоматически
API route автоматически попытается найти channelId по username, но лучше указать его вручную.

## Шаг 3: Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
# YouTube API Configuration
YOUTUBE_API_KEY=ваш_api_ключ_здесь
YOUTUBE_CHANNEL_ID=UC...  # Опционально, будет найден автоматически
```

## Шаг 4: Перезапуск сервера

После добавления переменных окружения перезапустите dev сервер:

```bash
npm run dev
```

## Как это работает

1. Компонент `VideoReportsSection` автоматически загружает видео при монтировании
2. Запрос идет через API route `/api/youtube` (безопасно, ключ на сервере)
3. API получает последние 10 видео с канала
4. Видео автоматически отображаются с thumbnail, названиями и описаниями
5. При ошибке используются fallback данные

## Ограничения YouTube API

- **Квота**: 10,000 единиц в день (бесплатно)
- Один запрос search = 100 единиц
- Один запрос videos = 1 единица
- Рекомендуется кэширование результатов

## Улучшение производительности

Для продакшена рекомендуется добавить кэширование:

```typescript
// В app/api/youtube/route.ts
export const revalidate = 3600 // Кэш на 1 час
```

## Безопасность

⚠️ **Важно**: Никогда не коммитьте `.env.local` в git!
Файл уже добавлен в `.gitignore`.

