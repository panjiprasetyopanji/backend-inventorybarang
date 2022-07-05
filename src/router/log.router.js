const log = require("../controller/log");
const express = require("express");
const router = express.Router();

router.post("/addlog", (req, res) => {
    log
        .addlog(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});

router.get("/getlog", (req, res) => {
    log
        .getlog(req.body)
        .then((result) => res.json(result))
        .catch((err) => res.json(err));
});
router.delete("/deletelog/:id", log.deletelog);
router.put("/updatelog/:id", log.updatelog);
module.exports = router;