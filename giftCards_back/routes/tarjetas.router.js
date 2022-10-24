const express = require("express");
const router = express.Router();
const tarjetasController = require("../controllers/tarjetas.controller.js");

router.post("/", tarjetasController.create);
router.get("/", tarjetasController.find);
router.get("/:id_tarjeta", tarjetasController.findOne);
router.put("/:_id", tarjetasController.update);
router.delete("/:_id", tarjetasController.remove);

module.exports = router;