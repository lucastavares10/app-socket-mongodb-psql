const express = require('express');
const fs = require('fs');
const io = require('socket.io-client');
const Conversa = require('./model/Conversa');
const { Sequelize, Model, DataTypes, BOOLEAN } = require('sequelize');
const sequelize = require('./db/database');

const app = express();
app.use(express.json());

const http = require('http').createServer(app);
var socket = io.connect('http://localhost:4000');

function exportar() {
    socket.emit('buscar_todas_conversas_old');

    socket.on('buscar_todas_conversas_old', function (res) {
        (async () => {
            var teste = true;
            var conversasExportadas = await Conversa.findAll();

            res.forEach(conversa => {
                conversasExportadas.forEach(exportada => {
                    if (exportada._id == conversa._id) {
                        teste = false; //já foi exportada.
                    }
                });

                if (teste == true) {
                    var cl_nome = cl_email = at_nome = at_email = null;
                    var hr_criacao = hr_fim = hr_atnd = null;

                    //tratamentos undefined
                    if (conversa.cliente !== undefined) {
                        if (conversa.cliente['nome'] !== undefined)
                            cl_nome = conversa.cliente['nome'];
                        if (conversa.cliente['email'] !== undefined)
                            cl_email = conversa.cliente['email'];
                    }

                    if (conversa.atendente !== undefined) {
                        if (conversa.atendente['name'] !== undefined)
                            at_nome = conversa.atendente['name'];
                        if (conversa.atendente['email'] !== undefined)
                            at_email = conversa.atendente['email'];
                    }

                    if (conversa.hora_criacao !== undefined)
                        hr_criacao = Date.parse(conversa.hora_criacao);
                    else
                        hr_criacao = conversa.hora_criacao;

                    if (conversa.hora_fim_conversa !== undefined)
                        hr_fim = Date.parse(conversa.hora_fim_conversa);
                    else
                        hr_fim = conversa.hora_fim_conversa;

                    if (conversa.hora_do_atendimento !== undefined)
                        hr_atnd = Date.parse(conversa.hora_do_atendimento);
                    else
                        hr_atnd = conversa.hora_do_atendimento;

                    try {
                        Conversa.create({
                            _id: conversa._id,
                            hora_criacao: hr_criacao,
                            hora_fim_conversa: hr_fim,
                            hora_do_atendimento: hr_atnd,
                            nova_mensagem: BOOLEAN.parse(conversa.nova_mensagem),
                            cliente_nome: cl_nome,
                            cliente_email: cl_email,
                            atendente_nome: at_nome,
                            atendente_email: at_email,
                            fila: conversa.fila,
                            canal: conversa.canal,
                            encerrada: BOOLEAN.parse(conversa.encerrada),
                            atendida: BOOLEAN.parse(conversa.atendida),
                            atendimentoBot: BOOLEAN.parse(conversa.atendimentoBot),
                            sucessoAtendimento: BOOLEAN.parse(conversa.sucessoAtendimento),
                            situacao: conversa.situacao,
                            assunto: conversa.assunto,
                            produto: conversa.produto,
                            setor: conversa.setor,
                            meioTransferencia: conversa.meioTransferencia,
                            observacao: conversa.observacao,
                            satisfacao_do_cliente: conversa.satisfacao_do_cliente,
                            encerrada_por: conversa.encerrada_por,
                            fechou_janela: BOOLEAN.parse(conversa.fechou_janela),
                            novas_mensagens: conversa.novas_mensagens,
                            plataforma: conversa.plataforma,
                            navegador: conversa.navegador,
                            info: conversa.info
                        });

                    } catch (error) {
                        console.log(error);
                    }
                }
            });
        })();
    });
}

//Conversa.sync({ force: true });
exportar();
setInterval(exportar, 86400000); //Executa em 24H

http.listen(3000, () => {
    console.log(' ==> Aplicação HTTP rodando na porta: ' + 3000)
});

module.exports = app;

