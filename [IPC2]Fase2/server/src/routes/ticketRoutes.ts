import {Router} from 'express';
import ticketcontroller from '../controllers/ticketcontroller' 

class TicketRoutes{

    public router: Router = Router();
    
    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', ticketcontroller.list);
        this.router.get('/:id', ticketcontroller.getOne);
        this.router.post('/', ticketcontroller.create);
        this.router.delete('/:id',ticketcontroller.delete);
        this.router.get('/spec/1', ticketcontroller.getNombreCursoYSeccion );
    }
}

const ticketroutes = new TicketRoutes();
export default ticketroutes.router;