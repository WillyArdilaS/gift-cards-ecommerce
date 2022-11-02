const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller.js");

router.post("/login", usuariosController.login);

module.exports = router;