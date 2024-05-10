import pg from 'pg';
import 'dotenv/config';

const {DB_PASSWORD, DB_USER, DB_HOST, DB_DATABASE, DB_PORT} = process.env;

const config = {
    user: DB_USER,
    host: DB_HOST,
    database: DB_DATABASE,
    password: DB_PASSWORD,
    port: DB_PORT,
    allowExitOnIdle:true,
}

const dbase = new pg.Pool (config);

const client = await dbase.connect();
const {rows} = await client.query ('SELECT NOW()'); // consulta a bbdd
console.log(rows);
client.release ();

//ejemplo de insertar datos en tabla,
const inserRopa=async()=>{
    const consulta='Insert into ropa(tipo,talla) values (,)';
    const values=['jeans','44'];

    const resp=await dbase.query(consulta,values);
    console.log(resp)
};

//ejemplo para eliminar productos
const deleteRopa = async ()=>{
    const constlta='delete from ropa where tipo =';
    const values= ['polera roja']
    const response=await dbase.query(consulta, values);
    console.log(response);
}

getDate();// la funcion getDate es la funcion uqe hemos creado que se debe invocar

inserRopa ();
export default pool