import {Router} from 'express';
import estudianteController from '../controllers/estudianteController';
class EstudianteRoutes{

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', estudianteController.list);
        this.router.get('/:id', estudianteController.getOne);
        this.router.post('/', estudianteController.create);
        this.router.delete('/:id',estudianteController.delete);
        this.router.put('/:id',estudianteController.update);
    }
}

const estudianteRoutes = new EstudianteRoutes();
export default estudianteRoutes.router;