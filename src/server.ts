import express, { Request, Response } from 'express';
import painelRoutes from './routes/painel';
import mainRoutes from './routes/index';
import path from 'path';
import mustache from 'mustache-express';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use('/static', express.static(path.
    join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use(mainRoutes);
server.use('/painel', painelRoutes);
server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(3000);

//Rotas
