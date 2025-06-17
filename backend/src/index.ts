import express from 'express';
import cors from 'cors';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import dotenv from 'dotenv';
import {connectToMongoDB} from './config/dbconnect'

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3030;

connectToMongoDB();

app.use(cors({origin: true,credentials: true}));

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser())
app.use(express.json());

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});