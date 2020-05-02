

var socket = io();//hay q usar var y no let para mayor compatibilidad con los navegadores web

//funcion que envia un mensaje cuando estoy conectado a un servidor
socket.on('connect', function(){
    console.log('conectado al servidor');
});

//los on son para escuchar informacion o sucesos
socket.on('disconnect', function(){
    console.log('conexion con el servidor perdida');
});

//los emit son para enviar informacion y solo al servidor (de forma privada)
socket.emit('enviarMensaje', {  //evitar caracteres especiales y espacios en el nombre
    usuario: 'Brayan',
    mensaje: 'Hola Mundo'
    //lo mas comun es enviar objetos para centralizar mucha info en un envio
}, function( resp ) {
    console.log('respuesta del Servidor: ', resp);
});

socket.on('enviarMensaje', (mensaje) => {  //evitar caracteres especiales y espacios en el nombre
    console.log('Servidor: ', mensaje);
});