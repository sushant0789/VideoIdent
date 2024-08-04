$(document).on("click", ".next", function () {
    $(this).parents('.main-box').hide();
    $(this).parents('.main-box').next('.main-box').show();
  });
  
    $('#agree').change(function () {
        if (this.checked) {
            $('.popup').fadeIn(400);

        } else {
            $('.popup').hide();
        }
    });

    $(".close").click(function() {
        $(".popup").fadeOut(400);
      });

    $(".lang-div").click(function() {
        $(".dropdown").slideToggle(200);
      });

      $(".english").click(function(){
        $(".lang-div img").attr("src", "../assets/images/english-flag.jpg");
        $(".dropdown").slideToggle(200);
    });

    $(".german").click(function(){
        $(".lang-div img").attr("src", "../assets/images/german-flag.jpg");
        $(".dropdown").slideToggle(200);
    });
