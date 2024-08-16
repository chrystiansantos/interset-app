import { getProducts } from '@/src/http/get-products'
import { getProductsCategory } from '@/src/http/get-products-category'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'

export function useProducts() {
  const [selectCategory, setSelectCategory] = useState('')

  const { data: categories, isLoading: categoryLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getProductsCategory,
  })

  const { data: products, isLoading: productLoading } = useQuery({
    queryKey: ['products', selectCategory],
    queryFn: () => getProducts({ category: selectCategory }),
  })

  function handleSelectCategory(category: string) {
    setSelectCategory((oldCategory) =>
      oldCategory === category ? '' : category,
    )
  }

  return {
    categories,
    selectCategory,
    handleSelectCategory,
    categoryLoading,
    productLoading,
    products,
  }
}
