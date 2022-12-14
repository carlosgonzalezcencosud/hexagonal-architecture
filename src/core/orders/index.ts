import CouchOrderRepository from "../../infrastructure/couch-order.repository";
import MongoOrderRepository from "../../infrastructure/mongo-order.repository";
import NodeMailerNotifierRepository from "../../infrastructure/nodemailer-notifier.repository";
import createOrder from "./orders.service";

// const orderRepository = new MongoOrderRepository()
const orderRepository = new CouchOrderRepository()
const notifierRepository = new NodeMailerNotifierRepository()

export default createOrder(orderRepository, notifierRepository)
