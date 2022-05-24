// SLICK CAROUSEL SETTING DISINI
$(document).ready(function(){
    $('.slide__kont').slick({        
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        pauseOnFocus: true,
        autoplay: false,
        autoplaySpeed: 5000,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }
        ]
    });
});

function filterTextInput() {
    var input, radios, radio_filter, text_filter, td0, i, divList;
    input = document.getElementById("kolomcarii");
    text_filter = input.value.toUpperCase();
    divList = $(".kont__download");
    
// Loop through all table rows, and hide those who don't match the search query
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
