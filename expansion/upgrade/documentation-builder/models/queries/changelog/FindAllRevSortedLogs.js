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
 * Finds all the changelogs sorted in reverse order form the Changelog collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the page that matches the id
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