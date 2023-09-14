import {Router, Request, Response} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response)=>{
    let age: number = 15;
    let showOld: boolean = false;

    if(age > 50){
        showOld = true;
    }
    
    let user = {
        name: 'Silvio'
    };
    res.render('pages/home', {
        user,
        showOld,
        products: [
            {title: 'Produto x', price: 10},
            {title: 'Produto y', price: 15},
            {title: 'Produto w', price: 30}
        ],
        frasesDoDia: []
    });
});

router.get('/contato', (req: Request, res: Response)=>{
    res.render('pages/contato');
});

router.get('/sobre', (req: Request, res: Response)=>{
    res.render('pages/sobre');
});

router.get('/image01', (req: Request, res: Response)=>{    
    res.render('pages/image01');
});

router.get('/nome', (req: Request, res: Response)=>{
    console.log("query string", req.query);

    let nome: string = req.query.nome as string;
    let idade: string = req.query.idade as string;

    res.render('pages/nome', {
        nome,
        idade
    });
});

router.get('/idade', (req: Request, res: Response)=>{ 
    res.render('pages/idade');
});

router.post('/idade',(req: Request, res:Response)=>{
    let mostrarIdade: boolean = false;
    let idade: number = 0;

    if(req.body.ano){
        let anoNascimento: number = parseInt(req.body.ano as string);
        let anoAtual: number = new Date().getFullYear();
        idade = anoAtual - anoNascimento;
        mostrarIdade = true;
    }

    res.render('pages/idade', {
        idade,
        mostrarIdade
    });
});

export default router;