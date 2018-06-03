// ===============================================================================
// Step1: LOAD DATA & Dependencies
// ===============================================================================
var path = require('path');
// Requiring our models and passport as we've configured it
var passport = require("../config/passport");
// Import the models to use each model's database functions.
var tourinfo = require("../models/tourinfo.js");
var orderinfo = require("../models/orderinfo.js");
var userinfo = require("../models/userinfo.js");
var usercc = require("../models/usercc.js");
var usertype = require("../models/usertype.js");

// ===============================================================================
// Step2: API ROUTING
// ===============================================================================

module.exports = function (app) {

// Create all our routes of POST = CREATE; GET = READ; PUT = UPDATE; DELETE = DELETE 
// First we do GET for all tables and create api routes for each
// Tour Info
app.get("/api/tourinfo", function(req, res) {
  
  tourinfo.all("tourinfo", function(data){
    // console.log("Tour Info in api-routes: ", tourinfo);
    // console.log("Tour Name in api-routes: ", tourinfo[0].tname)
    var tourObj = JSON.stringify(data);
    console.log("JSON tourObj in api-routes: ", tourObj);
    return tourObj;
    var tourinfoObj = {
      tours : data
    };
    res.render("index", tourinfoObj);
  })
});
// Order Info
app.get('/api/orderinfo', function(req, res) {

  orderinfo.all(orderinfo, function(orderinfo){
    // console.log("Order Info in api-routes: ", orderinfo);
    // console.log("Order Name in api-routes: ", orderinfo[0].ufullname)
    var orderObj = JSON.stringify(orderinfo);
    console.log("JSON orderObj in api-routes: ", orderObj);
    return orderObj;
    })
});
// User Credit Card
app.get('/api/userCC', function(req, res) {

  usercc.all(usercc, function(usercc){
    // console.log("CC Info in api-routes: ", usercc);
    // console.log("CC Type in api-routes: ", usercc[0].ucctype)
    var userCCObj = JSON.stringify(usercc);
    console.log("JSON userCCObj in api-routes: ", userCCObj);
    });
});
// User Info
app.get('/api/userinfo', function(req, res) {

  userinfo.all(userinfo, function(userinfo){
    // console.log("User Info in api-routes: ", userinfo);
    // console.log("User Name in api-routes: ", userinfo[0].ufirstname)
    var userinfoObj = JSON.stringify(userinfo);
    console.log("JSON userinfoObj in api-routes: ", userinfoObj);
    });
});
// User Type
app.get('/api/usertype', function(req, res) {

  usertype.all(usertype, function(usertype){
    // console.log("User Type in api-routes: ", usertype);
    // console.log("User Type in api-routes: ", usertype[0].uscreename)
    var usertypeObj = JSON.stringify(usertype);
    console.log("JSON usertypeObj in api-routes: ", usertypeObj);
    });
});


// Passport function
  function auth(req, res, next, authMethod) {
    passport.authenticate(authMethod, function (err, user, info) {
      if (err) {
        res.status(500)
        res.json(err)
      }
      if (!user) {
        res.status(401)
        res.json(info.message)
      }
      else {
        req.logIn(user, function (err) {
          if (err) { return next(err); }
          res.status(200)
          res.json("/members");
        });
      }
    })(req, res)
  }
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", function (req, res, next) {
    auth(req, res, next, "local-login")
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res, next) {
    auth(req, res, next, "local-signup")
  });
  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send to home page
      res.redirect("/");
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};