import { getProductsById } from '@/src/http/get-product-by-id'
import { useProduct } from '@/src/store/product'
import { useQuery } from '@tanstack/react-query'
import { router, useLocalSearchParams } from 'expo-router'
import { useState } from 'react'

export function useDetails() {
  const { id }: { id: string } = useLocalSearchParams()
  const { products, addProduct } = useProduct((state) => state)

  const [quantityProductBuy, setQuantityProductBuy] = useState(() => {
    return products.find((product) => product.id.toString() === id)?.amount || 1
  })

  const { data: product, isLoading } = useQuery({
    queryKey: ['product', id],
    queryFn: () => getProductsById({ id }),
  })

  function handleAddProductInCart() {
    if (!product) return

    addProduct({
      id: product.id,
      name: product.title,
      category: product.category,
      amount: quantityProductBuy,
      image: product.image,
      price: product.price,
    })

    router.navigate('/cart')
  }

  function handleUpdateQuantityBuyProduct(type: 'increment' | 'decrement') {
    if (type === 'decrement') {
      if (quantityProductBuy < 2) return
      setQuantityProductBuy((quantity) => quantity - 1)
      return
    }
    setQuantityProductBuy((quantity) => quantity + 1)
  }

  return {
    product,
    isLoading,
    quantityProductBuy,
    handleUpdateQuantityBuyProduct,
    handleAddProductInCart,
  }
}
