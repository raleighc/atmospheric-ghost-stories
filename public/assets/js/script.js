$(document).ready(function () {
  //on click 'gogoGhostie', initialize interaction
  $("#gogoGhostie").on("click", function (event) {
    event.preventDefault();
    console.log("this clicked");
    $("#gogoGhostie").addClass("hide");
    $("#gogoGhostie").removeClass("show");
    $("#interaction1-0").removeClass("hide");
  });
  // first response option --LVL 1
  //if positive, show 1-1
  $("#positiveBtn").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").removeClass("hide");
  });
  //if negative, show 1-2
  $("#negativeBtn").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-2").removeClass("hide");
  });
  // LVL 2
  // if positive, show 1-3
  $("#positiveBtn2").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").removeClass("hide");
  });
  //if negative, show 1-4
  $("#negativeBtn2").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-4").removeClass("hide");
  });
  //LVL 3
  //if positive, show 1-3
  $("#positiveBtn3").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").removeClass("hide");
  });
  //if negative, show 1-4
  $("#negativeBtn3").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-4").removeClass("hide");
  });
  //LVL 4
  //if positive, show 1-5
  $("#positiveBtn4").on("click", function (event) {
    event.preventDefault();
    console.log("you clicked");
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").addClass("hide");
    $("#interaction1-4").addClass("hide");
    $("#interaction1-5").removeClass("hide");
  });
  // if neg, show 1-6
  $("#negativeBtn4").on("click", function (event) {
    event.preventDefault();
    console.log("you clicked");
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").addClass("hide");
    $("#interaction1-4").addClass("hide");
    $("#interaction1-6").removeClass("hide");
  });
  //LVL 5
  //if positive, show 1-5
  $("#positiveBtn5").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").addClass("hide");
    $("#interaction1-4").addClass("hide");
    $("#interaction1-5").removeClass("hide");
  });
  //if negative, show 1-6
  $("#negativeBtn5").on("click", function (event) {
    event.preventDefault();
    $("#interaction1-0").addClass("hide");
    $("#interaction1-1").addClass("hide");
    $("#interaction1-2").addClass("hide");
    $("#interaction1-3").addClass("hide");
    $("#interaction1-4").addClass("hide");
    $("#interaction1-6").removeClass("hide");
  });
});
