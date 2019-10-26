"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: "Este es el Backend!!! :D" });
    }
}
exports.indexController = new IndexController();
