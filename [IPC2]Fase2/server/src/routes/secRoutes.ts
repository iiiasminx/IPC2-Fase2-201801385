import {Router} from 'express';
import seccionController from '../controllers/seccionController'

class SeccionRoutes{

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', seccionController.list);
        this.router.get('/:id', seccionController.getOne);
        this.router.post('/', seccionController.create);
        this.router.delete('/:id',seccionController.delete);
        this.router.put('/:id',seccionController.update);
        this.router.get('/spec/1', seccionController.getSinAuxiliar);
        this.router.get('/spec1/:id', seccionController.setearAuxiliar);
    }
}

const seccionRoutes = new SeccionRoutes();
export default seccionRoutes.router;