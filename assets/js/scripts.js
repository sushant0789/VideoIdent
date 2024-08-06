$(document).on("click", ".next", function () {
  $(this).parents(".main-box").hide();
  $(this).parents(".main-box").next(".main-box").show();
});

$(document).on("click", ".next-pop", function () {
  $(".tel-pop-1").show();
});

$(document).on("click", ".next-pop-1", function () {
  $(this).parents(".tel-popup-bg").hide();
  $(".tel-pop-2").show();
});

$(document).on("click", ".next-pop-2", function () {
  $(this).parents(".tel-popup-bg").hide();
  $(".main-box").hide();
  $(".success").show();
});

$(".click-pop").click(function () {
  $(".popup").fadeIn(400);
});

$(".close").click(function () {
  $(".popup").fadeOut(400);
});

$(".lang-div").click(function () {
  $(".dropdown").slideToggle(200);
});

$(".english").click(function () {
  $(".lang-div img").attr("src", "assets/images/english-flag.jpg");
  $(".dropdown").slideToggle(200);
});

$(".german").click(function () {
  $(".lang-div img").attr("src", "assets/images/german-flag.jpg");
  $(".dropdown").slideToggle(200);
});
