import Order from '../core/entities/Order.entity';
import OrderRepository from '../core/interfaces/order-repository.interface';
const nano = require('nano')('http://root:example@localhost:5984');

class CouchOrderRepository implements OrderRepository {
  async saveOrder(order: Order): Promise<Order> {
    const db = await this.getDatabase();
    const newOrder = await db.insert(order);
    const { _id, user, items, total } = await db.get(newOrder.id);

    return {
      orderId: _id,
      user,
      items,
      total,
    };
  }

  async getDatabase(): Promise<any> {
    const db = nano.db.use('orders');
    return db;
  }
}

export default CouchOrderRepository;
