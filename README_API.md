# Интеграция с Python бэкендом

## Настройка

1. Создайте файл `.env.local` на основе `.env.example`:
```bash
cp .env.example .env.local
```

2. Укажите URL вашего Python API:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api
```

## Использование API клиента

API клиент находится в `lib/api.ts` и готов к использованию:

```typescript
import { getNews, submitFeedback, subscribeToNews } from '@/lib/api'

// Получить новости
const newsResponse = await getNews(1, 10)
if (newsResponse.success && newsResponse.data) {
  console.log(newsResponse.data)
}

// Отправить обратную связь
const feedbackResponse = await submitFeedback({
  name: 'Иван',
  email: 'ivan@example.com',
  message: 'Текст сообщения'
})

// Подписаться на рассылку
const subscriptionResponse = await subscribeToNews('user@example.com')
```

## Компоненты, использующие API

- **Footer.tsx** - форма обратной связи использует `submitFeedback()`
- **NewsSection.tsx** - можно обновить для использования `getNews()`

## Документация API

Полная документация для бэкенд разработчика находится в `API_DOCUMENTATION.md`

## Разработка

Во время разработки, если бэкенд еще не готов, компоненты будут работать с моковыми данными. После подключения бэкенда, просто обновите компоненты для использования API функций из `lib/api.ts`.

