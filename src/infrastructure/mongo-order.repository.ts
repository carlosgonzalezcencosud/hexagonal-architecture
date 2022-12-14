import { MongoClient } from 'mongodb';
import Order from '../core/entities/Order.entity';
import OrderRepository from '../core/interfaces/order-repository.interface';

class MongoOrderRepository implements OrderRepository {
  public async saveOrder(order: Order): Promise<Order> {
    const collection = await this.getCollection();
    const orderId = await collection.insertOne(order);

    const result = await collection.findOne({ _id: orderId.insertedId })

    return {
      orderId: result._id.toString(),
      user: result.user,
      items: result.items,
      total: result.total
    }
  }

  private async getCollection() {
    const url = 'mongodb://root:example@127.0.0.1:27017/';
    const client = new MongoClient(url);

    try {
      await client.connect();
      const db = client.db('orders');
      return db.collection('orders');
    } catch (err) {
      console.log(err);
    }
  }
}

export default MongoOrderRepository;
