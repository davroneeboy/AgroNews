# Настройка YouTube видео

## Как получить Video ID с канала Agrosanoat_uz

1. Перейдите на канал: https://www.youtube.com/@Agrosanoat_uz
2. Откройте нужное видео
3. Скопируйте URL видео (например: `https://www.youtube.com/watch?v=VIDEO_ID`)
4. Извлеките `VIDEO_ID` из URL

### Примеры:
- URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Video ID: `dQw4w9WgXcQ`

## Обновление видео в компоненте

Откройте файл `components/VideoReportsSection.tsx` и замените `VIDEO_ID_1`, `VIDEO_ID_2`, `VIDEO_ID_3`, `VIDEO_ID_4` на реальные ID видео с канала.

### Пример:

```typescript
{
  id: 1,
  title: {
    uz: 'FAO dan maxsus texnika: chigirtka bilan kurashishda yordam',
    ru: 'СПЕЦИАЛЬНАЯ ТЕХНИКА ОТ ФАО: ПОДДЕРЖКА В БОРЬБЕ С САРАНЧОЙ',
    en: 'SPECIAL EQUIPMENT FROM FAO: SUPPORT IN FIGHTING LOCUSTS',
  },
  // ... другие поля
  thumbnail: getYouTubeThumbnail('dQw4w9WgXcQ'), // Замените на реальный ID
  videoUrl: getYouTubeEmbedUrl('dQw4w9WgXcQ'), // Замените на реальный ID
  // ...
}
```

## Автоматическое получение thumbnail

Компонент автоматически получает thumbnail из YouTube по формуле:
- `https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg`

## Формат embed URL

Видео встраивается через:
- `https://www.youtube.com/embed/{VIDEO_ID}`

## Добавление новых видео

Чтобы добавить больше видео, просто добавьте новый объект в массив `videoData` с реальным Video ID.


