console.log('StartApp >>>');

var express = require(__dirname + "/bin/express");
var router  = require(__dirname + "/bin/router");

global.controller = require(__dirname + "/bin/controller");
express(function (app) {
  console.info("Express Module Has Been Loaded");
  router(app)
});