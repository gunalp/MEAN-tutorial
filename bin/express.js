var express       = require('express');
var bodyParser    = require('body-parser');
var cookieParser  = require('cookie-parser');
var helmet        = require('helmet');

var app = express();

module.exports = function (callback) {
  app.use(helmet());
  app.use(cookieParser());
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(__dirname + '/../view/dest'));
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization, X-AuthToken');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if (req.method === "OPTIONS") {
      res.end();
    }
    next();
  });
    
  callback(app);
  
  app.listen(5000, function(){
    console.info("EXPRESS\t[5000]");
  });
};