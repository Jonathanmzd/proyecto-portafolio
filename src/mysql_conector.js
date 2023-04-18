// importar mysql
import mysql from "mysql";

// crear conexion
const conector = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app_agenda",
});

const conectar = () => {
    conector.connect(err => {
        if (err) throw err
        console.log('Conectado a MariaDB') 
    })
}

// exportar funcion conectar
export {conectar}