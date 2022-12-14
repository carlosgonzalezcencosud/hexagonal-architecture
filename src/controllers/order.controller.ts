import { Response, Request } from "express";
import createOrder from "../core/orders/index";

const orderController = async (req: Request, res: Response) => {
  const { body } = req;
  const { user, items } = body;

  // revisar tokens, otras autorizaciones, validacion y sanitizacion de los inputs

  const order = await createOrder(user, items)
  res.json(order)
}

export default orderController;
