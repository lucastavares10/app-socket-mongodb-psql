const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());


const http = require('http').createapp(app);

const io = require('socket.io-client');
var socket = io.connect('http://localhost:4000');

//socket.emit('monit_adm_req');

http.listen(3000, () => {
    console.log(' ==> Aplicação HTTP rodando na porta: ' + 3000)
});

module.exports = app;

