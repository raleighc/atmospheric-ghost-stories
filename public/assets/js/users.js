$("#name-btn").on("click", function (event) {
  event.preventDefault();
});
function displaystay() {
  $("#nameForm").hide();
  $("#foyerOption1").stop().show();
  $("#foyerStayChoice").stop().show();
  $("#foyerPosRes").stop().hide();
  $("#foyerNegRes").stop().hide();
  $("#ageForm").stop().hide();
  $("#genderForm").stop().hide();
  $("#foyerAgeGender").stop().hide();
}
function displayPosFoyer() {
  $("#nameForm").hide();
  $("#foyerOption1").stop().hide();
  $("#foyerStayChoice").stop().hide();
  $("#foyerPosRes").stop().show();
  $("#foyerNegRes").stop().hide();
  $("#ageForm").stop().hide();
  $("#genderForm").stop().hide();
  $("#foyerAgeGender").stop().hide();
}
function displayNegFoyer() {
  $("#nameForm").hide();
  $("#foyerOption1").stop().hide();
  $("#foyerStayChoice").stop().hide();
  $("#foyerPosRes").stop().hide();
  $("#foyerNegRes").stop().show();
  $("#ageForm").stop().hide();
  $("#genderForm").stop().hide();
  $("#foyerAgeGender").stop().hide();
}

function displaygender() {
  $("#nameForm").hide();
  $("#foyerOption1").stop().hide();
  $("#foyerStayChoice").stop().hide();
  $("#foyerPosRes").stop().hide();
  $("#foyerNegRes").stop().hide();
  $("#ageForm").stop().show();
  $("#genderForm").stop().show();
  $("#foyerAgeGender").stop().show();
}

$("#age-btn").on("click", function (event) {
  event.preventDefault();

  // make a userAge obj
  var userAge = {
    // age from age input
    age: $("#age").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/userage", userAge)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
    });

  // empty each input box by replacing the value with an empty string
  $("#age").val("");
});

$("#gender-btn").on("click", function (event) {
  event.preventDefault();

  // make a userName obj
  var userGender = {
    // name from name input
    name: $("#name").val().trim(),
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/usegender", userGender)
    // on success, run this callback
    .then(function (data) {
      // log the data we found
      console.log(data);
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
});
function displaylast() {
  $("#nameForm").hide();
  $("#foyerOption1").stop().hide();
  $("#foyerStayChoice").stop().hide();
  $("#foyerPosRes").stop().hide();
  $("#foyerNegRes").stop().hide();
  $("#ageForm").stop().hide();
  $("#genderForm").stop().hide();
  $("#foyerAgeGender").stop().hide();
  $("#foyerRoomChoice").stop().show();
  $("#foyerLastPrompt").stop().show();
}
