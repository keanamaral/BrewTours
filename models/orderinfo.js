var orm = require("../config/orm");

var orderinfo = {
  all: function(table, cb) {
    orm.all("orderinfo", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, cols, vals, cb) {
    orm.create("orderinfo", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(table, objColVals, condition, cb) {
    orm.update("orderinfo", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(table, condition, cb) {
    orm.delete("orderinfo", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectWhere: function (table, cols, vals, cb) {
    orm.selectWhere("orderinfo", cols, vals, function(err, rows){
      cb(err, rows)
    })
  },
  // The variables cols and vals are arrays.
  createP: function (table, cols_vals, cb) {
    orm.create("orderinfo", cols_vals, function(err, rows){
      cb(err, rows)
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = orderinfo;