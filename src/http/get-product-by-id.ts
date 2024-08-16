import { apiFakeStore } from '../lib/api'

interface GetProductsByIdRequest {
  id: string
}

interface GetProductsByIdResponse {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
}

export async function getProductsById({ id }: GetProductsByIdRequest) {
  const { data } = await apiFakeStore.get<GetProductsByIdResponse>(
    `products/${id}`,
  )

  return data
}
