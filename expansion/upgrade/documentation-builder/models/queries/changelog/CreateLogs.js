const fs = require("fs-extra");
let Changelog;
try{
  const Changelogs = fs.readJSONSync(
  "./expansion/upgrade/documentation-builder/routes/checkers/changelogModelRoutes.json"
).route;
Changelog = require(Changelogs);
}catch(err){
Changelog = require("../../changelog");
}
/* Aristos Logger Path */
const errorAddEvent = require("../../../../../../important/AristosStuff/AristosLogger/AristosLogger")
  .addError;
/**
 * Creates a single changelog in the Changelog collection.
 * @param {object} logProps - Object containing title, slug, content, category, description, keywords, author
 * @return {promise} A promise that resolves with the changelog that was created
 */
module.exports = logProps => {
  const changelog = new Changelog(logProps);
  return changelog.save().catch(err => {
    errorAddEvent(err, "changelog query error");
  });
};