import {Request, Response} from 'express';
import pool from '../database';

class SeccionController{

    public async list (req: Request, res: Response) {
        const cursos = await pool.query('SELECT * FROM tseccion');
        res.json(cursos[0]);
    }

    public async getPorAuxiliar (req: Request, res: Response) {
        const {id} = req.params;
        const cursos = await pool.query('SELECT * FROM tseccion where id_auxiliar = ' +  id);
        if(cursos[0].length < 1){
            res.json({text: 'El auxiliar aún no se ha asignado secciones'});
        }
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

    public async getSinAuxiliar(req: Request, res:Response){
        //const cursos = await pool.query('select * from tseccion where id_auxiliar IS NULL;');
        const cursos = await pool.query('select tseccion.sec_nombre, tseccion.sec_horario, tseccion.id_seccion, tcurso.cur_nombre from tseccion, tcurso where tseccion.id_auxiliar IS NULL and tseccion.id_curso = tcurso.id_curso group by tseccion.id_seccion;');
        res.json(cursos[0]);
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

    public async desasignarAuxiliar(req: Request, res:Response){
        await pool.query('UPDATE tseccion set id_auxiliar = NULL WHERE id_seccion = '+ req.params.id +';');
        res.json({text: 'auxiliar desasignado'});
    }

    public async setearAuxiliar(req: Request, res:Response){
        //const {id} = req.params.id;
        const {carnet} = req.params;
        //console.log('mi id es:', id);
        await pool.query('UPDATE tseccion set id_auxiliar = '+ req.params.id_estudiante+' WHERE id_seccion = '+ req.params.id +';');
        //res.json({text: 'mi id es: ' + req.params.id + ' ' + req.params.id_estudiante});
        res.json({text: 'seccion actualizada'});
    }
}  

const seccionController = new SeccionController();
export default seccionController;