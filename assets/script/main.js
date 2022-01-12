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

