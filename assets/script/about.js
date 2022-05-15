window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).parentElement.classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});

});

// INI BUAT TOMBOL SIDEBAR
document.querySelector('.menux3').addEventListener('click', () => 
    document.querySelector('.navigasi_links').classList.remove('show'));
    
document.querySelector('.menux3').addEventListener('click', () => 
    document.querySelector('.section-nav').classList.toggle('showed'));
    
document.querySelector('.menux').addEventListener('click', () => 
    document.querySelector('.section-nav').classList.remove('showed'));

// SLICK CAROUSEL SETTING DISINI
$(document).ready(function(){
    $('.slider-konten').slick({
      slideToShow: 1,
      slideToScroll: 1,
      infinite: false,
      arrows: true,
      dots: false
    });
  });
