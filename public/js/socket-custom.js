const socket = io();

socket.on('connect', () => {
    console.log ('Conectado al servidor')
})

socket.on('disconnect',()=>{
    console.log ('Perdimos conexión con el servidor');
});
socket.on('EnviarMensaje', (mensaje)=>{
    console.log ('Servidor: ', mensaje);
});

socket.emit('EnviarMensaje', {
    usuario: 'Jayson',
    mensaje: 'Hola Mundo'
}, function(res){
    console.log ('Respuesta Server', res)
});
