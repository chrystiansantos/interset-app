import { useProduct } from '../../store/product'
import { useService } from '../../store/service'

export function useCart() {
  const serviceOrder = useService((state) => state.service)
  const { products, updateQuantity } = useProduct((state) => state)

  function handleUpdateAmountProduct(
    option: 'increment' | 'decrement',
    productId?: number,
  ) {
    const quantityProductBuy =
      products.find((product) => product.id === productId)?.amount || 0

    if (option === 'decrement') {
      if (quantityProductBuy < 2) return
      updateQuantity(productId!.toString(), quantityProductBuy - 1)
      return
    }
    updateQuantity(productId!.toString(), quantityProductBuy + 1)
  }

  return { products, serviceOrder, handleUpdateAmountProduct }
}
