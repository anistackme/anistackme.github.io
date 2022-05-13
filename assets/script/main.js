// INCLUDE HTML SETTING
function includeHTML() {
  var z, i, elmnt, file, xhttp;

  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];

    file = elmnt.getAttribute("w3-include-html");
    if (file) {

      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}

          elmnt.removeAttribute("w3-include-html");
          includeHTML();
          }
      }
      xhttp.open("GET", file, true);
      xhttp.send();

      return;
      }
  }
}

document.querySelector('.menux').addEventListener('click', () => document.querySelector('.navigasi_links').classList.toggle('show'));

// SCROLL REVEAL SETTING DISINI
  // GESER DARI BAWAH 1
  ScrollReveal().reveal('.downx1', {
    delay: 200,
    distance: '60px',
    duration: 600,
    interval: 200
  });

  // GESER DARI BAWAH 2
  ScrollReveal().reveal('.downx2', {
    delay: 300,
    distance: '30px',
    duration: 600,
    interval: 200
  });

  // GESER DARI KIRI
  ScrollReveal().reveal('.sidelx1', {
    delay: 300,
    distance: '30px',
    duration: 600,
    interval: 200,
    origin: 'left'
  });

  // GESER DARI KANAN
  ScrollReveal().reveal('.siderx1', {
    delay: 300,
    distance: '30px',
    duration: 600,
    interval: 200,
    origin: 'right'
  });
    

// SLICK CAROUSEL SETTING DISINI
$(document).ready(function(){
  $('.slider1').slick({
    slideToShow: 1,
    slideToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplayspeed: 5000,
    arrows: false,
    fade: true
  });
});
