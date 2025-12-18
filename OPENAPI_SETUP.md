# Настройка OpenAPI для типобезопасного API клиента

## Преимущества использования OpenAPI спецификации

1. **Автоматическая генерация TypeScript типов** - все типы данных генерируются автоматически из схемы API
2. **Типобезопасность** - TypeScript будет проверять правильность использования API на этапе компиляции
3. **Автоматическая синхронизация** - при изменении API просто обновите `openapi.yaml` и перегенерируйте типы
4. **Автодополнение в IDE** - полная поддержка автодополнения для всех методов и параметров
5. **Валидация** - типы гарантируют соответствие данных структуре API

## Установка

```bash
npm install
```

Это установит необходимые зависимости:
- `openapi-typescript` - генератор TypeScript типов из OpenAPI
- `openapi-fetch` - типобезопасный HTTP клиент

## Генерация типов

После установки зависимостей выполните:

```bash
npm run generate:api-types
```

Это создаст файл `lib/api-types.ts` с автоматически сгенерированными типами из `openapi.yaml`.

## Использование

### Базовое использование

```typescript
import { newsApi } from '@/lib/api-client'

// Получить список новостей
const news = await newsApi.getList({
  page: 1,
  status: 'published',
  ordering: '-created_at'
})

// Получить новость по ID
const newsItem = await newsApi.getById(1)

// Получить топ новостей
const topNews = await newsApi.getTop(10)
```

### Прямое использование клиента

```typescript
import { apiClient } from '@/lib/api-client'

// Прямой вызов API с полной типобезопасностью
const { data, error } = await apiClient.GET('/api/news/{id}/', {
  params: {
    path: { id: 1 },
  },
})

if (data) {
  // TypeScript знает точную структуру data
  console.log(data.title)
  console.log(data.views_count)
}
```

## Обновление при изменении API

Когда бэкенд разработчик обновляет API:

1. Получите обновленную OpenAPI спецификацию
2. Замените содержимое файла `openapi.yaml`
3. Выполните `npm run generate:api-types`
4. TypeScript автоматически покажет все места, где нужно обновить код

## Структура файлов

```
lib/
├── api.ts              # Старый API клиент (можно удалить после миграции)
├── api-client.ts       # Новый типобезопасный клиент
└── api-types.ts        # Автоматически сгенерированные типы (не редактировать вручную)

openapi.yaml            # OpenAPI спецификация от бэкенда
```

## Примеры использования в компонентах

### React компонент с новостями

```typescript
'use client'

import { useEffect, useState } from 'react'
import { newsApi } from '@/lib/api-client'
import type { paths } from '@/lib/api-types'

type News = paths['/api/news/{id}/']['get']['responses']['200']['content']['application/json']

export default function NewsList() {
  const [news, setNews] = useState<News[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await newsApi.getList({
          status: 'published',
          ordering: '-created_at',
          page: 1,
        })
        
        if (response?.results) {
          setNews(response.results)
        }
      } catch (error) {
        console.error('Ошибка загрузки новостей:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (loading) return <div>Загрузка...</div>

  return (
    <div>
      {news.map((item) => (
        <article key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.short_description}</p>
          <span>Просмотров: {item.views_count}</span>
        </article>
      ))}
    </div>
  )
}
```

## Миграция со старого API клиента

Старый файл `lib/api.ts` можно постепенно заменить на новый `lib/api-client.ts`. 

Основные отличия:
- Старый клиент возвращал `ApiResponse<T>` с оберткой `{ success, data, error }`
- Новый клиент возвращает данные напрямую или выбрасывает ошибку
- Новый клиент полностью типобезопасен

## Дополнительные возможности

### Настройка базового URL

Базовый URL настраивается через переменную окружения:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

### Добавление заголовков авторизации

```typescript
import { apiClient } from '@/lib/api-client'

apiClient.use({
  onRequest({ request }) {
    // Добавить токен авторизации
    request.headers.set('Authorization', `Bearer ${token}`)
  },
})
```

## Полезные ссылки

- [openapi-typescript документация](https://github.com/drwpow/openapi-typescript)
- [openapi-fetch документация](https://github.com/drwpow/openapi-fetch)

