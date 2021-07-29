const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


$(window).scroll(function() {
  if ($(this).scrollTop() > 250) {
    $('.illustrations').slideDown(1200);
  }
  else {
    $('.illustrations').slideUp(1200);
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 380) {
    $('.aboutme').slideDown(1200);
  }
  else {
    $('.aboutme').slideUp(1200);
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 510) {
    $('.projects').slideDown(1200);
  }
  else {
    $('.projects').slideUp(1000);
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 640) {
    $('.animations').slideDown(1200);
  }
  else {
    $('.animations').slideUp(1200);
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 850) {
    $('.cv').slideDown(1000);
  }
  else {
    $('.cv').slideUp(1000);
  }
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 1000) {
    $('.other').slideDown(1200);
  }
  else {
    $('.other').slideUp(1200);
  }
});
