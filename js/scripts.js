//business logic

//return false for a year that is not a leap year
var leapYear = function(year) {
    return false;
};

//return true for a year that is divisible by 4
var leapYear = function(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

//return false for a year that is divisible by 100

var leapYear = function(year) {
  if (year % 100 === 0) {
    return false;
  } else {
    return true;
  }
};

/*//return false for a year that is divisible by 100
var leapYear = function(year) {
  if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}; */

//front-end logic
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("input#year").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});
