"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auxController_1 = __importDefault(require("../controllers/auxController"));
class AuxRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', auxController_1.default.list);
        this.router.get('/:id', auxController_1.default.getOne);
        this.router.post('/', auxController_1.default.create);
        this.router.delete('/:id', auxController_1.default.delete);
        this.router.put('/:id', auxController_1.default.update);
    }
}
const auxRoutes = new AuxRoutes();
exports.default = auxRoutes.router;
