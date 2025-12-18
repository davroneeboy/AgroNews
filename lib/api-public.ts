/**
 * Публичный API клиент - только GET запросы для просмотра
 * Используется для обычных пользователей без прав на редактирование
 * 
 * Для настройки URL API создайте файл .env.local в корне проекта:
 * NEXT_PUBLIC_API_URL=https://zahq.uz
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://zahq.uz'

// Выводим информацию в консоль о используемом API URL (только в режиме разработки)
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  console.log('📡 API URL:', API_BASE_URL)
}

// Типы данных из OpenAPI
export type News = {
  id: number
  title: string
  slug: string
  thumb: string
  short_description?: string
  description: string
  status: 'draft' | 'published' | 'archived'
  status_display: string
  views_count: number
  images: NewsImage[]
  is_active: boolean
  created_at: string
  updated_at: string
  published_at?: string
}

export type NewsImage = {
  id: number
  image: string
  caption?: string
  order?: number
}

export type About = {
  id: number
  about_us?: string
  tashkilot_tizulma?: string
  gov?: string
  central_apparat?: string
  district_management?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type DigitalGov = {
  id: number
  about_us_digital?: string
  fruit_ration?: string
  zahira?: string
  vakancies?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type InfoService = {
  id: number
  bayonat?: string
  taqvim_voqea?: string
  majlis?: string
  matbuot_anjuman?: string
  press_relise?: string
  is_active: boolean
  created_at: string
  updated_at: string
}

export type PaginatedResponse<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

/**
 * Получить список новостей (только опубликованные)
 */
export async function getNewsList(params?: {
  page?: number
  search?: string
  ordering?: string
  created_after?: string
  created_before?: string
  min_views?: string
}): Promise<PaginatedResponse<News>> {
  const queryParams = new URLSearchParams()
  
  if (params?.page) queryParams.append('page', params.page.toString())
  if (params?.search) queryParams.append('search', params.search)
  if (params?.ordering) queryParams.append('ordering', params.ordering)
  if (params?.created_after) queryParams.append('created_after', params.created_after)
  if (params?.created_before) queryParams.append('created_before', params.created_before)
  if (params?.min_views) queryParams.append('min_views', params.min_views)
  
  // Фильтруем только опубликованные и активные новости
  queryParams.append('status', 'published')
  queryParams.append('is_active', 'true')

  try {
    const response = await fetch(`${API_BASE_URL}/api/news/?${queryParams.toString()}`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения новостей: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить новость по ID
 */
export async function getNewsById(id: number): Promise<News> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news/${id}/`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения новости: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить опубликованные новости
 */
export async function getPublishedNews(): Promise<News[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news/published/`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения опубликованных новостей: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить топ новостей
 */
export async function getTopNews(limit: number = 10): Promise<News[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/news/top/?limit=${limit}`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения топ новостей: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить список информации "О нас" (только активные)
 */
export async function getAboutList(params?: {
  page?: number
  search?: string
  ordering?: string
}): Promise<PaginatedResponse<About>> {
  const queryParams = new URLSearchParams()
  
  if (params?.page) queryParams.append('page', params.page.toString())
  if (params?.search) queryParams.append('search', params.search)
  if (params?.ordering) queryParams.append('ordering', params.ordering)
  
  // Фильтруем только активные записи
  queryParams.append('is_active', 'true')

  try {
    const response = await fetch(`${API_BASE_URL}/api/about/?${queryParams.toString()}`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения информации: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить информацию "О нас" по ID
 */
export async function getAboutById(id: number): Promise<About> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/about/${id}/`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения информации: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить список цифрового правительства (только активные)
 */
export async function getDigitalGovList(params?: {
  page?: number
  search?: string
  ordering?: string
}): Promise<PaginatedResponse<DigitalGov>> {
  const queryParams = new URLSearchParams()
  
  if (params?.page) queryParams.append('page', params.page.toString())
  if (params?.search) queryParams.append('search', params.search)
  if (params?.ordering) queryParams.append('ordering', params.ordering)
  
  // Фильтруем только активные записи
  queryParams.append('is_active', 'true')

  try {
    const response = await fetch(`${API_BASE_URL}/api/digital-gov/?${queryParams.toString()}`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения данных: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить цифровое правительство по ID
 */
export async function getDigitalGovById(id: number): Promise<DigitalGov> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/digital-gov/${id}/`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения данных: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить список информационных сервисов (только активные)
 */
export async function getInfoServiceList(params?: {
  page?: number
  search?: string
  ordering?: string
}): Promise<PaginatedResponse<InfoService>> {
  const queryParams = new URLSearchParams()
  
  if (params?.page) queryParams.append('page', params.page.toString())
  if (params?.search) queryParams.append('search', params.search)
  if (params?.ordering) queryParams.append('ordering', params.ordering)
  
  // Фильтруем только активные записи
  queryParams.append('is_active', 'true')

  try {
    const response = await fetch(`${API_BASE_URL}/api/info-service/?${queryParams.toString()}`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения данных: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

/**
 * Получить информационный сервис по ID
 */
export async function getInfoServiceById(id: number): Promise<InfoService> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/info-service/${id}/`)
    
    if (!response.ok) {
      throw new Error(`Ошибка получения данных: ${response.status} ${response.statusText}`)
    }

    return response.json()
  } catch (error) {
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error(`Не удалось подключиться к API серверу. Проверьте, что сервер запущен по адресу: ${API_BASE_URL}`)
    }
    throw error
  }
}

