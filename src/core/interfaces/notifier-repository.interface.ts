import Order from "../entities/Order.entity";

interface NotifierRepository {
  notify(order: Order): Promise<unknown>
}

export default NotifierRepository
