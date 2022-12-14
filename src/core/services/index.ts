import EmailNotifier from '../../infrastructure/emailNotifier.repository';
import MongoOrderRepository from '../../infrastructure/mongo-order.repository';
import createOrder from './orders.service';

const orderRepository = new MongoOrderRepository();
const notifierRepository = new  EmailNotifier();

export default createOrder(orderRepository, notifierRepository);
