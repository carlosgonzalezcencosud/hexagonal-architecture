import Order from "../entities/Order.entity";

interface OrderRepository {
  saveOrder(order: Order): Promise<Order>
}

export default OrderRepository
