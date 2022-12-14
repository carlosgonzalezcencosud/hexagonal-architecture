import { Response, Request } from 'express';
import createOrder from '../core/services/index';

const orderController = async (request: Request, response: Response) => {
  const { body } = request;
  const { user, items } = body;

  const order = await createOrder(user, items);
  response.json(order);
};
export default orderController;
