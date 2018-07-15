module.exports = app => {
  const pages = require("./routes/pages");
  const users = require("./routes/users");
  const aristos = require("./routes/aristos");
  const projects = require("./routes/projects");
  const stylux = require("./routes/stylux");

  app.use("/users", users);
  app.use("/aristos", aristos);
  app.use("/projects", projects);
  app.use("/stylux", stylux);
  app.use("/", pages);
};
