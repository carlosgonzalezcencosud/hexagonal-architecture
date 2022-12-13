import {MongoClient} from 'mongodb';
import Order from '../core/entities/Order';
import OrderRepository from '../core/interfaces/order.repository';

class MongoOrderRepository implements OrderRepository {
  public async saveOrder(order: Order): Promise<any> {
    const collection = await this.getCollection();
    const orderId = await collection.insertOne(order)

    const result = await collection.findOne({ _id: orderId.insertedId })
    console.log({ result })
    const parsedResult = JSON.parse(JSON.stringify(result)) as Order
    console.log({ parsedResult })

    return parsedResult;
  }

  /// COllection per request
  private async getCollection() {
    const url = 'mongodb://localhost:27017';
    const client = new MongoClient(url)

    await client.connect();

    const db = client.db('orders');
    return db.collection('orders');
  }
}
export default MongoOrderRepository;
