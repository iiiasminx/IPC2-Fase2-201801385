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
        this.router.get('/spec1/:id/:id_estudiante', seccionController.setearAuxiliar);
        this.router.get('/spec2/:id', seccionController.getPorAuxiliar);
        this.router.get('/spec3/:id', seccionController.desasignarAuxiliar);
    }
}

const seccionRoutes = new SeccionRoutes();
export default seccionRoutes.router;