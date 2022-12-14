import Item from "./Item";
import User from "./User";

export default interface Order {
  orderId: string;
  user: User;
  items: Item[];
  total: number;
}
