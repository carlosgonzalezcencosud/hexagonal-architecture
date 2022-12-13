import express from 'express';
import dotEnv from 'dotenv';
import orderController from './controllers/order.controller';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(express.json());

app.post('/create', orderController);

app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
