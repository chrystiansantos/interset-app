import { LucideProps } from 'lucide-react-native'
import { ForwardRefExoticComponent } from 'react'
import { FlatList, View } from 'react-native'
import { zinc } from 'tailwindcss/colors'
import { Button } from '../button'
import { Input } from '../input'

interface SelectSearchProps {
  value?: string
  onChangeText?: React.Dispatch<React.SetStateAction<string>>
  options?: {
    id: string
    name: string
  }[]
  placeholder?: string
  icon?: ForwardRefExoticComponent<LucideProps>
  selectOption: (option: string) => void
}

export function SelectSearch({
  value,
  onChangeText,
  options,
  placeholder,
  icon: Icon,
  selectOption,
}: SelectSearchProps) {
  return (
    <>
      {onChangeText && (
        <Input variant="primary">
          {Icon && <Icon color={zinc[400]} size={20} />}
          <Input.Field
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
          />
        </Input>
      )}

      <View>
        <FlatList
          className="mb-6 mt-4 h-60"
          data={options}
          renderItem={({ item }) => (
            <Button
              className="mx-2 mt-2"
              activeOpacity={0.7}
              variant="secondary"
              onPress={() => selectOption(item.name)}
            >
              <Button.Title className="bg-orange-400">{item.name}</Button.Title>
            </Button>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </>
  )
}
