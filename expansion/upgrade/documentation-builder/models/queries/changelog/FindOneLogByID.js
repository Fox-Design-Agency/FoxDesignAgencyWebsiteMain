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
 * Finds a single changelog in the Changelog collection.
 * @param {objectID} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the changelog that matches the id
 */
module.exports = _id => {
  return Changelog.findById(_id)
    .populate("category")
    .populate("author")
    .catch(err => {
      errorAddEvent(err, "changelog query error");
    });
};