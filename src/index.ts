import express from 'express';
import dotEnv from 'dotenv';

dotEnv.config();
const PORT = 8080;

const app = express();
app.use(express.json());


app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`);
});
