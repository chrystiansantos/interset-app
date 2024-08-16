import { clsx } from 'clsx'
import { ReactNode } from 'react'
import {
  Platform,
  TextInput,
  TextInputProps,
  View,
  ViewProps,
} from 'react-native'
import { zinc } from 'tailwindcss/colors'

type Variants = 'primary' | 'secondary' | 'tertiary'

interface InputProps extends ViewProps {
  children: ReactNode
  variant?: Variants
}

function Input({
  children,
  variant = 'primary',
  className,
  ...rest
}: InputProps) {
  return (
    <View
      className={clsx(
        'min-h-16 h-16 max-h-16 flex-row items-center gap-2',
        {
          'h-14 rounded-lg border border-zinc-800 px-4': variant !== 'primary',
          'bg-zinc-950': variant === 'secondary',
          'bg-zinc-900': variant === 'tertiary',
        },
        className,
      )}
      testID="input-container"
      {...rest}
    >
      {children}
    </View>
  )
}

function Field({ ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 font-regular text-lg text-zinc-100"
      placeholderTextColor={zinc[400]}
      cursorColor={zinc[100]}
      selectionColor={Platform.OS === 'ios' ? zinc[100] : undefined}
      {...rest}
    />
  )
}

Input.Field = Field

export { Input }
