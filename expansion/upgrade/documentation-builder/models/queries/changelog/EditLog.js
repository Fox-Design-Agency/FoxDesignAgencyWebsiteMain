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
/**
 * Edits a single changelog in the Changelog collection
 * @param {objectID} _id - The ID of the changelog to edit.
 * @param {object} logProps - An object with title, slug, content, category, description, keywords, author
 * @return {promise} A promise that resolves when the changelog is edited
 */
module.exports = (_id, logProps) => {
  return Changelog.findByIdAndUpdate({ _id }, logProps).catch(err => {
    errorAddEvent(err, "changelog query error");
  });
};