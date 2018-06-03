var orm = require("../config/orm");

var userinfo = {
  all: function(table, cb) {
    orm.all("userinfo", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, cols, vals, cb) {
    orm.create("userinfo", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(table, objColVals, condition, cb) {
    orm.update("userinfo", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(table, condition, cb) {
    orm.delete("userinfo", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectWhere: function (table, cols, vals, cb) {
    orm.selectWhere("userinfo", cols, vals, function(err, rows){
      cb(err, rows)
    })
  },
  // The variables cols and vals are arrays.
  createP: function (table, cols_vals, cb) {
    orm.create("userinfo", cols_vals, function(err, rows){
      cb(err, rows)
    })
  }
};


// Export the database functions for the controller (catsController.js).
module.exports = userinfo;