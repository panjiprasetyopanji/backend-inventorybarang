const express = require("express");
const router = express.Router();
const UserController = require("../controller/user.controller");
router.post("/signup", (req, res) => {
    UserController.signup(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});
router.post("/signin", (req, res) => {
    UserController.login(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});
router.post("/add", (req, res) => {
    UserController.add(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});

router.get("/get", (req, res) => {
    UserController.getuser(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});
router.delete("/delete/:id", UserController.delete);
router.put("/update/:id", UserController.update);
module.exports = router;