const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    username:{type: String, required: true, max: 50},
    contrasena:{type: String, required: true, max: 50},
    nombre:{type: String, required: true, max: 50},
    apellido:{type: String, required: true, max: 50},
    email:{type: String, required: true, max: 50},
    saldo:{type: mongoose.SchemaTypes.Decimal128, required: true, min: 0},
});

module.exports = mongoose.model("usuario", UsuarioSchema);