// GET page model
const FindPageWithParam = require("../../../important/admin/adminModels/queries/page/FindPageWithParam");
const createPage = require("../../../important/admin/adminModels/queries/page/CreatePage");
// GET media queries
const FindAllMedia = require("../../../important/admin/adminModels/queries/media/FindAllMedia");
const findMediaWithParam = require("../../../important/admin/adminModels/queries/media/FindAllMediaWithParam");
//GET project categories
const FindAllPortfolioCategories = require("../../../expansion/upgrade/portfolio-projects/models/queries/projectCategory/FindAllProjectCategories");
const FindPortfolioCategoryWithParams = require("../../../expansion/upgrade/portfolio-projects/models/queries/projectCategory/FindProjectCategoryWithParams");
//GET portfolio projects
const FindProjectWithParams = require("../../../expansion/upgrade/portfolio-projects/models/queries/project/FindProjectWithParams");
const FindMostRecentProject = require("../../../expansion/upgrade/portfolio-projects/models/queries/project/FindMostRecentProjectSorted");
const FindSortedProjects = require("../../../expansion/upgrade/portfolio-projects/models/queries/project/FindAllSortedProjects");
const FindSortedProjectsWithParams = require("../../../expansion/upgrade/portfolio-projects/models/queries/project/FindSortedProjectsWithParams");

module.exports = {
  home(req, res, next) {
    const homePage = FindPageWithParam({ slug: "home" });
    const allMedia = FindAllMedia();
    Promise.all([homePage, allMedia]).then(result => {
      res.render("../views/index", {
        title: result[0][0].title,
        content: result[0][0].content,
        keywords: result[0][0].keywords,
        description: result[0][0].description,
        author: result[0][0].author,
        media: result[1]
      });
    });
  }, // end of home function

  anyPage(req, res, next) {
    let slug = req.params.slug;
    const AnyPage = FindPageWithParam({ slug: slug });
    const allMedia = FindAllMedia();
    Promise.all([AnyPage, allMedia]).then(result => {
      if (result[0].length < 1) {
        res.redirect("/");
      } else {
        res.render("index", {
          title: result[0][0].title,
          content: result[0][0].content,
          keywords: result[0][0].keywords,
          description: result[0][0].description,
          author: result[0][0].author,
          media: result[1]
        });
      }
    });
  }, // end of any page function
  about(req, res, next) {
    const homePage = FindPageWithParam({ slug: "about" });
    const slider = findMediaWithParam({ category: "main_slider" });
    const teamMedia = findMediaWithParam({ category: "team" });
    Promise.all([homePage, slider, teamMedia]).then(result => {
      res.render("../views/about", {
        title: result[0][0].title,
        content: result[0][0].content,
        keywords: result[0][0].keywords,
        description: result[0][0].description,
        author: result[0][0].author,
        media: result[1],
        team: result[2]
      });
    });
  }, // end of home function
  project(req, res) {
    const AllMedia = FindAllMedia();
    const AllPortfolioCategories = FindAllPortfolioCategories();
    const sortedProjects = FindSortedProjects();
    const foundPage = FindPageWithParam({ slug: "portfolio" });
    Promise.all([
      AllMedia,
      AllPortfolioCategories,
      sortedProjects,
      foundPage
    ]).then(result => {
      res.render("projects/allProjects", {
        title: result[3].title,
        keywords: result[3].keywords,
        description: result[3].description,
        author: result[3].author,
        media: result[0],
        portfolioCats: result[1],
        projects: result[2]
      });
    });
  },
  projectCategory(req, res, next) {
    const slug = req.params.category;
    const AllPortfolioCategories = FindAllPortfolioCategories();
    const foundCategories = FindPortfolioCategoryWithParams({ slug: slug });
    const foundProjects = FindSortedProjectsWithParams({ category: slug });
    const AllMedia = FindAllMedia();
    Promise.all([
      AllPortfolioCategories,
      foundCategories,
      foundProjects,
      AllMedia
    ]).then(result => {
      res.render("projects/project_cats", {
        title: result[1][0].title,
        keywords: result[1][0].keywords,
        description: result[1][0].description,
        author: result[1][0].author,
        media: result[3],
        portfolioCats: result[0],
        projects: result[2]
      });
    });
  },

  singleProject(req, res, next) {
    const slug = req.params.category;
    const project = req.params.project;
    const AllPortfolioCategories = FindAllPortfolioCategories();
    const foundProject = FindProjectWithParams({ _id: project });
    const AllMedia = FindAllMedia();
    Promise.all([AllPortfolioCategories, foundProject, AllMedia]).then(
      result => {
        res.render("projects/singleProject", {
          title: result[1][0].title,
          keywords: result[1][0].keywords,
          description: result[1][0].description,
          content: result[1][0].content,
          author: result[1][0].author,
          media: result[2],
          portfolioCats: result[0],
          project: result[1][0]
        });
      }
    );
  }
};
