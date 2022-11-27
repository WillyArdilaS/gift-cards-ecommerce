const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompraSchema = new Schema({
    id_tarjeta:{type: String, required:  true, min: 0},
    username:{type: String, required: true, max: 50},
    fecha_compra:{type: String, required: true, min: 0}
});

module.exports = mongoose.model("compra", CompraSchema);