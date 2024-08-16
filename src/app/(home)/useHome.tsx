import { useQuery } from '@tanstack/react-query'
import { router } from 'expo-router'
import { useState } from 'react'
import { getCities } from '../../http/get-cities'
import { getMeter } from '../../http/get-meter'
import { getServices } from '../../http/get-services'
import { useService } from '../../store/service'
enum MODAL {
  NONE = 0,
  CITY = 1,
  TYPE_SERVICE = 2,
  SERVICE_CATEGORY = 3,
  METER_TYPE = 4,
}
export function useHome() {
  const [showModal, setShowModal] = useState(MODAL.NONE)

  const [idService, setIdService] = useState('')
  const [city, setCity] = useState('')
  const [serviceType, setServiceType] = useState('')
  const [serviceCategory, setServiceCategory] = useState('')
  const [meterType, setMeterType] = useState('')

  const [citySearch, setCitySearch] = useState('')
  const [serviceSearch, setServiceSearch] = useState('')

  const createService = useService((state) => state.updateOrderService)

  const { data: cities } = useQuery({
    queryKey: ['cities'],
    queryFn: getCities,
  })

  const { data: services } = useQuery({
    queryKey: ['services'],
    queryFn: getServices,
  })

  const { data: meters } = useQuery({
    queryKey: ['meter'],
    queryFn: getMeter,
  })

  // Avaliar a necessidade de se utilizar useMemo.
  const citiesFilter = (
    citySearch
      ? cities?.filter((city) =>
          city.nome.toLowerCase().includes(citySearch.toLowerCase()),
        )
      : cities
  )?.map((city) => ({ id: city.codigo.toString(), name: city.nome }))

  // Avaliar a necessidade de se utilizar useMemo.
  const servicesFilter = (
    serviceSearch
      ? services?.filter((service) =>
          service.atributos.text
            .toLowerCase()
            .includes(serviceSearch.toLowerCase()),
        )
      : services
  )?.map((service) => ({
    id: service.atributos.text,
    name: service.atributos.text,
  }))

  const meterFilter = meters?.map((meter) => ({
    id: meter.atributos.text,
    name: meter.atributos.text,
  }))

  function handleSelectedCity(city: string) {
    setCity(city)
    setCitySearch('')
    setShowModal(MODAL.NONE)
  }

  function handleSelectedService(service: string) {
    setServiceType(service)
    setServiceSearch('')
    setShowModal(MODAL.NONE)
  }

  function handleSelectedCategoryService(category: string) {
    setServiceCategory(category)
    setShowModal(MODAL.NONE)
  }

  function handleSelectedMeter(meter: string) {
    setMeterType(meter)
    setShowModal(MODAL.NONE)
  }

  function handleSubmitForm() {
    createService({
      idService,
      city,
      meterType,
      serviceType,
      serviceCategory,
    })
    router.navigate('/products')
  }

  return {
    MODAL,
    idService,
    setIdService,
    setShowModal,
    showModal,
    city,
    citySearch,
    setCitySearch,
    citiesFilter,
    handleSelectedCity,
    serviceType,
    serviceSearch,
    setServiceSearch,
    servicesFilter,
    handleSelectedService,
    serviceCategory,
    handleSelectedCategoryService,
    meterType,
    meterFilter,
    handleSelectedMeter,
    handleSubmitForm,
  }
}
