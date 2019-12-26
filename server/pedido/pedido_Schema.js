var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// TODO: Inserir as validações necessárias no esquema de dados (ou alterar via Mongo).

var contagemSchema = new Schema({
    dataContagem: Date,
    linhaProduto: [linhaSchema],
}, { versionKey: false });

var linhaSchema = new Schema({
    nomeProduto: String,
    q1: Number,
    un1: String,
    rlEstoqueCompra1: Number,
    q2: Number,
    un2: String,
    rlEstoqueCompra2: Number,
    unCompra: String,
    qmin: Number,
    qPedido: Number
})

module.exports = mongoose.model("Contagem", contagemSchema);