"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const asignacionController_1 = __importDefault(require("../controllers/asignacionController"));
class AsigRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', asignacionController_1.default.list);
        this.router.get('/:id', asignacionController_1.default.getOne);
        this.router.post('/', asignacionController_1.default.create);
        this.router.delete('/:id', asignacionController_1.default.delete);
        this.router.put('/:id', asignacionController_1.default.update);
    }
}
const asigRoutes = new AsigRoutes();
exports.default = asigRoutes.router;
