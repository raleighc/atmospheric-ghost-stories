$("#name-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a userName obj
    var userName = {
      // name from name input
      fullName: $("#fullName").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/username", userName)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
        
      }).end();
    // empty each input box by replacing the value with an empty string
    // $("#name").val("");

  
  });
  function displayage(){
    $("#nameForm").hide();
    $("#ageForm").stop().show();
    $("#genderForm").stop().hide();
}

  $("#age-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a userAge obj
    var userAge = {
      // age from age input
      age: $("#age").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/userage", userAge)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
      });
  
    // empty each input box by replacing the value with an empty string
    $("#age").val("");

  
  });
  function displaygender(){
    $("#nameForm").hide();
    $("#ageForm").stop().hide();
    $("#genderForm").stop().show();
  };

  $("#gender-btn").on("click", function(event) {
    event.preventDefault();
  
    // make a userName obj
    var userGender = {
      // name from name input
      name: $("#name").val().trim(),
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/usegender", userGender)
      // on success, run this callback
      .then(function(data) {
        // log the data we found
        console.log(data);
      });
  
    // empty each input box by replacing the value with an empty string
    $("#name").val("");
  
  });
