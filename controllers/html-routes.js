// ===============================================================================
// Step1: GET DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");
// ===============================================================================
// Step2: CUSTOM MIDDLEWARE
// Here is where we will perform any checks to re-route or re-direct the user to another page
// ===============================================================================
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = function (req, res, next){  
  if (req.user) {
    return next();
  }
  // If the user isn't logged in, redirect them to the sign-in page
  return res.redirect("/sign-in");
};
// checking if user is tour operator
var isTourOperator = function (req, res, next){  
  if (req.user) {
    return next();
  }
  // If the user isn't logged in, redirect them to the sign-in page
  return res.redirect("/sign-in");
};

// ===============================================================================
// Step3: ROUTING
// Here we create server routes for different pages when loaded
// ===============================================================================
module.exports = function(app) {
//// Home Page///////////////////////////////////////////////////////////////
	app.get("/", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/html/index.html"));
	});
//// Sign-In Page////////////////////////////////////////////////////////////
	app.get("/sign-in", function(req, res) {
    // If the user already has an account send them to the welcome page
    // if (req.user) {
    //   res.redirect("/welcome");
    // }
		res.sendFile(path.join(__dirname, "../public/html/sign-in.html"));
	});
//// Sign-Up Page/////////////////////////////////////////////////////////////
	app.get("/sign-up", function(req, res) {
    // If the user already has an account send them to the welcome page
    // if (req.user) {
    //   res.redirect("/welcome");
    // }
    res.sendFile(path.join(__dirname, "../public/html/sign-up.html"));
	});
//// Contact Page/////////////////////////////////////////////////////////////
	app.get("/contact", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/html/contact.html"));
  });
//// Business Plans Page//////////////////////////////////////////////////////
	app.get("/plans", function(req, res) {
		res.sendFile(path.join(__dirname, "../public/html/busPlans.html"));
  });
//// Tours Page//////////////////////////////////////////////////////
app.get("/tours", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/html/showTours.html"));
});
//// Check-Out Page///////////////////////////////////////////////////////////
  app.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/checkout.html"));
  });
//// Thank You Page///////////////////////////////////////////////////////////
app.get("/thank-you", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/html/thank-you.html"));
});
//// Welcome User Page////////////////////////////////////////////////////////
app.get("/welcomeUser", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/html/welcomePgUser.html"));
});
//// Welcome TourOperator Page////////////////////////////////////////////////
app.get("/welcomeTO", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/html/welcomePgTour.html"));
});

//// Welcome isAuthenticated Page/////////////////////////////////////////////
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
  // app.get("/welcome", isAuthenticated, function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/html/welcomePgUser.html"));
	// });
//////////////////////////////////////////////////////////////////////////////
};