let menuBtn = document.querySelector('#menu-btn');
let searchBtn = document.querySelector('#search-btn');
let colorBtn = document.querySelector('#color-btn');
let themeBtn = document.querySelector('#theme-btn');

let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let colorsPalette = document.querySelector('.colors-palette');

// aktivasi menu nya
menuBtn.onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    colorsPalette.classList.remove('active');
}

// aktivasi search nya
searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    colorsPalette.classList.remove('active');
}
// aktivasi warna nya
colorBtn.onclick = () => {
    colorsPalette.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// ngilangin para bar saat di scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    colorsPalette.classList.remove('active');
}

// bagian gonta ganti warna kalo dipencet
document.querySelectorAll('.colors-palette .color').forEach(btn => {
    btn.onclick = () => {
        let color = btn.style.background;
        document.querySelector(':root').style.setProperty('--main-color', color);
        console.log();
    }
});


// buat ngatur/gantiganti darkmode
themeBtn.onclick = () => {
    themeBtn.classList.toggle('fa-sun');
    if (themeBtn.classList.contains('fa-sun')) {
        document.body.classList.add('active');
    } else {
        document.body.classList.remove('active');
    }
}

// include html nih
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
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
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


//   ini buat fungsi ngilangin si loading
var loader = document.querySelector(".loader")
window.addEventListener("load", vanish);

function vanish() {
    loader.classList.add("disppear");
}