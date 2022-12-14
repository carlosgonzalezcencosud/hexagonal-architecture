import CouchOrderRepository from '../../infrastructure/couch-order.repository';
import EmailNotifier from '../../infrastructure/emailNotifier.repository';
import MongoOrderRepository from '../../infrastructure/mongo-order.repository';
import createOrder from './orders.service';

// const orderRepository = new MongoOrderRepository();
const orderRepository = new CouchOrderRepository();
const notifierRepository = new  EmailNotifier();

export default createOrder(orderRepository, notifierRepository);
