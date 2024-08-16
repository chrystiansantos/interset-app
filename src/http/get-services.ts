import { apiZapto } from '../lib/api'

interface ServicesResponse {
  atributos: {
    text: string
  }
}

export async function getServices() {
  const { data } = await apiZapto.get<ServicesResponse[]>(
    'enums/TipoServicoEnum',
  )
  return data
}
