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
 * counts the changelogs in the Changelog collection.
 * @return {promise} A promise that resolves with count of the changelogs
 */
module.exports = () => {
  return Changelog.estimatedDocumentCount({})
    .then(c => {
      return c;
    })
    .catch(err => {
      errorAddEvent(err, "changelog query error");
    });
};