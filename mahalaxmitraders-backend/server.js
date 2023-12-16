import express from 'express';
import initialize from './app.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();

app.use(cors());

app.use(express.json()); 
const port = process.env.PORT;

initialize(app);

app.listen(port, () => console.log(`Server is listening at port ${port}`));