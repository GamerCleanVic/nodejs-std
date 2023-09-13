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

export default router;