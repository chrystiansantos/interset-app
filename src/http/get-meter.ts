import { apiZapto } from '../lib/api'

interface MeterResponse {
  atributos: {
    text: string
  }
}

export async function getMeter() {
  const { data } = await apiZapto.get<MeterResponse[]>('enums/TipoMedidor')
  return data
}
