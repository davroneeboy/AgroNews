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

// Новости берутся напрямую с портала gov.uz (Агентство по развитию агропромышленности)
const GOV_UZ_API_URL = 'https://api-portal.gov.uz'
const GOV_UZ_AUTHORITY_CODE = 'agrosanoat'

type GovUzLanguage = 'oz' | 'ru' | 'en'

function toGovUzLanguage(lang?: string): GovUzLanguage {
  if (lang === 'ru' || lang === 'en') return lang
  return 'oz'
}

type GovUzNewsListItem = {
  id: number
  date: string
  title: string
  anons: string
  views: number
  anons_image: string
}

type GovUzNewsListResponse = {
  data: GovUzNewsListItem[]
  total_page: number
  current_page: number
}

type GovUzNewsDetail = {
  id: number
  date: string
  updated_date: string
  title: string
  anons: string
  body: string
  views: number
  anons_image: string
  body_image: string
}

type GovUzNewsDetailResponse = {
  data: GovUzNewsDetail
}

function govUzListItemToNews(item: GovUzNewsListItem): News {
  return {
    id: item.id,
    title: item.title,
    slug: String(item.id),
    thumb: item.anons_image,
    short_description: item.anons,
    description: item.anons,
    status: 'published',
    status_display: 'published',
    views_count: item.views,
    images: [],
    is_active: true,
    created_at: item.date,
    updated_at: item.date,
  }
}

function govUzDetailToNews(item: GovUzNewsDetail): News {
  return {
    id: item.id,
    title: item.title,
    slug: String(item.id),
    thumb: item.anons_image || item.body_image,
    short_description: item.anons,
    description: item.body,
    status: 'published',
    status_display: 'published',
    views_count: item.views,
    images: [],
    is_active: true,
    created_at: item.date,
    updated_at: item.updated_date || item.date,
  }
}

async function fetchGovUzNewsList(page: number, lang?: string): Promise<PaginatedResponse<News>> {
  const language = toGovUzLanguage(lang)
  const res = await fetch(
    `${GOV_UZ_API_URL}/authorities/news/category?code_name=news&page=${page}`,
    { headers: { code: GOV_UZ_AUTHORITY_CODE, language } }
  )

  if (!res.ok) {
    throw new Error(`Ошибка получения новостей: ${res.status} ${res.statusText}`)
  }

  const json: GovUzNewsListResponse = await res.json()

  return {
    count: json.data.length,
    next: json.current_page < json.total_page ? String(json.current_page + 1) : null,
    previous: json.current_page > 1 ? String(json.current_page - 1) : null,
    results: json.data.map(govUzListItemToNews),
    total_pages: json.total_page,
  }
}

async function fetchGovUzNewsById(id: number, lang?: string): Promise<News> {
  const language = toGovUzLanguage(lang)
  const res = await fetch(
    `${GOV_UZ_API_URL}/authorities/news/view?id=${id}`,
    { headers: { code: GOV_UZ_AUTHORITY_CODE, language } }
  )

  if (!res.ok) {
    throw new Error(`Ошибка получения новости: ${res.status} ${res.statusText}`)
  }

  const json: GovUzNewsDetailResponse = await res.json()
  return govUzDetailToNews(json.data)
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
  total_pages?: number
}

/**
 * Получить список новостей (только опубликованные)
 */
export async function getNewsList(params?: {
  page?: number
  lang?: string
}): Promise<PaginatedResponse<News>> {
  return fetchGovUzNewsList(params?.page || 1, params?.lang)
}

/**
 * Получить новость по ID
 */
export async function getNewsById(id: number, lang?: string): Promise<News> {
  return fetchGovUzNewsById(id, lang)
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

