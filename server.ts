import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { createProductDB, deleteProductDB, editProductDB, getProductsDB } from './db';

const app: Express = express();
app.use(cors());
app.use(express.json());
let id = 15;

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

app.get('/product/:id', async (req: Request, res: Response) => {
  const products = await getProductsDB();
  const { id } = req.params;
  const product = products.find((product) => product.id === Number(id));
  res.json(product);
});

app.post('/product', async (req: Request, res: Response) => {
  const create_product = {
    ...req.body,
    id: id++,
  };
  await createProductDB(create_product);
  res.send('상품이 정상적으로 등록되었습니다.');
});

app.patch('/product/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const form = req.body;
  await editProductDB(Number(id), form);
  res.send('상품이 정상적으로 수정되었습니다.');
});

app.delete('/product/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const db = await deleteProductDB(Number(id));
  res.json(db);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
