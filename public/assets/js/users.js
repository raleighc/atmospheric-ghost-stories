$(document).ready(function () {

  $("#newStartEnterBtn").on("click", function (event) {
    $.ajax({
			method: "DELETE",
			url: "/api/ghosts",
		});
		$.ajax({
			method: "DELETE",
			url: "/api/users",
		});
  });

  $("#name-btn").on("click", function (event) {
    event.preventDefault();

    // make a userName obj
    var userName = {
      // name from name input
      fullName: $("#fullName").val().trim(),
      identifier: 1
    };
    // console.log(userName);
    // send an AJAX POST-request with jQuery
    $.post("/api/users", userName)
      // on success, run this callback
      .then((response) => {
        $(".characterName").text(response.fullName);
        // displayAge();
        console.log(response);
        displaystay();
      });
    // empty each input box by replacing the value with an empty string
    // $("#name-btn").val("");
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

  $("#foyer-pos-btn").on("click", function (event) {
    event.preventDefault();
    displayPosFoyer();
  });

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

  $("#foyer-neg-btn").on("click", function (event) {
    event.preventDefault();
    displayNegFoyer();
  });

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

  $("#posNext-btn").on("click", function (event) {
    event.preventDefault();
    displaygender();
  });
  $("#negNext-btn").on("click", function (event) {
    event.preventDefault();
    displaygender();
  });

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
    var userUpdate = {
      // age from age input
      age: $("#age").val(),
      gender: $("#gender").val(),
    };
    console.log(userUpdate);
    $.ajax({
      method: "PUT",
      url: "/api/users",
      data: userUpdate,
    }).then(userUpdate);

    displaylast()
    
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
  $(document).foundation();
});

$(document).foundation();
