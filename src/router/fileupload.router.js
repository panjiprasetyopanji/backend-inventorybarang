const express = require("express");
const router = express.Router();
const controller = require("../controller/uploader.controller");

router.post("/upload", controller.upload);
router.get("/get", controller.getListFiles);
router.get("/files/:name", controller.download);

module.exports = router;