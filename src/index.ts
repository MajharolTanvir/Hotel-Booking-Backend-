import express, { Request, Response } from 'express';
import cors from   'cors';
import dotenv from 'dotenv';

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