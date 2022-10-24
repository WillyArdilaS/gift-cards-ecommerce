const Tarjeta = require("../models/tarjeta.model.js");

let response = {
    msg: "",
    success: false
}

/* Create */ 
exports.create = function(req, res) {
    let tarjeta = new Tarjeta({
        id_tarjeta: req.body.id_tarjeta,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        descuento: req.body.descuento,
        codigo_canjeo: req.body.codigo_canjeo,
        ruta_imagen: req.body.ruta_imagen
    })

    tarjeta.save(function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al guardar la tarjeta",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Tarjeta guardada con éxito",
        res.json(response)
    })
}

/* Read */
exports.find = function(req, res) {
    Tarjeta.find(function(err, tarjetas) {
        res.json(tarjetas);
    })
}

exports.findOne = function(req, res) {
    Tarjeta.find({id_tarjeta: req.params.id_tarjeta}, function(err, tarjeta) {
        res.json(tarjeta);
    })
}

/* Update */
exports.update = function(req, res) {
    let tarjeta = ({
        id_tarjeta: req.body.id_tarjeta,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        descuento: req.body.descuento,
        codigo_canjeo: req.body.codigo_canjeo,
        ruta_imagen: req.body.ruta_imagen
    })

    Tarjeta.findByIdAndUpdate(req.params._id, {$set: tarjeta}, function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al actualizar la tarjeta",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Tarjeta actualizada con éxito",
        res.json(response)
    })
}

/* Delete */
exports.remove = function(req, res) {
    Tarjeta.findByIdAndRemove({_id: req.params._id}, function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al eliminar la tarjeta",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Tarjeta eliminada con éxito",
        res.json(response)
    })
}