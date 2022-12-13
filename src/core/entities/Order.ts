import Item from "./Item";

export default interface Order {
  orderId: string;
  userId: string;
  items: Item[];
  total: number;
}
