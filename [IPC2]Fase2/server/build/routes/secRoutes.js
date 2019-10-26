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
    }
}
const seccionRoutes = new SeccionRoutes();
exports.default = seccionRoutes.router;
