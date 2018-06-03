var orm = require("../config/orm.js");

var tourinfo = {
  all: function(table, cb) {
    orm.all("tourinfo", function(res) {
      // console.log("Models-->Tourinfo.js-->all Object tourinfo: ", res);
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(table, cols, vals, cb) {
    orm.create("tourinfo", cols, vals, function(res) {
      // console.log("Models-->Tourinfo.js-->create Object tourinfo: ", res);
      cb(res);
    });
  },
  update: function(table, objColVals, condition, cb) {
    orm.update("tourinfo", objColVals, condition, function(res) {
      // console.log("Models-->Tourinfo.js-->update Object tourinfo: ", res);
      cb(res);
    });
  },
  delete: function(table, condition, cb) {
    orm.delete("tourinfo", condition, function(res) {
      // console.log("Models-->Tourinfo.js-->delete Object tourinfo: ", res);
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  selectWhere: function (table, cols, vals, cb) {
    orm.selectWhere("tourinfo", cols, vals, function(err, rows){
      cb(err, rows)
    })
  },
  // The variables cols and vals are arrays.
  createP: function (table, cols_vals, cb) {
    orm.create("tourinfo", cols_vals, function(err, rows){
      cb(err, rows)
    })
  }
};


// Export the database functions for the controller (catsController.js).
module.exports = tourinfo;