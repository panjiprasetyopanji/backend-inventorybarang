const express = require("express");
const router = express.Router();
const BarangController = require("../controller/barang.controller");
router.post("/add", (req, res) => {
  BarangController.add(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
router.get("/get", (req, res) => {
  BarangController.getbarang(req.body)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
});
router.delete("/delete/:id", BarangController.delete);
router.put("/update/:id", BarangController.update);

module.exports = router;
