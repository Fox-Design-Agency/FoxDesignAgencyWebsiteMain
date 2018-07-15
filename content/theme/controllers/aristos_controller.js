// GET page model
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");

// changelog stuffs
const findSortedLogWithParams = require("../../../expansion/upgrade/documentation-builder/models/queries/changelog/FindSortedLogsWithParams");

// documentation stuffs
const findSortedDocumentationWithParams = require("../../../expansion/upgrade/documentation-builder/models/queries/documentation/FindSortedDocumentationWithParams");

module.exports = {
  home(req, res, next) {
    const HomePage = FindPageWithParam({ slug: "aristos" });
    HomePage.then(page => {
      res.render("../views/aristos/index", {
        title: page[0].title,
        content: page[0].content,
        keywords: page[0].keywords,
        description: page[0].description,
        author: page[0].author
      });
    });
  }, // end of home function
  changelog(req, res, next) {
    const changelogs = findSortedLogWithParams({ category: "aristos" });
    changelogs.then(logs => {
      res.render("../views/aristos/changelog", {
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
      category: "aristos"
    });
    documentation.then(docs => {
      res.render("../views/aristos/documentationMain", {
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
      category: "aristos"
    });
    documentation.then(docs => {
      res.render("../views/aristos/documentation", {
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
