const dotenv = require("dotenv");
dotenv.config();
var express = require("express");
var router = express.Router();
global.__basedir = process.env.PATH_DEVELOPMENT;

const users = require("./user.router");
const barangs = require("./barang.router");
const files = require("./fileupload.router");

router.use("/users", users);
router.use("/barangs", barangs);
router.use("/files", files);

router.use(express.static("static"));
router.use(express.static(__dirname + "/"));
module.exports = router;