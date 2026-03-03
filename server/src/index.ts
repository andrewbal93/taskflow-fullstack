import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rootRouter from './modules/index.routes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', rootRouter);

app.get('/', (req, res) => {
  res.json('TaskFlow API is running...');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


