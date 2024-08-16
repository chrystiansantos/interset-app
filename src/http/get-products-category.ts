import { apiFakeStore } from '../lib/api'

export async function getProductsCategory() {
  const { data } = await apiFakeStore.get<string[]>('products/categories')
  return data
}
