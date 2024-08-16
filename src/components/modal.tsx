import { BlurView } from 'expo-blur'
import { X } from 'lucide-react-native'
import {
  ModalProps,
  Modal as RNModal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { zinc } from 'tailwindcss/colors'

type Props = ModalProps & {
  title: string
  subtitle?: string
  onClose?: () => void
}

export function Modal({
  title,
  subtitle = '',
  onClose,
  children,
  ...rest
}: Props) {
  return (
    <RNModal transparent animationType="slide" {...rest}>
      <BlurView
        className="flex-1"
        intensity={7}
        tint="dark"
        experimentalBlurMethod="dimezisBlurView"
        testID="blur-view"
      >
        <View className="flex-1 justify-end bg-black/60">
          <View className="border-t border-zinc-700 bg-zinc-900 px-6 pb-10 pt-5">
            <View className="flex-row items-center justify-between pt-5">
              <Text className="text-xl font-medium text-white">{title}</Text>

              {onClose && (
                <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
                  <X color={zinc[400]} size={20} />
                </TouchableOpacity>
              )}
            </View>

            {subtitle.trim().length > 0 && (
              <Text className="my-2 font-regular leading-6 text-zinc-400">
                {subtitle}
              </Text>
            )}

            {children}
          </View>
        </View>
      </BlurView>
    </RNModal>
  )
}
