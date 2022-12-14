import Order from "../core/entities/Order";
import OrderRepository from "../core/interfaces/order.repository";
const nano = require('nano')('http://root:example@localhost:5984');

class CouchOrderRepository implements OrderRepository {
    async saveOrder(order: Order): Promise<Order> {
      const db = await this.getDatabase();
      const newOrder = await db.insert(order);
      const response = await db.get(newOrder.id);
      
      return response;
    }

    async getDatabase(): Promise<any> {
      const db = nano.db.use('orders');
      return db
    }
}

export default CouchOrderRepository;
