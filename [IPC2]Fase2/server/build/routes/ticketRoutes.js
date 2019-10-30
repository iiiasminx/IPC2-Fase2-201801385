"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ticketcontroller_1 = __importDefault(require("../controllers/ticketcontroller"));
class TicketRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ticketcontroller_1.default.list);
        this.router.get('/:id', ticketcontroller_1.default.getOne);
        this.router.post('/', ticketcontroller_1.default.create);
        this.router.delete('/:id', ticketcontroller_1.default.delete);
        this.router.get('/spec/1', ticketcontroller_1.default.getNombreCursoYSeccion);
    }
}
const ticketroutes = new TicketRoutes();
exports.default = ticketroutes.router;
