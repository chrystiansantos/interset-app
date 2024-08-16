import { create } from 'zustand'

interface Product {
  id: number
  name: string
  category: string
  image: string
  amount: number
  price: number
}

interface ProductsCart {
  products: Product[]
  addProduct: (product: Product) => void
  updateQuantity: (productId: string, quantity: number) => void
}

export const useProduct = create<ProductsCart>((set) => ({
  products: [],
  addProduct: (product) =>
    set((state) => {
      const productInCart = state.products.find(
        (item) => item.id === product.id,
      )
      if (productInCart) {
        return {
          products: state.products.map((item) =>
            item.id === product.id ? { ...item, amount: product.amount } : item,
          ),
        }
      } else {
        return {
          products: [...state.products, product],
        }
      }
    }),
  updateQuantity: (productId, amount) =>
    set((state) => ({
      products: state.products.map((item) =>
        item.id.toString() === productId ? { ...item, amount } : item,
      ),
    })),
}))
