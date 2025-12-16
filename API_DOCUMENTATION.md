# API Документация для бэкенд разработчика

Этот документ описывает ожидаемые API endpoints для интеграции с Python бэкендом.

## Базовый URL

```
http://localhost:8000/api  (разработка)
https://api.yourdomain.com/api  (продакшен)
```

## Формат ответов

Все ответы должны быть в формате JSON:

### Успешный ответ:
```json
{
  "success": true,
  "data": { ... },
  "message": "Опциональное сообщение"
}
```

### Ошибка:
```json
{
  "success": false,
  "error": "Описание ошибки",
  "message": "Пользовательское сообщение"
}
```

## Endpoints

### 1. Получить список новостей

**GET** `/api/news`

**Query параметры:**
- `page` (int, опционально, по умолчанию: 1) - номер страницы
- `limit` (int, опционально, по умолчанию: 10) - количество новостей на странице

**Ответ:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Заголовок новости",
      "excerpt": "Краткое описание",
      "content": "Полный текст новости",
      "date": "2024-01-15T10:00:00Z",
      "image": "https://example.com/image.jpg",
      "views": 1234,
      "comments": 5
    }
  ]
}
```

### 2. Получить новость по ID

**GET** `/api/news/{id}`

**Ответ:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "title": "Заголовок новости",
    "excerpt": "Краткое описание",
    "content": "Полный текст новости",
    "date": "2024-01-15T10:00:00Z",
    "image": "https://example.com/image.jpg",
    "views": 1234,
    "comments": 5
  }
}
```

### 3. Отправить форму обратной связи

**POST** `/api/feedback`

**Тело запроса:**
```json
{
  "name": "Имя пользователя",
  "email": "user@example.com",
  "message": "Текст сообщения"
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "id": 123
  },
  "message": "Сообщение успешно отправлено!"
}
```

### 4. Подписаться на рассылку новостей

**POST** `/api/subscriptions`

**Тело запроса:**
```json
{
  "email": "user@example.com"
}
```

**Ответ:**
```json
{
  "success": true,
  "data": {
    "id": 456
  },
  "message": "Вы успешно подписались на рассылку!"
}
```

### 5. Получить контактную информацию

**GET** `/api/contacts`

**Ответ:**
```json
{
  "success": true,
  "data": {
    "address": "г. Ташкент, ул. Мустакиллик, 1",
    "phone": "+998 71 123 45 67",
    "email": "info@agrodev.uz",
    "workingHours": "Понедельник - Пятница: 09:00 - 18:00"
  }
}
```

## Коды статусов HTTP

- `200 OK` - Успешный запрос
- `400 Bad Request` - Неверный формат запроса
- `404 Not Found` - Ресурс не найден
- `500 Internal Server Error` - Ошибка сервера

## CORS

Бэкенд должен поддерживать CORS для домена фронтенда:

```
Access-Control-Allow-Origin: http://localhost:3000 (разработка)
Access-Control-Allow-Origin: https://yourdomain.com (продакшен)
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

## Мультиязычность

Все текстовые данные должны поддерживать мультиязычность. Рекомендуется использовать заголовок `Accept-Language` или query параметр `lang`:

```
GET /api/news?lang=ru
GET /api/news?lang=uz
GET /api/news?lang=en
```

## Примеры использования

### Python (FastAPI)

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI()

class NewsItem(BaseModel):
    id: int
    title: str
    excerpt: str
    content: str
    date: str
    image: str
    views: int
    comments: int

class NewsResponse(BaseModel):
    success: bool
    data: List[NewsItem]
    message: Optional[str] = None

@app.get("/api/news", response_model=NewsResponse)
async def get_news(page: int = 1, limit: int = 10):
    # Ваша логика получения новостей
    news = [...]  # Получить новости из БД
    return {
        "success": True,
        "data": news
    }

class FeedbackForm(BaseModel):
    name: str
    email: str
    message: str

@app.post("/api/feedback")
async def submit_feedback(form: FeedbackForm):
    # Ваша логика сохранения обратной связи
    return {
        "success": True,
        "data": {"id": 123},
        "message": "Сообщение успешно отправлено!"
    }
```

## Примечания

1. Все даты должны быть в формате ISO 8601 (UTC)
2. Изображения должны быть доступны по публичным URL
3. Рекомендуется добавить валидацию на стороне бэкенда
4. Для безопасности рекомендуется добавить rate limiting
5. Для продакшена рекомендуется использовать HTTPS

