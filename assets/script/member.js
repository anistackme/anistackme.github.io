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

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}
