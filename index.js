// Importacion de express
import express from "express";

const app = express()
const port = '8000'

app.listen(port, function() {
    console.log('app Iniciada')
})