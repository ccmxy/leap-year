

var leapYear = function(year) {
  if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
    return true;
  }
  else {
    return false;
  }
};



$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    //different result, var name
    var result = leapYear(year);
//If year is not leapyear, insert not in not span
    $(".year").text(year);
    if (!result) {
      $(".not").text("not");
    }
    else if(result){
      $(".not").text(" ");
    }
//show div id result
    $("#result").show();
    event.preventDefault();
  });
});
