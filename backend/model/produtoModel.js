var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	nome: {type: String, required: true},
	descricao: String,
	preco: Number,
	criado_em: Date,
	alterado_em: Date

});

var Produto = mongoose.model('produtos', userSchema);

module.exports = Produto;
