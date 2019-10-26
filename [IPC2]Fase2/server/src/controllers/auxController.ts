import {Request, Response} from 'express';
import pool from '../database';

class AuxController{

    public async list (req: Request, res: Response) {
        const auxiliares = await pool.query('SELECT * FROM tauxiliar');
        res.json(auxiliares[0]);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from tauxiliar WHERE id_auxiliar = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'El auxiliar que busca no existe :C'});
        }
        res.json(resultado[0]); 
    }

    public async create(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO tauxiliar set?', [req.body]);
        res.json({text: 'auxiliar creado'});
    }

    public async delete(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('DELETE FROM tauxiliar WHERE id_auxiliar =?', [id]);
        res.json({text: 'auxiliar eliminado'});
    }

    public async update(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('UPDATE tauxiliar set? WHERE id_auxiliar =?', [req.body, id]);
        res.json({text: 'auxiliar actualizado'});
    }
}  

const auxController = new AuxController();
export default auxController;