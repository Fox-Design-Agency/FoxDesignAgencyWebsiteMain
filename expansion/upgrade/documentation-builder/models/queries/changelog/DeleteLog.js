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
 * Deletes a single changelog from the Changelog collection
 * @param {objectID} _id - The ID of the changelog to delete.
 * @return {promise} A promise that resolves when the record is deleted
 */
module.exports = _id => {
  return Changelog.findByIdAndRemove(_id).catch(err => {
    errorAddEvent(err, "changelog query error");
  });
};