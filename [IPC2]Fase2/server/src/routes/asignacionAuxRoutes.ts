import {Router} from 'express';
import asignacionAuxController from '../controllers/asignacionAuxController';
class AsigAuxRoutes{

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', asignacionAuxController.list);
        this.router.get('/fase3/', asignacionAuxController.getTodo);
        this.router.get('/:id', asignacionAuxController.getOne);
        this.router.post('/', asignacionAuxController.create);
        this.router.delete('/:id',asignacionAuxController.delete);
        this.router.put('/:id',asignacionAuxController.update);
        this.router.get('/spec/:id', asignacionAuxController.getPorEstudiante);
    }
}

const asigAuxRoutes = new AsigAuxRoutes();
export default asigAuxRoutes.router;