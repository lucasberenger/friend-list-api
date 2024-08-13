import express, { urlencoded } from 'express';
import helmet from 'helmet';
import router from './routes';


const server = express();

server.use(helmet());
server.use(express.json());
server.use(urlencoded({ extended: true }));

server.use('/', router);

server.listen(3000, () => { 
    console.log("Server is running on: http://localhost:3000/")
})
