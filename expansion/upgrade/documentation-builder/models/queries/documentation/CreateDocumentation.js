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
 * Creates a single documentation in the Documentation collection.
 * @param {object} documentationProps - Object containing title, slug, content, description, keywords, author, image
 * @return {promise} A promise that resolves with the documentation that was created
 */
module.exports = documentationProps => {
  const documentation = new Documentation(documentationProps);
  return documentation.save().catch(err => {
    errorAddEvent(err, "documentation query error");
  });
};