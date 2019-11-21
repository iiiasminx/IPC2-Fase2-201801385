import express, {Application} from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import auxRoutes from './routes/auxRoutes';
import estudianteRoutes from './routes/estudianteRoutes';
import cursoRoutes from './routes/cursoRoutes'; 
import secRoutes from './routes/secRoutes';
import asignacionRoutes from './routes/asignacionRoutes';
import ticketRoutes from './routes/ticketRoutes';
import examenRoutes from './routes/examenRoutes';
import asignacionAuxRoutes from './routes/asignacionAuxRoutes';

class Server {

    public app: Application;

constructor(){
    this.app = express();
    this.config();
    this.routes();
}

config(): void{
this.app.set('port', process.env.PORT || 3000);
this.app.use(morgan('dev'));
this.app.use(cors());

this.app.use(express.json());
this.app.use(express.urlencoded({extended: false}));
}

routes(): void{
this.app.use(indexRoutes);
this.app.use('/api/auxiliares', auxRoutes);
this.app.use('/api/estudiantes', estudianteRoutes);
this.app.use('/api/cursos', cursoRoutes);
this.app.use('/api/secciones', secRoutes);
this.app.use('/api/asignaciones', asignacionRoutes);
this.app.use('/api/asignacionesaux', asignacionAuxRoutes);
this.app.use('/api/tickets', ticketRoutes);
this.app.use('/api/examenes', examenRoutes);
}

start():void{
    this.app.listen(this.app.get('port'), () =>{
            console.log('Servidor en puerto', this.app.get('port'));
    });
}

}


const server = new Server();
server.start();