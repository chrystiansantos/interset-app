import { Image, Text, View } from 'react-native'

export default function Details() {
  // const { navigate } = useNavigation()

  return (
    <View className="flex-1 items-center justify-center">
      {/* <Button title="Home" onPress={() => navigate('index')} /> */}
      <View className="flex-row items-center gap-4">
        <Image
          className="w-11 h-11"
          source={require('@/src/assets/logo.png')}
          alt="logo"
        />
        <Text className="text-zinc-50 text-4xl">Interset</Text>
      </View>
      <Text className="text-zinc-500 text-lg">
        Seu amigo para gerenciar suas atividades !
      </Text>
    </View>
  )
}
