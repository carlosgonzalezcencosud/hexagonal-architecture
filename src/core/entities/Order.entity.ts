import Item from "./Item.entity"
import User from "./User.entity"

interface Order {
  orderId?: string
  user: User
  items: Item[]
  total: number
}

export default Order
