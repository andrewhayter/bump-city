import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool, PoolClient } from 'pg';
import morgan from 'morgan';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Test database connection
pool.connect((err: Error | undefined, client: PoolClient | undefined, release: (release?: any) => void) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  }
  if (client) {
    client.query('SELECT NOW()', (err: Error | null, result: any) => {
      release();
      if (err) {
        return console.error('Error executing query', err.stack);
      }
      console.log('Connected to database');
    });
  }
});

// Health check route
app.get('/health', (req, res) => {
  console.log('Health check route called');
  res.status(200).json({ status: 'UP' });
});

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
