/* GET page model */
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");

/* changelog stuffs */
const findSortedLogWithParams = require("../../../expansion/upgrade/documentation-builder/models/queries/changelog/FindSortedLogsWithParams");

/* documentation stuffs */
const findSortedDocumentationWithParams = require("../../../expansion/upgrade/documentation-builder/models/queries/documentation/FindSortedDocumentationWithParams");

/* documentation category stuffs */
const findDocumentationCategoryWithParam = require("../../../expansion/upgrade/documentation-builder/models/queries/documentationCategories/FindDocumentationWithParamsCategories");

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
    findDocumentationCategoryWithParam({ title: "Aristos" }).then(cat => {
      const changelogs = findSortedLogWithParams({ category: cat[0]._id });
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
    });
  }, // end of changelog function
  documentationMain(req, res, next) {
    findDocumentationCategoryWithParam({ title: "Aristos" }).then(cat => {
      const documentation = findSortedDocumentationWithParams({
        category: cat[0]._id
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
    });
  }, // end of changelog function
  documentationItem(req, res, next) {
    findDocumentationCategoryWithParam({ title: "Aristos" }).then(cat => {
      const docItem = findSortedDocumentationWithParams({
        _id: req.params.id,
        category: cat[0]._id
      });
      const documentation = findSortedDocumentationWithParams({
        category: cat[0]._id
      });
      Promise.all([docItem, documentation]).then(result => {
        res.render("../views/aristos/documentation", {
          title: "Documentation",
          content: result[0][0].content,
          keywords: result[0][0].keywords,
          description: result[0][0].description,
          author: result[0][0].author,
          documentationItem: result[0],
          documentation: result[1]
        });
      });
    });
  } /* end of documentation item function */
};
