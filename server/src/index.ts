import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rootRouter from './modules/index.routes.js';
import { prisma } from './lib/prisma.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', rootRouter);

app.post('/test-user', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'testuser@example.com',
        password: 'password123',
      },
    });

    res.json(user);
  }
  catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
  });
  
app.get('/', (req, res) => {
  res.json('TaskFlow API is running...');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


