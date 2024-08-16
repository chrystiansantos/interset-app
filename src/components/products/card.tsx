import { router } from 'expo-router'
import { Image, Text, TouchableOpacity, View } from 'react-native'

interface Product {
  id: string
  image: string
  title: string
  price: number
}

interface CardProps {
  item: Product
}

export function Card({ item }: CardProps) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.navigate(`/products/details/${item.id}`)
      }}
      className="h-40 w-40 items-start justify-center rounded-3xl px-2"
    >
      <Image
        resizeMode="stretch"
        className="h-28 w-28 rounded-3xl"
        source={{
          uri: item.image,
        }}
        alt={item.title}
      />
      <View>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          className="w-40 text-lg text-zinc-50"
        >
          {item.title}
        </Text>
        <Text className="text-base text-white">
          {item.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
