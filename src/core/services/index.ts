import EmailNotifier from '../../infrastructure/emailNotifier.datasource';
import MongoOrderRepository from '../../infrastructure/mongo-order.repository';
import createOrder from './saveBooking.interactor';

const orderRepository = new MongoOrderRepository();
const notifierRepository = new  EmailNotifier();

export default createOrder(orderRepository, notifierRepository);
