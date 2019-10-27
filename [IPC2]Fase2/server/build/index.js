"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const auxRoutes_1 = __importDefault(require("./routes/auxRoutes"));
const estudianteRoutes_1 = __importDefault(require("./routes/estudianteRoutes"));
const cursoRoutes_1 = __importDefault(require("./routes/cursoRoutes"));
const secRoutes_1 = __importDefault(require("./routes/secRoutes"));
const asignacionRoutes_1 = __importDefault(require("./routes/asignacionRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use(indexRoutes_1.default);
        this.app.use('/api/auxiliares', auxRoutes_1.default);
        this.app.use('/api/estudiantes', estudianteRoutes_1.default);
        this.app.use('/api/cursos', cursoRoutes_1.default);
        this.app.use('/api/secciones', secRoutes_1.default);
        this.app.use('/api/asignaciones', asignacionRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Servidor en puerto', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
