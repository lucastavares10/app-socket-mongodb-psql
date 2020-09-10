const { Sequelize, Model, DataTypes, BOOLEAN, DATE } = require('sequelize');
const sequelize = require('../db/database');
const Conversa = sequelize.define('conversa', {
 
    _id: {
      type: DataTypes.STRING,
      unique:true
    },

    hora_criacao: {
      type: DataTypes.DATE
    },
  
    hora_fim_conversa: {
      type: DataTypes.DATE
    },
  
    hora_do_atendimento: {
      type: DataTypes.DATE
    },
  
    nova_mensagem: {
      type: DataTypes.BOOLEAN
    },

    cliente_nome: {
      type: DataTypes.STRING
    },

    cliente_email: {
      type: DataTypes.STRING
    },

    atendente_nome: {
      type: DataTypes.STRING
    },

    atendente_email: {
      type: DataTypes.STRING
    },
  
    fila: {
      type: DataTypes.STRING
    },
  
    canal: {
      type: DataTypes.STRING
    },
  
    encerrada: {
      type: DataTypes.BOOLEAN
    },
  
    atendida: {
      type: DataTypes.BOOLEAN
    },
  
    atendimentoBot: {
      type: DataTypes.BOOLEAN
    },
  
    sucessoAtendimento: {
      type: DataTypes.BOOLEAN
    },
  
    situacao: {
      type: DataTypes.STRING,
    },
  
    assunto: {
      type: DataTypes.STRING
    },

    produto: {
      type: DataTypes.STRING
    },
  
    setor: {
      type: DataTypes.STRING
    },
  
    meioTransferencia: {
      type: DataTypes.STRING,
    },
  
    observacao: {
      type: DataTypes.STRING
    },
  
    satisfacao_do_cliente: {
      type: DataTypes.INTEGER
    },
  
    encerrada_por: {
      type: DataTypes.STRING
    },
  
    fechou_janela: {
      type: DataTypes.BOOLEAN
    },
  
    novas_mensagens: {
      type: DataTypes.INTEGER
    },
  
    plataforma: {
      type: DataTypes.STRING
    },
  
    navegador: {
      type: DataTypes.STRING
    },
  
    isMobile: {
      type: DataTypes.BOOLEAN,
    },
  
    info: {
      type: DataTypes.STRING,
    },
}, {timestamps: false});

module.exports = Conversa;