import { Loading } from '@/src/components/loading'
import { UpdateAmount } from '@/src/components/update-amount'
import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import React from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { useDetails } from './use-details'

export default function Details() {
  const {
    product,
    quantityProductBuy,
    handleUpdateQuantityBuyProduct,
    handleAddProductInCart,
    isLoading,
  } = useDetails()

  if (isLoading) return <Loading />

  return (
    <SafeAreaView className="mb-14 mt-14 flex-1">
      <ScrollView className="flex-1">
        <View className="my-8 ml-8 flex-row items-center">
          <TouchableOpacity onPress={router.back}>
            <ArrowLeft size={40} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <Image
          resizeMode="stretch"
          className="mx-auto h-[300px] w-[300px] rounded-[90px]"
          source={{
            uri: product?.image,
          }}
          alt={product?.title}
        />
        <View className="flex-1 gap-4 p-10">
          <Text
            className="text-3xl font-medium text-zinc-50"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {product?.title}
          </Text>
          <Text
            className="text-lg font-medium text-zinc-500"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {product?.category}
          </Text>
          <Text className="text-lg font-medium text-zinc-200">
            {product?.description}
          </Text>

          <View className="flex-row">
            <Text className="flex-1 text-xl font-medium text-zinc-300">
              {product?.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </Text>
            <UpdateAmount
              amount={quantityProductBuy}
              handleUpdateQuantityBuyProduct={handleUpdateQuantityBuyProduct}
            />
          </View>
        </View>
        <TouchableOpacity
          className="mx-8 rounded-full bg-blue-300 p-5"
          onPress={handleAddProductInCart}
        >
          <Text className="text-center text-xl font-semibold text-blue-950">
            Comprar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
}
