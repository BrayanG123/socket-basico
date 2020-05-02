const { io } = require('../server'); 

io.on('connection', (client) => {//el objeto client contiene toda la info de la computadora o de la coneccion que se establecio
    
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente --- envairMensaje <- nombre del evento q va a escuchar
    client.on('enviarMensaje', ( data, callback ) => { //data <- el objeto q recibo
        
        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

        // if (!callback)  return;

        // if ( mensaje.usuario ){
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // }else{
        //     callback({
        //         resp: 'Ha salido mal xd'
        //     });
        // }

    });

});
