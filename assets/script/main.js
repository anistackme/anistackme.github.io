$(document).ready(function(){

  $('#footer').load("../../assets/components/footer.htm");
  
});

document.addEventListener('DOMContentLoaded', () => {
  const announc = document.querySelector('#announcement'),
          announcClose = document.querySelector('.closedex'),
          clearBtn = document.querySelector('.clear'),
          isShow = localStorage.getItem('isShow');

if (isShow) announc.remove();

announcClose.addEventListener('click', () => {
  localStorage.setItem('isShow', 1);
  announc.remove();
});

  clearBtn.addEventListener('click', () => localStorage.clear());
});

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



// =====================
