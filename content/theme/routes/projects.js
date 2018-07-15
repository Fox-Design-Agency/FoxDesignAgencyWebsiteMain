const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pages_controller");
/*
* GET /
*/
router.get("/", pagesController.project);
/*
  * GET /:category
  */
router.get("/:category", pagesController.projectCategory);
/*
  * GET /:category/:project
  */
router.get("/:category/:project", pagesController.singleProject);

//Exports
module.exports = router;
