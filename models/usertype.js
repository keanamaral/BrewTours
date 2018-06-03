var orm = require("../config/orm");

var usertype = {
  all: function(table, cb) {
    orm.all("usertype", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, cols, vals, cb) {
    orm.create("usertype", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(table, objColVals, condition, cb) {
    orm.update("usertype", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(table, condition, cb) {
    orm.delete("usertype", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectWhere: function (table, cols, vals, cb) {
    orm.selectWhere("usertype", cols, vals, function(err, rows){
      cb(err, rows)
    })
  },
  // The variables cols and vals are arrays.
  createP: function (table, cols_vals, cb) {
    orm.create("usertype", cols_vals, function(err, rows){
      cb(err, rows)
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = usertype;