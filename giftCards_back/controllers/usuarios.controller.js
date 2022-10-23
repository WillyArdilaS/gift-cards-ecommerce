const Usuario = require("../models/usuarios.model.js");

let response = {
    msg: "",
    success: false
}

exports.create = function(req, res) {
    let usuario = new Usuario({
        username: req.body.username, 
        contrasena: req.body.contrasena,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        email: req.body.email,
        saldo: req.body.saldo
    })

    usuario.save(function(err){
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