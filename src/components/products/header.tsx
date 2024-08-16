import { Image, Text, View } from 'react-native'

export function Header() {
  return (
    <View className="flex-row items-center justify-between">
      <View className="gap-2">
        <View className="h-1 w-6 rounded-full bg-white" />
        <View className="h-1 w-10 rounded-full bg-white" />
      </View>
      <View className="flex-1 pr-10">
        <View className="flex-row items-center justify-center gap-2">
          <Text className="up text-2xl text-zinc-50">interset</Text>
          <Image
            className="h-6 w-6"
            source={require('@/src/assets/logo.png')}
            alt="logo"
          />
        </View>
      </View>
    </View>
  )
}
