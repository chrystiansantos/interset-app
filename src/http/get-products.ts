import { apiFakeStore } from '../lib/api'

interface ProductsRequest {
  category?: string
}

interface ProductsResponse {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

export async function getProducts({ category = '' }: ProductsRequest) {
  const specificCategory = category ? `category/${category}` : ''

  const { data } = await apiFakeStore.get<ProductsResponse[]>(
    `/products/${specificCategory}`,
  )
  return data
}
