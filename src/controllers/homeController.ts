import { Request, Response } from 'express';
import { Product } from '../models/Product';

export const home = (req: Request, res: Response)=>{
    let age: number = 15;
    let showOld: boolean = false;

    if(age > 50){
        showOld = true;
    }
    
    let user = {
        name: 'Silvio'
    };

    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        user,
        showOld,
        products: list,
        expensives: expensiveList,
        frasesDoDia: []
    });
}