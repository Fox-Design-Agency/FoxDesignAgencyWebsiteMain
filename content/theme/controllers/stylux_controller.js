// GET page model
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");

// changelog stuffs
const findSortedLogWithParams = require("../../../expansion/upgrade/documentation-builder/models/queries/changelog/FindSortedLogsWithParams");
// documentation stuffs
const findSortedDocumentationWithParams = require("../../../expansion/upgrade/documentation-builder/models/queries/documentation/FindSortedDocumentationWithParams");

module.exports = {
  home(req, res, next) {
    const HomePage = FindPageWithParam({ slug: "stylux" });
    HomePage.then(page => {
      res.render("../views/stylux/index", {
        title: page[0].title,
        content: page[0].content,
        keywords: page[0].keywords,
        description: page[0].description,
        author: page[0].author
      });
    });
  }, // end of home function

  changelog(req, res, next) {
    const changelogs = findSortedLogWithParams({ category: "stylux" });
    changelogs.then(logs => {
      res.render("../views/stylux/changelog", {
        title: "Changelog",
        content: "",
        keywords: "",
        description: "",
        author: "",
        changelog: logs
      });
    });
  }, // end of changelog function

  documentationMain(req, res, next) {
    const documentation = findSortedDocumentationWithParams({
      category: "stylux"
    });
    documentation.then(docs => {
      res.render("../views/stylux/documentationMain", {
        title: "Documentation",
        content: "",
        keywords: "",
        description: "",
        author: "",
        documentation: docs
      });
    });
  }, // end of changelog function
  documentationItem(req, res, next) {
    const documentation = findSortedDocumentationWithParams({
      _id: req.params.id,
      category: "stylux"
    });
    documentation.then(docs => {
      res.render("../views/stylux/documentation", {
        title: "Documentation",
        content: "",
        keywords: "",
        description: "",
        author: "",
        documentation: docs
      });
    });
  } // end of changelog function
};
