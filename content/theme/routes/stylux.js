const express = require("express");
const router = express.Router();
const styluxController = require("../controllers/stylux_controller");
/*
* GET /
*/
router.get("/", styluxController.home);

/*
* GET /changelog
*/
router.get("/changelog", styluxController.changelog);

/*
* GET /documentation
*/
router.get("/documentation", styluxController.documentationMain);
/*
* GET /documentation/:id
*/
router.get("/documentation/:id", styluxController.documentationItem);

//Exports
module.exports = router;
