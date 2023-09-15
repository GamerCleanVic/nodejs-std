import {Router, Request, Response} from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);
router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/image01', (req: Request, res: Response)=>{    
    res.render('pages/image01');
});

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade', UserController.idadeAction);

export default router;