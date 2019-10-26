const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Philalexandros!',
    database: 'proyectoipc'
  });



pool.getConnection().then((connection: any) => {
   verificanddoConexión();
    
});
 
export default pool;
  


async function verificanddoConexión() {

    const connection = await pool.getConnection();
    connection.release();
    console.log("Conectada ;D");

}

/**async function getAllBlogPost() {

  const result = await pool.query('SELECT * from tauxiliar'); 
  console.log(result[0]);
}**/