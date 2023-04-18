// Importacion de express
import express from "express";

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
    res.render('index')
})