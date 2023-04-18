// Importacion de express
import express from "express";
import { agregarContacto, obtenerContactos, borrarContacto } from "./src/mysql_conector.js";

let todos

// Iniciamos Express
const app = express()

// Puerto
const port = '8000'

// Iniciamos Servidor
app.listen(port, function() {
    console.log('app Iniciada')
})

// Configuracion de Pug
app.set('views','./vistas')
app.set('view engine','pug')

// Configuracion de archivos estaticos
app.use(express.static('./vistas'))
app.use(express.static('./src'))
app.use(express.static('./css'))

// Ruta Inicial
app.get('/', function(req,res) {
    // res.send('aplicacion inicia')
    todos = obtenerContactos()
    res.render('index', {titulo:'Aplicacion de Contacto', contactos:todos})
})

// Capturar Url
app.get('/agregar/:nombre/:numero', function(req, res) {
    let nombre = req.params.nombre
    let numero = req.params.numero
    agregarContacto(nombre,numero)
    res.redirect('/')

    console.log(nombre, numero)
})

app.get('/borrar/:id', function(req, res) {
    let id = req.params.id
    // console.log(id)
    borrarContacto(id)
    res.redirect('/')
})