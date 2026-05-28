import { deliveryService } from '../../../services/deliveryService.js'

export const deliveryApi = {
  listActive: deliveryService.listActive,
  updateStatus: deliveryService.updateStatus,
}
