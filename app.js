const express = require('express');
const fs = require('fs');
const io = require('socket.io-client');

const app = express();
app.use(express.json());

const http = require('http').createServer(app);

var socket = io.connect('http://localhost:4000');

socket.emit('buscar_todas_conversas', "teste");

socket.on('buscar_todas_conversas', function(msg){
    console.log(msg);
});

http.listen(3000, () => {
    console.log(' ==> Aplicação HTTP rodando na porta: ' + 3000)
});

module.exports = app;

