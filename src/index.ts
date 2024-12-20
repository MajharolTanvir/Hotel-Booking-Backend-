import express, { Request, Response } from 'express';
import cors from   'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

mongoose.connect(process.env.DATABASE_URL as string)
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/api/test', async (req:Request, res: Response) => {
    res.json({ message: 'Hello World' });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});