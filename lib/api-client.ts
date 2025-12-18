/**
 * Типобезопасный API клиент, сгенерированный из OpenAPI спецификации
 * 
 * Для обновления типов выполните:
 * npm run generate:api-types
 */

import createClient from 'openapi-fetch'
import type { paths } from './api-types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://zahq.uz'

// Создаем типобезопасный клиент
export const apiClient = createClient<paths>({
  baseUrl: API_BASE_URL,
})

// Вспомогательные функции для работы с новостями
export const newsApi = {
  /**
   * Получить список новостей с фильтрацией и пагинацией
   */
  async getList(params?: {
    page?: number
    search?: string
    status?: 'draft' | 'published' | 'archived'
    is_active?: string
    ordering?: string
    created_after?: string
    created_before?: string
    min_views?: string
  }) {
    const { data, error, response } = await apiClient.GET('/api/news/', {
      params: {
        query: params,
      },
    })

    if (error) {
      throw new Error(`Ошибка получения новостей: ${JSON.stringify(error)}`)
    }

    return data
  },

  /**
   * Получить новость по ID
   */
  async getById(id: number) {
    const { data, error } = await apiClient.GET('/api/news/{id}/', {
      params: {
        path: { id },
      },
    })

    if (error) {
      throw new Error(`Ошибка получения новости: ${JSON.stringify(error)}`)
    }

    return data
  },

  /**
   * Получить опубликованные новости
   */
  async getPublished() {
    const { data, error } = await apiClient.GET('/api/news/published/')

    if (error) {
      throw new Error(`Ошибка получения опубликованных новостей: ${JSON.stringify(error)}`)
    }

    return data
  },

  /**
   * Получить топ новостей
   */
  async getTop(limit?: number) {
    const { data, error } = await apiClient.GET('/api/news/top/', {
      params: {
        query: limit ? { limit } : undefined,
      },
    })

    if (error) {
      throw new Error(`Ошибка получения топ новостей: ${JSON.stringify(error)}`)
    }

    return data
  },

  /**
   * Создать новость
   */
  async create(news: {
    title: string
    description: string
    short_description?: string
    thumb?: File | string
    status?: 'draft' | 'published' | 'archived'
    is_active?: boolean
    published_at?: string
  }) {
    const { data, error } = await apiClient.POST('/api/news/', {
      body: news as any,
    })

    if (error) {
      throw new Error(`Ошибка создания новости: ${JSON.stringify(error)}`)
    }

    return data
  },

  /**
   * Обновить новость
   */
  async update(id: number, news: {
    title: string
    description: string
    short_description?: string
    thumb?: File | string
    status?: 'draft' | 'published' | 'archived'
    is_active?: boolean
    published_at?: string
  }) {
    const { data, error } = await apiClient.PUT('/api/news/{id}/', {
      params: {
        path: { id },
      },
      body: news as any,
    })

    if (error) {
      throw new Error(`Ошибка обновления новости: ${JSON.stringify(error)}`)
    }

    return data
  },

  /**
   * Частично обновить новость
   */
  async partialUpdate(id: number, news: Partial<{
    title: string
    description: string
    short_description?: string
    thumb?: File | string
    status?: 'draft' | 'published' | 'archived'
    is_active?: boolean
    published_at?: string
  }>) {
    const { data, error } = await apiClient.PATCH('/api/news/{id}/', {
      params: {
        path: { id },
      },
      body: news as any,
    })

    if (error) {
      throw new Error(`Ошибка обновления новости: ${JSON.stringify(error)}`)
    }

    return data
  },

  /**
   * Удалить новость
   */
  async delete(id: number) {
    const { error } = await apiClient.DELETE('/api/news/{id}/', {
      params: {
        path: { id },
      },
    })

    if (error) {
      throw new Error(`Ошибка удаления новости: ${JSON.stringify(error)}`)
    }
  },
}

// Функции для работы с информацией "О нас"
export const aboutApi = {
  async getList(params?: {
    page?: number
    search?: string
    ordering?: string
  }) {
    const { data, error } = await apiClient.GET('/api/about/', {
      params: {
        query: params,
      },
    })

    if (error) {
      throw new Error(`Ошибка получения информации: ${JSON.stringify(error)}`)
    }

    return data
  },

  async getById(id: number) {
    const { data, error } = await apiClient.GET('/api/about/{id}/', {
      params: {
        path: { id },
      },
    })

    if (error) {
      throw new Error(`Ошибка получения информации: ${JSON.stringify(error)}`)
    }

    return data
  },
}

// Функции для работы с цифровым правительством
export const digitalGovApi = {
  async getList(params?: {
    page?: number
    search?: string
    ordering?: string
  }) {
    const { data, error } = await apiClient.GET('/api/digital-gov/', {
      params: {
        query: params,
      },
    })

    if (error) {
      throw new Error(`Ошибка получения данных: ${JSON.stringify(error)}`)
    }

    return data
  },

  async getById(id: number) {
    const { data, error } = await apiClient.GET('/api/digital-gov/{id}/', {
      params: {
        path: { id },
      },
    })

    if (error) {
      throw new Error(`Ошибка получения данных: ${JSON.stringify(error)}`)
    }

    return data
  },
}

// Функции для работы с информационными сервисами
export const infoServiceApi = {
  async getList(params?: {
    page?: number
    search?: string
    ordering?: string
  }) {
    const { data, error } = await apiClient.GET('/api/info-service/', {
      params: {
        query: params,
      },
    })

    if (error) {
      throw new Error(`Ошибка получения данных: ${JSON.stringify(error)}`)
    }

    return data
  },

  async getById(id: number) {
    const { data, error } = await apiClient.GET('/api/info-service/{id}/', {
      params: {
        path: { id },
      },
    })

    if (error) {
      throw new Error(`Ошибка получения данных: ${JSON.stringify(error)}`)
    }

    return data
  },
}

// Функции для работы с изображениями новостей
export const newsImagesApi = {
  async getList(params?: {
    page?: number
    news?: number
    ordering?: string
  }) {
    const { data, error } = await apiClient.GET('/api/news-images/', {
      params: {
        query: params,
      },
    })

    if (error) {
      throw new Error(`Ошибка получения изображений: ${JSON.stringify(error)}`)
    }

    return data
  },

  async getById(id: number) {
    const { data, error } = await apiClient.GET('/api/news-images/{id}/', {
      params: {
        path: { id },
      },
    })

    if (error) {
      throw new Error(`Ошибка получения изображения: ${JSON.stringify(error)}`)
    }

    return data
  },
}

