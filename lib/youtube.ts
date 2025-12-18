/**
 * YouTube API клиент
 */

export type YouTubeVideo = {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
  channelTitle: string
  duration?: string
  viewCount?: number
}

/**
 * Получить видео с канала через наш API
 */
export const getYouTubeVideos = async (): Promise<YouTubeVideo[]> => {
  try {
    const response = await fetch('/api/youtube', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-store', // Всегда получать свежие данные
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data.videos || []
  } catch (error) {
    console.error('Error fetching YouTube videos:', error)
    return []
  }
}

/**
 * Получить YouTube thumbnail
 */
export const getYouTubeThumbnail = (videoId: string) => {
  return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
}

/**
 * Получить YouTube embed URL
 */
export const getYouTubeEmbedUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}`
}

/**
 * Извлечь Video ID из YouTube URL
 */
export const extractVideoId = (url: string): string | null => {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match && match[1]) {
      return match[1]
    }
  }

  return null
}


