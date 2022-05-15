// SCROLL TO TOP<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.15.1/css/all.css" />
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // kalo lewat dari 60 viewport height, nambahin show-scroll class ke tag scroll-top class
  if(this.scrollY >= 60) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);

// INI BUAT TOMBOL SIDEBAR
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
