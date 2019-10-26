import {Request, Response} from 'express';
import pool from '../database';

class SeccionController{

    public async list (req: Request, res: Response) {
        const cursos = await pool.query('SELECT * FROM tseccion');
        res.json(cursos[0]);
    }

    public async getOne(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        const resultado = await pool.query('SELECT * from tseccion WHERE id_seccion = ?', [id]); 
        if(resultado[0].length < 1){
            res.json({text: 'La sección que busca no existe :C'});
        }
        res.json(resultado[0]); 
    }

    public async create(req: Request, res: Response){
        console.log(req.body);
        await pool.query('INSERT INTO tseccion set?', [req.body]);
        res.json({text: 'seccion creada'});
    }

    public async delete(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('DELETE FROM tseccion WHERE id_seccion =?', [id]);
        res.json({text: 'seccion eliminada'});
    }

    public async update(req: Request, res:Response){
        const {id} = req.params;
        console.log('mi id es:', id);
        await pool.query('UPDATE tseccion set? WHERE id_seccion =?', [req.body, id]);
        res.json({text: 'seccion actualizada'});
    }
}  

const seccionController = new SeccionController();
export default seccionController;