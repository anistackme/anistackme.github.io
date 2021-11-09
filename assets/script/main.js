/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // verif kalo ada si variabel
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // nambahin show-menu class ke div tag dengan nav_menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // ketika di klik, ngehilangin si menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))





/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
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





// /*==================== SCROLL REVEAL ANIMATION ====================*/
// const sr = ScrollReveal({
//     distance: '30px',
//     duration: 1800,
//     reset: true,
// });

// sr.reveal(`.home_data, .home_img, 
//            .pricing_data,
//            .accessory_content,
//            .footer_content`, {
//     origin: 'top',
//     interval: 200,
// })

// sr.reveal(`.about_img, .event_content`, {
//     origin: 'left'
// })

// sr.reveal(`.about_data, .event_img`, {
//     origin: 'right'
// })


var items = [
    "ANIMEPICT9",
    "ANISTACKME"
  ],
  $text = $(".js-replace"),
  delay = 15; //seconds

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

