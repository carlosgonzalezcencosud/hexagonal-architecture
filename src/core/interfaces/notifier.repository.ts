import Order from "../entities/Order";

interface NotifierRepository {
  notify(order: Order): Promise<unknown>;
}

export default NotifierRepository;
