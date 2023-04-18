// importar mysql
import mysql from "mysql";

// crear conexion
const conector = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "app_agenda",
});

// Validacion conectar
const conectar = () => {
    conector.connect(err => {
        if (err) throw err
        console.log('Conectado a MariaDB') 
    })
}

// create contacto
const agregarContacto = (nombre, numero) => {
  const sql = `INSERT INTO contacto (id_contacto, nombre_contacto, numero_contacto) VALUES (${null}, "${nombre}", ${numero})`
  conector.query(sql, function(err, result, field){
    if (err) throw err
    console.log(result) 
  })
}

// exportar funcion conectar
export {conectar, agregarContacto}