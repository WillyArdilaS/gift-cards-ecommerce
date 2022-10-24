const Usuario = require("../models/usuario.model.js");

let response = {
    msg: "",
    success: false
}

/* Create */ 
exports.create = function(req, res) {
    let usuario = new Usuario({
        username: req.body.username, 
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        saldo: req.body.saldo
    })

    usuario.save(function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al guardar el usuario",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Usuario guardado con éxito",
        res.json(response)
    })
}

/* Read */
exports.find = function(req, res) {
    Usuario.find(function(err, usuarios) {
        res.json(usuarios);
    })
}

exports.findOne = function(req, res) {
    Usuario.find({username: req.params.username}, function(err, usuario) {
        res.json(usuario);
    })
}

/* Update */
exports.update = function(req, res) {
    let usuario = ({
        username: req.body.username, 
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        saldo: req.body.saldo
    })

    Usuario.findByIdAndUpdate(req.params._id, {$set: usuario}, function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al actualizar el usuario",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Usuario actualizado con éxito",
        res.json(response)
    })
}

/* Delete */
exports.remove = function(req, res) {
    Usuario.findByIdAndRemove({_id: req.params._id}, function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al eliminar el usuario",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Usuario eliminado con éxito",
        res.json(response)
    })
}