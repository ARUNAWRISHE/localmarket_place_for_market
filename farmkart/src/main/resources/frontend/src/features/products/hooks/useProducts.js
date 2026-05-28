import { useCallback, useState } from 'react'
import { productService } from '../services/productService.js'

export default function useProducts() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  const loadProducts = useCallback(async (params) => {
    setLoading(true)
    try {
      const data = await productService.list(params)
      setProducts(data.content ?? data.items ?? data)
      return data
    } finally {
      setLoading(false)
    }
  }, [])

  return { products, loading, loadProducts }
}
