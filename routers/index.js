module.exports = function (app) {
  app.get("/",secure,controller.index.index);
};
