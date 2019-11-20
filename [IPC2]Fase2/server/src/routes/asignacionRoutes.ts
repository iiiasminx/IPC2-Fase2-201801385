import {Router} from 'express';
import asignacionController from '../controllers/asignacionController';
class AsigRoutes{

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', asignacionController.list);
        this.router.get('/fase3/', asignacionController.getTodo);
        this.router.get('/:id', asignacionController.getOne);
        this.router.post('/', asignacionController.create);
        this.router.delete('/:id',asignacionController.delete);
        this.router.put('/:id',asignacionController.update);
        this.router.get('/spec/:id', asignacionController.getPorEstudiante);
    }
}

const asigRoutes = new AsigRoutes();
export default asigRoutes.router;