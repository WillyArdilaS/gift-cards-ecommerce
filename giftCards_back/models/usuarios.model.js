const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    username:{type: String, required: true, max: 50},
    contrasena:{type: String, required: true, max: 50},
    nombre:{type: String, required: true, max: 50},
    apellido:{type: String, required: true, max: 50},
    email:{type: String, required: true, max: 50},
    saldo:{type: String, required: true, max: 50},
});

module.exports = mongoose.model("usuarios", UsuariosSchema);