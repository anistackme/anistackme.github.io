document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

// BUAT GANTI-GANTI TITLE
var items = [
    "Animepict9",
    "Anistackme"
  ],
  $text = $(".js-replace"),
  delay = 5; //seconds
  
  function loop(delay) {
  $.each(items, function (i, elm) {
    $text.delay(delay * 1e3).fadeOut();
    $text.queue(function () {
      $text.html(items[i]);
      $text.dequeue();
    });
    $text.fadeIn();
    $text.queue(function () {
      if (i == items.length - 1) {
        loop(delay);
      }
      $text.dequeue();
    });
  });
  }
  
  loop(delay);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // kalo lewat dari 60 viewport height, nambahin show-scroll class ke tag scroll-top class
    if(this.scrollY >= 60) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
  }
window.addEventListener('scroll', scrollTop)

document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));


// BUAT GANTI-GANTI TITLE
var items = [
    "Animepict9",
    "Anistackme"
  ],
  $text = $(".js-replace"),
  delay = 5; //seconds
  
  function loop(delay) {
  $.each(items, function (i, elm) {
    $text.delay(delay * 1e3).fadeOut();
    $text.queue(function () {
      $text.html(items[i]);
      $text.dequeue();
    });
    $text.fadeIn();
    $text.queue(function () {
      if (i == items.length - 1) {
        loop(delay);
      }
      $text.dequeue();
    });
  });
  }
  
  loop(delay);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // kalo lewat dari 60 viewport height, nambahin show-scroll class ke tag scroll-top class
    if(this.scrollY >= 60) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
  }
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-toggle-right'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-toggle-left' : 'bx-toggle-right'

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})
