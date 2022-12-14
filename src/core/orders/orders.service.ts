import Item from "../entities/Item.entity";
import Order from "../entities/Order.entity";
import User from "../entities/User.entity";
import NotifierRepository from "../interfaces/notifier-repository.interface";
import OrderRepository from "../interfaces/order-repository.interface";

const createOrder = (orderRepository: OrderRepository, notifierRepository: NotifierRepository) => async (user: User, items: Item[]) => {
   const orderEntity: Order = {
    user: user,
    items: items,
    total: items.reduce((total, item) => total + item.price, 0)
  }

  const savedOrder = await orderRepository.saveOrder(orderEntity)
  await notifierRepository.notify(savedOrder)

  return savedOrder
}

export default createOrder

