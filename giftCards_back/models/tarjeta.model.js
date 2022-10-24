const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TarjetaSchema = new Schema({
    id_tarjeta:{type: String, required:  true, min: 0},
    nombre:{type: String, required: true, max: 50},
    categoria:{type: String, required: true, max: 50},
    precio:{type: mongoose.SchemaTypes.Decimal128, required: true, min: 0},
    descuento:{type: mongoose.SchemaTypes.Number, required: true, min: 0, max: 1},
    codigo_canjeo:{type: String, required: true, min: 0, max: 10},
    ruta_imagen:{type: String, required: true, min: 0}
});

module.exports = mongoose.model("tarjeta", TarjetaSchema);