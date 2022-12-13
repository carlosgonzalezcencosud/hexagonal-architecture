import Order from '../entities/Order';

interface OrderRepository {
  saveOrder(order: Order): Promise<Order>;
}
export default OrderRepository;
