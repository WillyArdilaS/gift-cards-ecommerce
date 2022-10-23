const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller.js");

router.post("/", usuariosController.create);
module.exports = router;