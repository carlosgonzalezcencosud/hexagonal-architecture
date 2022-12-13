import User from '../entities/User';
import Item from '../entities/Item';
import Order from '../entities/Order';
import OrderRepository from '../interfaces/order.repository';
import NotifierRepository from '../interfaces/notifier.repository';

const createOrder = (
  orderRepository: OrderRepository,
  notifierRepository: NotifierRepository,
) => async (user: User, items: Item[]) => {
    const orderEntity: Order = {
      orderId: '1',
      userId: user.id,
      items,
      total: items.reduce((total, item) => total + item.price, 0),
    }

  const order = await orderRepository.saveOrder(orderEntity);
  await notifierRepository.notify(order);

  return order;
};

export default createOrder;
