const { io } = require( "../server");

io.on('connection', (client) =>{

    console.log ('Usuario Conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido a esta aplicación'
    })


    client.on('disconnect', ()=>{
        console.log ('Usuario desconectado')
    })

    //Escuchar cliente

    client.on('EnviarMensaje',(data, callBack)=>{

        console.log (data);

        client.broadcast.emit('EnviarMensaje', data)

        // if(mensaje.usuario) {
        //     callBack ({
        //         respuesta: 'Todo Salio Bien'
        //     });
        // }else{
        //     callBack ({
        //         respuesta: 'Todo Salio Mal!!!'
        //     });
        // }

    })
});
