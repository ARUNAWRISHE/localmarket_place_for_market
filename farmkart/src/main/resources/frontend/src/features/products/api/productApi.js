import { productService } from '../../../services/productService.js'

export const productApi = {
  list: productService.list,
  getById: productService.getById,
}
