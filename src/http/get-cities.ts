import { apiZapto } from '../lib/api'

interface CitiesResponse {
  codigo: number
  nome: string
}

export async function getCities() {
  const { data } = await apiZapto.get<CitiesResponse[]>(
    'br.com.erpsistema.service.cidade',
  )
  return data
}
