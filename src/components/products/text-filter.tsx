import clsx from 'clsx'
import { Platform, Text, TouchableOpacity } from 'react-native'

interface TextFilterProps {
  category: string
  categorySelected: string
  selectCategory: (category: string) => void
}

export function TextFilter({
  category,
  categorySelected,
  selectCategory,
}: TextFilterProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      className="mr-2 px-2"
      onPress={() => selectCategory(category)}
    >
      <Text
        className={clsx(
          'border-e- border-b-2 pb-2 text-xl capitalize text-zinc-200',
          { 'border-blue-300': category === categorySelected },
          {
            'text-blue-300':
              category === categorySelected && Platform.OS === 'ios',
          },
        )}
      >
        {category}
      </Text>
    </TouchableOpacity>
  )
}
