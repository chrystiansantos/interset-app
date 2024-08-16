import { ActivityIndicator, View } from 'react-native'
import colors from 'tailwindcss/colors'

export function Loading() {
  return (
    <View
      className="flex-1 items-center justify-center"
      testID="loading-container"
    >
      <ActivityIndicator
        color={colors.blue[300]}
        size={40}
        testID="activity-indicator"
      />
    </View>
  )
}
