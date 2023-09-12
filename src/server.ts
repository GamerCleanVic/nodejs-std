import express, { Request, Response } from 'express';
import painelRoutes from './routes/painel';
import mainRoutes from './routes/index';
import path from 'path';

const server = express();

server.use('/static', express.static(path.
    join(__dirname, '../public')));
    
server.use(mainRoutes);
server.use('/painel', painelRoutes);
server.use((req: Request, res: Response)=>{
    res.status(404).send('Página não encontrada!');
});

server.listen(3000);

//Rotas