"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Philalexandros!',
    database: 'proyectoipc'
});
pool.getConnection().then((connection) => {
    verificanddoConexión();
});
exports.default = pool;
function verificanddoConexión() {
    return __awaiter(this, void 0, void 0, function* () {
        const connection = yield pool.getConnection();
        connection.release();
        console.log("Conectada ;D");
    });
}
/**async function getAllBlogPost() {

  const result = await pool.query('SELECT * from tauxiliar');
  console.log(result[0]);
}**/ 
