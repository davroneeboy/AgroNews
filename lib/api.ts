/**
 * API клиент для работы с бэкендом
 * Бэкенд будет реализован на Python отдельным разработчиком
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://zahq.uz'

type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
  message?: string
}

type NewsItem = {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  views: number
  comments: number
}

type FeedbackForm = {
  name: string
  email: string
  message: string
}

type SubscriptionForm = {
  email: string
}

/**
 * Получить список новостей
 */
export const getNews = async (page: number = 1, limit: number = 10): Promise<ApiResponse<NewsItem[]>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news?page=${page}&limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Получить новость по ID
 */
export const getNewsById = async (id: number): Promise<ApiResponse<NewsItem>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

/**
 * Отправить форму обратной связи
 */
export const submitFeedback = async (formData: FeedbackForm): Promise<ApiResponse<{ id: number }>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/feedback`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data, message: 'Сообщение успешно отправлено!' }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Произошла ошибка при отправке сообщения',
    }
  }
}

/**
 * Подписаться на рассылку новостей
 */
export const subscribeToNews = async (email: string): Promise<ApiResponse<{ id: number }>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/subscriptions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data, message: 'Вы успешно подписались на рассылку!' }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Произошла ошибка при подписке',
    }
  }
}

/**
 * Получить контактную информацию
 */
export const getContacts = async (): Promise<ApiResponse<{
  address: string
  phone: string
  email: string
  workingHours: string
}>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contacts`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return { success: true, data }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}

