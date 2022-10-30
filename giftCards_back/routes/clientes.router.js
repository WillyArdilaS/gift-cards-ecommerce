const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientes.controller.js");

router.post("/", clientesController.create);
router.get("/", clientesController.find);
router.get("/:username", clientesController.findOne);
router.put("/:_id", clientesController.update);
router.delete("/:_id", clientesController.remove);

module.exports = router;