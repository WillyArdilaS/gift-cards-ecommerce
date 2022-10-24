const express = require("express");
const router = express.Router();
const comprasController = require("../controllers/compras.controller.js");

router.post("/", comprasController.create);
router.get("/", comprasController.find);
router.get("/:id_tarjeta", comprasController.findOne);
router.put("/:_id", comprasController.update);
router.delete("/:_id", comprasController.remove);

module.exports = router;