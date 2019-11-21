import {Router} from 'express';
import examenController from '../controllers/examenController';
class ExamenRoutes{

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', examenController.list);
        this.router.get('/:id', examenController.getOne);
        this.router.get('/spec/:id', examenController.getPorNombre);
        this.router.post('/', examenController.create);
        this.router.delete('/:id',examenController.delete);
        this.router.put('/:id',examenController.update);
    }
}

const examenRoutes = new ExamenRoutes();
export default examenRoutes.router;