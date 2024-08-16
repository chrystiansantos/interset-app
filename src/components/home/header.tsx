import { Image, Text, View } from 'react-native'

export function Header() {
  return (
    <>
      <View className="flex-row items-center gap-4">
        <Image
          className="h-11 w-11"
          source={require('@/src/assets/logo.png')}
          alt="logo"
        />
        <Text className="text-4xl text-zinc-50">Interset</Text>
      </View>
      <Text className="text-lg text-zinc-500">
        Seu amigo para gerenciar suas atividades !
      </Text>
    </>
  )
}
