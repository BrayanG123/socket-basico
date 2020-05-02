const express = require('express');
const socketIO = require('socket.io'); 
const http = require('http'); //socket requiere de http para funcionar

const path = require('path');

const app = express();
//definiremos el servidor para correr la aplicacion
let server = http.createServer( app );

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

//este middleware habilita la carpeta public y que todo el mundo pueda acceder a ella
app.use(express.static(publicPath));

// IO = esta es la comunicacion del backend
// let io = socketIO(server); //inicializar el sokcetIO <-- estamos trabajando con la de abajo por la optimizacion del codigo
module.exports.io = socketIO(server); //artificio para usar el codigo en otro archivo js
require('./sockets/socket');//con esto mas




server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});