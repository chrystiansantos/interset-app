import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react-native'
import { Text, TouchableOpacity, View } from 'react-native'

interface UpdateAmountProps {
  amount: number
  id?: number
  handleUpdateQuantityBuyProduct: (
    option: 'increment' | 'decrement',
    productId?: number,
  ) => void
}

export function UpdateAmount({
  amount,
  id,
  handleUpdateQuantityBuyProduct,
}: UpdateAmountProps) {
  return (
    <View className="w-20 flex-row items-start justify-center">
      <View className="flex-row items-center">
        <TouchableOpacity
          testID="button-minus"
          disabled={amount === 1}
          onPress={() => handleUpdateQuantityBuyProduct('decrement', id)}
          className={clsx('rounded-md border border-zinc-50', {
            'opacity-30': amount === 1,
          })}
        >
          <Minus size={20} color={'white'} />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg text-zinc-50">
          {amount}
        </Text>
        <TouchableOpacity
          testID="button-plus"
          onPress={() => handleUpdateQuantityBuyProduct('increment', id)}
          className="rounded-md border border-zinc-50"
        >
          <Plus size={20} color={'white'} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
