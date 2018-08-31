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
 * Finds all the changelogs sorted in the Changelog collection.
 * @param {object} stuff - The object containing the stuff to find.
 * @return {promise} A promise that resolves with all the sorted changelogs
 */
module.exports = stuff => {
  return Changelog.find(stuff)
    .sort({ sorting: 1 })
    .populate("category")
    .populate("author")
    .catch(err => {
      errorAddEvent(err, "changelog query error");
    });
};