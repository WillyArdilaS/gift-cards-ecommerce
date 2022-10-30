const Cliente = require("../models/cliente.model.js");

let response = {
    msg: "",
    success: false
}

/* Create */ 
exports.create = function(req, res) {
    let cliente = new Cliente({
        username: req.body.username, 
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        saldo: req.body.saldo
    })

    cliente.save(function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al guardar el cliente",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Cliente guardado con éxito",
        res.json(response)
    })
}

/* Read */
exports.find = function(req, res) {
    Cliente.find(function(err, clientes) {
        res.json(clientes);
    })
}

exports.findOne = function(req, res) {
    Cliente.find({username: req.params.username}, function(err, cliente) {
        res.json(cliente);
    })
}

/* Update */
exports.update = function(req, res) {
    let cliente = ({
        username: req.body.username, 
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        saldo: req.body.saldo
    })

    Cliente.findByIdAndUpdate(req.params._id, {$set: cliente}, function(err) {
        if(err) {
            console.error(err),
            response.success = false,
            response.msg = "Error al actualizar el cliente",
            res.json(response)
            return;
        }

        response.success = true,
        response.msg = "Cliente actualizado con éxito",
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