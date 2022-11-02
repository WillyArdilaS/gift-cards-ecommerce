const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    username:{type: String, required: true, max: 50},
    contrasena:{type: String, required: true, max: 128},
    nombre:{type: String, required: true, max: 50},
    apellido:{type: String, required: true, max: 50},
    email:{type: String, required: true, max: 50},
    saldo:{type: mongoose.SchemaTypes.Decimal128, required: true, min: 0}
});

module.exports = mongoose.model("cliente", ClienteSchema);