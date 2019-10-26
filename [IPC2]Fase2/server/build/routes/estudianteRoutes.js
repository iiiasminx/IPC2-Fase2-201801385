"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const estudianteController_1 = __importDefault(require("../controllers/estudianteController"));
class EstudianteRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', estudianteController_1.default.list);
        this.router.get('/:id', estudianteController_1.default.getOne);
        this.router.post('/', estudianteController_1.default.create);
        this.router.delete('/:id', estudianteController_1.default.delete);
        this.router.put('/:id', estudianteController_1.default.update);
    }
}
const estudianteRoutes = new EstudianteRoutes();
exports.default = estudianteRoutes.router;
