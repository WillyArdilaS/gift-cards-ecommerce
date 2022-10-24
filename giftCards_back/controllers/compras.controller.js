const Compra = require("../models/compra.model.js");

let response = {
    msg: "",
    success: false
}

/* Create */ 
exports.create = function(req, res) {
    let compra = new Compra({
        id_tarjeta: req.body.id_tarjeta,
        username: req.body.username,
        fecha_compra: req.body.fecha_compra
    })

    compra.save(function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al guardar la compra",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Compra guardada con éxito",
        res.json(response)
    })
}

/* Read */
exports.find = function(req, res) {
    Compra.find(function(err, compras) {
        res.json(compras);
    })
}

exports.findOne = function(req, res) {
    Compra.find({id_tarjeta: req.params.id_tarjeta}, function(err, compra) {
        res.json(compra);
    })
}

/* Update */
exports.update = function(req, res) {
    let compra = ({
        id_tarjeta: req.body.id_tarjeta,
        username: req.body.username,
        fecha_compra: req.body.fecha_compra
    })

    Compra.findByIdAndUpdate(req.params._id, {$set: compra}, function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al actualizar la compra",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Compra actualizada con éxito",
        res.json(response)
    })
}

/* Delete */
exports.remove = function(req, res) {
    Compra.findByIdAndRemove({_id: req.params._id}, function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al eliminar la compra",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Compra eliminada con éxito",
        res.json(response)
    })
}