import {Router} from 'express';
import auxController from '../controllers/auxController';
class AuxRoutes{

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', auxController.list);
        this.router.get('/:id', auxController.getOne);
        this.router.post('/', auxController.create);
        this.router.delete('/:id',auxController.delete);
        this.router.put('/:id',auxController.update);
    }
}

const auxRoutes = new AuxRoutes();
export default auxRoutes.router;