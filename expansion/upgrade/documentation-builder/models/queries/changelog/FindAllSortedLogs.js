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
 * Finds all the sorted changelogs in the Changelog collection.
 * @return {promise} A promise that resolves with the sorted changelogs
 *
 */
module.exports = () => {
  return Changelog.find({})
    .sort({ sorting: 1 })
    .populate("category")
    .populate("author")
    .catch(err => {
      errorAddEvent(err, "changelog query error");
    });
};