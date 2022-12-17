import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { createProductDB, getProductsDB } from './db';

const app: Express = express();
app.use(cors());
app.use(express.json());
let id = 14;

const port = 8080;

app.get('/products', async (req: Request, res: Response) => {
  const products = await getProductsDB();

  let { page, size } = req.query;

  const totalPage = Math.ceil(products.length / Number(size));
  const offset = (Number(page) - 1) * Number(size);

  const result = products.slice(offset, offset + Number(size));

  res.json({
    totalPage,
    products: result,
  });
});

app.post('/product', async (req: Request, res: Response) => {
  const create_product = {
    id: id++,
    ...req.body,
  };
  await createProductDB(create_product);
  res.send('상품이 정상적으로 등록되었습니다.');
});

app.patch('/product', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.delete('/product', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
