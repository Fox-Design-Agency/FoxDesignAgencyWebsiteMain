const fs = require("fs-extra");
let Documentation;
try {
  const Documentations = fs.readJSONSync(
    "./expansion/upgrade/documentation-builder/routes/checkers/documentationModelRoutes.json"
  ).route;
  Documentation = require(Documentations);
} catch (err) {
  Documentation = require("../../documentation");
}
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Finds all the documentation in the Documentation collection.
 * @return {promise} A promise that resolves with all the documentation
 */
module.exports = () => {
  return Documentation.find({})
    .populate("category")
    .populate("author")
    .catch(err => {
      errorAddEvent(err, "documentation query error");
    });
};