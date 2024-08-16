import { createContext, useContext } from 'react'

import clsx from 'clsx'
import {
  ActivityIndicator,
  Text,
  TextProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native'

type Variants = 'primary' | 'secondary'

interface ButtonProps extends TouchableOpacityProps {
  variant?: Variants
  isLoading?: boolean
}

const ThemeContext = createContext<{ variant?: Variants }>({})

function Button({
  children,
  variant = 'primary',
  isLoading,
  className,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      testID="button"
      disabled={isLoading}
      activeOpacity={0.7}
      className={clsx(
        'h-11 flex-row items-center justify-center gap-2 rounded-lg px-2',
        {
          'bg-blue-300': variant === 'primary',
          'bg-zinc-800': variant === 'secondary',
        },
        className,
      )}
      {...rest}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? (
          <ActivityIndicator
            testID="activity-indicator"
            className="text-lime-950"
          />
        ) : (
          children
        )}
      </ThemeContext.Provider>
    </TouchableOpacity>
  )
}

function Title({ children, className }: TextProps) {
  const { variant } = useContext(ThemeContext)

  return (
    <Text
      className={clsx(
        'text-base font-bold',
        {
          'text-blue-950': variant === 'primary',
          'text-zinc-200': variant === 'secondary',
        },
        className,
      )}
    >
      {children}
    </Text>
  )
}

Button.Title = Title

export { Button }
