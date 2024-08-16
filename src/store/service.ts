import { create } from 'zustand'

interface Service {
  idService: string
  city: string
  serviceType: string
  serviceCategory: string
  meterType: string
}

interface OrderService {
  service: Service
  updateOrderService: (service: Service) => void
}

export const useService = create<OrderService>((set) => ({
  service: {
    idService: '',
    city: '',
    serviceType: '',
    serviceCategory: '',
    meterType: '',
  },
  updateOrderService: (serviceOrder) => set(() => ({ service: serviceOrder })),
}))
