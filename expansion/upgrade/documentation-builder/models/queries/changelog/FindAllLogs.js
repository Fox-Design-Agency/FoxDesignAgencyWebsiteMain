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
 * Finds all the changelogs in the Changelog collection.
 * @return {promise} A promise that resolves with all the changwelogs
 */
module.exports = () => {
  return Changelog.find({})
    .populate("category")
    .populate("author")
    .catch(err => {
      errorAddEvent(err, "changelog query error");
    });
};