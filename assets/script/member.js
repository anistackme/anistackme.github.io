// SLICK CAROUSEL SETTING DISINI
$(document).ready(function(){
    $('.slide__kont').slick({        
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    });
});

function filterTextInput() {
    var input, text_filter, td0, i, divList;
    input = document.getElementById("kolomcarii");
    text_filter = input.value.toUpperCase();
    divList = $(".kont__download");
    
    for (i = 0; i < divList.length; i++) {
    td0 = divList[i].getAttribute('data-content');
    if (td0) {
        if (td0.toUpperCase().indexOf(text_filter) > -1) {
        divList[i].style.display = "";
        } else {
        divList[i].style.display = "none";
        }
    } 
    }
}

$(document).ready(function() {

    var scrollTop = $(".scrollTop");
  
    $(window).scroll(function() {
      var topPos = $(this).scrollTop();
  
      if (topPos > 300) {
        $(scrollTop).css("display", "block");
    } else {
        $(scrollTop).css("display", "none");
      }
  
    });
  
    $(scrollTop).click(function() {
      $('html, body').animate({
        scrollTop: 0
      }, 0);

      return false;
  
    });
});

$(document).ready(function(){

    $('#app1').load("pgdat1.html");
    
});
