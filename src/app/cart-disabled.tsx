import { router } from 'expo-router'
import { ArrowLeft, Minus, Plus } from 'lucide-react-native'
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useProduct } from '../store/product'
import { useService } from '../store/service'

export default function Cart() {
  const serviceOrder = useService((state) => state.service)
  const { products } = useProduct((state) => state)

  return (
    <SafeAreaView className="mx-8 flex-1 pt-7">
      <View className="my-8 flex-row items-center">
        <TouchableOpacity onPress={router.back}>
          <ArrowLeft size={40} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <ScrollView className="flex-1">
        {products.map((product) => (
          <View
            key={product.id}
            className="mb-6 h-40 w-full flex-row items-center rounded-3xl border border-zinc-400 px-3"
          >
            <Image
              className="h-32 w-32 rounded-3xl"
              source={{
                uri: product.image,
              }}
              alt={product.name}
            />
            <View className="ml-6 flex-1 py-6">
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="text-xl font-medium text-zinc-200"
              >
                {product.name}
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                className="text-base text-zinc-400"
              >
                {product.category}
              </Text>
              <View className="flex-1 flex-row items-end justify-between">
                <Text className="text-xl font-semibold text-white">
                  {product.price * product.amount}
                </Text>
                <View className="w-20 flex-row items-center">
                  <TouchableOpacity className="rounded-full border border-zinc-50">
                    <Minus size={20} color={'white'} />
                  </TouchableOpacity>
                  <Text className="flex-1 text-center text-lg font-semibold text-zinc-50">
                    {product.amount}
                  </Text>
                  <TouchableOpacity className="rounded-full border border-zinc-50">
                    <Plus size={20} color={'white'} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ))}
        <View className="gap-4">
          <View>
            <Text className="text-2xl font-semibold text-zinc-200">
              Info service
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text text-lg text-zinc-300">
              Contato de serviço
            </Text>
            <Text className="text text-xl font-medium text-zinc-200">
              {serviceOrder.idService}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text text-lg text-zinc-300">Cidade</Text>
            <Text className="text text-xl font-medium text-zinc-200">
              {serviceOrder.city}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text text-lg text-zinc-300">Tipo de serviço</Text>
            <Text className="text text-xl font-medium text-zinc-200">
              {serviceOrder.serviceType}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text text-lg text-zinc-300">
              Categoria do serviço
            </Text>
            <Text className="text text-xl font-medium text-zinc-200">
              {serviceOrder.serviceCategory}
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text text-lg text-zinc-300">Tipo de medidor</Text>
            <Text className="text text-xl font-medium text-zinc-200">
              {serviceOrder.meterType}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
