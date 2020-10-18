$(document).ready(function () {
  $("#gogoGhostie").on("click", function (event) {
    event.preventDefault();
    console.log("this clicked");
    $("#gogoGhostie").addClass("hide");
    $("#gogoGhostie").removeClass("show");
    // Hello USERNAME
    $("#interaction1-0").removeClass("hide");
  });
  // first response option --LVL 1-1
  $("#positiveBtn").on("click", function (event) {
    event.preventDefault();
    // Hello USERNAME
    $("#interaction1-0").addClass("hide");
    ////my name is GERTRUDE
    $("#interaction1-1").removeClass("hide");
  });
  $("#negativeBtn").on("click", function (event) {
    event.preventDefault();
    // Hello USERNAME
    $("#interaction1-0").addClass("hide");
    // Oh, calm down
    $("#interaction1-2").removeClass("hide");
  });
  // second response option
  // p=1-3
  $("#positiveBtn2").on("click", function (event) {
    event.preventDefault();
    // my name is GERTRUDE
    $("#interaction1-1").addClass("hide");
    // Oh, calm down
    $("#interaction1-2").addClass("hide");
    //I was born in ST LOUIS
    $("#interaction1-3").removeClass("hide");
  });
  $("#negativeBtn2").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    // my name is GERTRUDE
    $("#interaction1-1").addClass("hide");
    // Oh, calm down
    $("#interaction1-2").addClass("hide");
    //I was born in ST LOUIS
    $("#interaction1-4").removeClass("hide");
  });

  $("#positiveBtn3").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    //stlouis
    $("#interaction1-1").addClass("hide");
    // Oh, calm down
    $("#interaction1-2").addClass("hide");
    //This is my home.
    $("#interaction1-3").removeClass("hide");
  });
  // neg=>1-4
  $("#negativeBtn3").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    //stlouis
    $("#interaction1-1").addClass("hide");
    // Oh, calm down
    $("#interaction1-2").addClass("hide");
    //This is my home.
    $("#interaction1-4").removeClass("hide");
  });

  $("#positiveBtn4").on("click", function (event) {
    event.preventDefault();
    console.log("you clicked");
    //I was born in ST LOUIS
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").addClass("hide");
    //This is my Home
    $("#interaction1-4").addClass("hide");
    //There are other spirits like myself
    $("#interaction1-5").removeClass("hide");
    //   //show btns 6
  });
  // neg=>1-6
  $("#negativeBtn4").on("click", function (event) {
    event.preventDefault();
    console.log("you clicked");
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    //I was born in ST LOUIS
    $("#interaction1-3").addClass("hide");
    //This is my Home
    $("#interaction1-4").addClass("hide");
    //GET OUT
    $("#interaction1-6").removeClass("hide");
  });
  $("#positiveBtn5").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    // my name is GERTRUDE
    $("#interaction1-1").addClass("hide");
    // Oh, calm down
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").addClass("hide");
    $("#interaction1-4").addClass("hide");
    //I was born in ST LOUIS
    $("#interaction1-5").removeClass("hide");
  });
  // // neg=>1-6
  $("#negativeBtn5").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    //my name is GERTRUdE
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").addClass("hide");
    // Oh, calm down
    $("#interaction1-4").addClass("hide");
    //get out
    $("#interaction1-6").removeClass("hide");
  });
});
