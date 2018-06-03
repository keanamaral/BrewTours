$(document).ready(function() {
  LoopTest1();
});

function LoopTest1() {
  //first clear information in showTourInfo
  $("#showTourInfo").text("");

  $.get("/api/tourinfo", function (data, status) {
    $("#showTourInfo").text(data);
    alert(status);
  });
  
};


function LoopTest() {
  //first clear information in showTourInfo
  $("#showTourInfo").text("");
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/tourinfo").then(function (data) {
    $("#showTourInfo").text(data.tours);
  });
  
  for (var i=0; i<=5 ; i++){  
     $("#showTourInfo").append('<button class="trigger">Trigger No. ' + i + '</button>');
  }
}