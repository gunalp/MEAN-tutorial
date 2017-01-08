var secure = function (req, res, next) {
  var token = req.cookies.token;
  next()
  
};

global.secure = secure;

module.exports = {
  secure: secure
};