const express = require("express");
const router = express.Router();
const aristosController = require("../controllers/aristos_controller");
/*
* GET /
*/
router.get("/", aristosController.home);

/*
* GET /changelog
*/
router.get("/changelog", aristosController.changelog);

/*
* GET /documentation
*/
router.get("/documentation", aristosController.documentationMain);
/*
* GET /documentation/:id
*/
router.get("/documentation/:id", aristosController.documentationItem);

//Exports
module.exports = router;
