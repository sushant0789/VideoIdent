$(document).on("click", ".next", function () {
    $(this).parents('.main-box').hide();
    $(this).parents('.main-box').next('.main-box').show();
  });