const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller.js");

router.post("/", usuariosController.create);
router.get("/", usuariosController.find);
router.get("/:username", usuariosController.findOne);
router.put("/:_id", usuariosController.update);
router.delete("/:_id", usuariosController.remove);

module.exports = router;