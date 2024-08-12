import { useNavigation } from 'expo-router'
import { Button, View } from 'react-native'

export default function Home() {
  const { navigate } = useNavigation()

  return (
    <View className="flex-1 items-center justify-center">
      <Button title="Details" onPress={() => navigate('details')}></Button>
    </View>
  )
}
