var nav = document.getElementById("navigasi");
var navigasi = nav.getElementsByClassName("navlink");

function setActiveLink() {
  for (var i = 0; i < navigasi.length; i++) {
    navigasi[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}

setActiveLink();

document.querySelector('.menux').addEventListener('click', () => document.querySelector('.panel__utama-side').classList.toggle('show'));


document.addEventListener('DOMContentLoaded', () => {
  const announc = document.querySelector('#announcement'),
        announcClose = document.querySelector('.announcement-close'),
        clearBtn = document.querySelector('.clear'),
        isShow = localStorage.getItem('isShow');
  
  if (isShow) announc.remove();

  announcClose.addEventListener('click', () => {
    localStorage.setItem('isShow', 1);
    announc.remove();
  });
  
  clearBtn.addEventListener('click', () => localStorage.clear());
});


// PUNYA TOMBOL WHATSAPP
$(function() {
  const $txtArea = $('#msg'),
        $send = $('#sendMsg'),
        $whatsBtn = $('#whatsapp'),
        $msgArea = $('.bungkuswa'),
        $darknessw = $('.darknessw');
  
  //Toggle Message Section
  $whatsBtn.on('click', () => {
    $msgArea.fadeToggle(300);
    $darknessw.fadeToggle(300);
  });

  //Send Message
  $send.on('click', () => {
    if ($txtArea.val() !== '') {
      let msg = $txtArea.val();
      let url = `https://api.whatsapp.com/send?phone=6285881630649&text=${msg}`;

      window.open(url);
      $txtArea.val('');
    }
  });
});


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
});



// FUNCTION BUAT INCLUDE FOOTER
function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
          }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
      }
  }
}

