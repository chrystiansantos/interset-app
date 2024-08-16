import {
  CheckCircle,
  Hash,
  MapPin,
  ServerCrash,
  TrafficCone,
  UtilityPole,
  XCircle,
} from 'lucide-react-native'
import { Keyboard, View } from 'react-native'

import { Button } from '@/src/components/button'
import { SelectSearch } from '@/src/components/home/select-search'
import { zinc } from 'tailwindcss/colors'
import { Header } from '../../components/home/header'
import { Input } from '../../components/input'
import { Modal } from '../../components/modal'
import { useHome } from './useHome'

export default function Home() {
  const {
    idService,
    setIdService,
    showModal,
    city,
    setShowModal,
    MODAL,
    citiesFilter,
    citySearch,
    handleSelectedCity,
    setCitySearch,
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
  } = useHome()

  return (
    <View className="flex-1 items-center justify-center px-8">
      <Header />
      <View className="my-8 w-full rounded-lg border border-zinc-800 bg-zinc-900 p-4">
        <Input>
          <Hash color={zinc[400]} size={20} />
          <Input.Field
            placeholder="Contrato de serviço"
            keyboardType="number-pad"
            returnKeyType="next"
            onChangeText={setIdService}
            value={idService}
          />
        </Input>
        <Input>
          <MapPin color={zinc[400]} size={20} />
          <Input.Field
            placeholder="Cidade"
            onFocus={() => Keyboard.dismiss()}
            showSoftInputOnFocus={false}
            onPressIn={() => setShowModal(MODAL.CITY)}
            value={city}
          />
        </Input>
        <Input>
          <ServerCrash color={zinc[400]} size={20} />
          <Input.Field
            placeholder="Tipo de serviço"
            onFocus={() => Keyboard.dismiss()}
            showSoftInputOnFocus={false}
            onPressIn={() => setShowModal(MODAL.TYPE_SERVICE)}
            value={serviceType}
          />
        </Input>
        <Input>
          <TrafficCone color={zinc[400]} size={20} />
          <Input.Field
            placeholder="Categoria do serviço"
            onFocus={() => Keyboard.dismiss()}
            showSoftInputOnFocus={false}
            onPressIn={() => setShowModal(MODAL.SERVICE_CATEGORY)}
            value={serviceCategory}
          />
        </Input>
        <Input>
          <UtilityPole color={zinc[400]} size={20} />
          <Input.Field
            placeholder="Tipo de medidor"
            onFocus={() => Keyboard.dismiss()}
            showSoftInputOnFocus={false}
            onPressIn={() => setShowModal(MODAL.METER_TYPE)}
            value={meterType}
          />
        </Input>
        <Button className="mt-4" onPress={handleSubmitForm}>
          <Button.Title>Cadastrar</Button.Title>
        </Button>
      </View>
      <Modal
        visible={showModal === MODAL.CITY}
        title="Selecionar cidade"
        subtitle="Selecione a cidade que deseja cadastrar o serviço"
        onClose={() => setShowModal(MODAL.NONE)}
      >
        <SelectSearch
          icon={MapPin}
          placeholder="Cidade"
          value={citySearch}
          onChangeText={setCitySearch}
          options={citiesFilter}
          selectOption={handleSelectedCity}
        />
      </Modal>
      <Modal
        visible={showModal === MODAL.TYPE_SERVICE}
        title="Selecione o tipo de serviço"
        subtitle="Selecione o tipo de serviço que deseja cadastrar"
        onClose={() => setShowModal(MODAL.NONE)}
      >
        <SelectSearch
          icon={ServerCrash}
          placeholder="Buscar tipo de serviço"
          value={serviceSearch}
          onChangeText={setServiceSearch}
          options={servicesFilter}
          selectOption={handleSelectedService}
        />
      </Modal>
      <Modal
        visible={showModal === MODAL.SERVICE_CATEGORY}
        title="Selecione a categoria de serviço"
        subtitle="Selecione a categoria de serviço que deseja cadastrar"
        onClose={() => setShowModal(MODAL.NONE)}
      >
        <View className="flex-row gap-6">
          <Button
            className="flex-1"
            variant="secondary"
            onPress={() => handleSelectedCategoryService('Executado')}
          >
            <Button.Title>Executado</Button.Title>
            <CheckCircle className="ml-4" color={'#fff'} size={20} />
          </Button>
          <Button
            className="flex-1"
            variant="secondary"
            onPress={() => handleSelectedCategoryService('Improdutivo')}
          >
            <Button.Title>Improdutivo</Button.Title>
            <XCircle className="ml-4" color={'#fff'} size={20} />
          </Button>
        </View>
      </Modal>
      <Modal
        visible={showModal === MODAL.METER_TYPE}
        title="Selecione o tipo de medidor"
        subtitle="Selecione o tipo de medidor que deseja cadastrar"
        onClose={() => setShowModal(MODAL.NONE)}
      >
        <SelectSearch
          options={meterFilter}
          selectOption={handleSelectedMeter}
        />
      </Modal>
    </View>
  )
}
