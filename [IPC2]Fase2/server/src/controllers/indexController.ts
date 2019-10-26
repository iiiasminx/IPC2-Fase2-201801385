import {Request, Response} from 'express';

class IndexController{

    index (req: Request, res: Response) {
        res.json({text: "Este es el Backend!!! :D"});
    }
} 

export const indexController = new IndexController();