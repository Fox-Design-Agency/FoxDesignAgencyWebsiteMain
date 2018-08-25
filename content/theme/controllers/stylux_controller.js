// GET page model
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");

// changelog stuffs
const findSortedLogWithParams = require("../../../expansion/upgrade/documentation-builder/models/queries/changelog/FindSortedLogsWithParams");
// documentation stuffs
const findSortedDocumentationWithParams = require("../../../expansion/upgrade/documentation-builder/models/queries/documentation/FindSortedDocumentationWithParams");

/* documentation category stuffs */
const findDocumentationCategoryWithParam = require("../../../expansion/upgrade/documentation-builder/models/queries/documentationCategories/FindDocumentationWithParamsCategories");

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
    findDocumentationCategoryWithParam({ title: "Stylux" }).then(cat => {
      const changelogs = findSortedLogWithParams({ category: cat[0]._id });
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
    });
  }, // end of changelog function

  documentationMain(req, res, next) {
    findDocumentationCategoryWithParam({ title: "Stylux" }).then(cat => {
      const documentation = findSortedDocumentationWithParams({
        category: cat[0]._id
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
    });
  }, // end of changelog function
  documentationItem(req, res, next) {
    findDocumentationCategoryWithParam({ title: "Stylux" }).then(cat => {
      const documentation = findSortedDocumentationWithParams({
        _id: req.params.id,
        category: cat[0]._id
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
    });
  } // end of changelog function
};
