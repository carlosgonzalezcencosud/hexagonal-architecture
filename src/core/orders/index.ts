import MongoOrderRepository from "../../infrastructure/mongo-order.repository";
import NodeMailerNotifierRepository from "../../infrastructure/nodemailer-notifier.repository";
import createOrder from "./orders.service";

const orderRepository = new MongoOrderRepository()
const notifierReposiroty = new NodeMailerNotifierRepository()

export default createOrder(orderRepository, notifierReposiroty)
