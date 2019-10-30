"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const seccionController_1 = __importDefault(require("../controllers/seccionController"));
class SeccionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', seccionController_1.default.list);
        this.router.get('/:id', seccionController_1.default.getOne);
        this.router.post('/', seccionController_1.default.create);
        this.router.delete('/:id', seccionController_1.default.delete);
        this.router.put('/:id', seccionController_1.default.update);
        this.router.get('/spec/1', seccionController_1.default.getSinAuxiliar);
        this.router.get('/spec1/:id/:id_estudiante', seccionController_1.default.setearAuxiliar);
        this.router.get('/spec2/:id', seccionController_1.default.getPorAuxiliar);
        this.router.get('/spec3/:id', seccionController_1.default.desasignarAuxiliar);
    }
}
const seccionRoutes = new SeccionRoutes();
exports.default = seccionRoutes.router;
