var targetElement = document.getElementById("header");
var home = document.getElementById("home");

targetElement.classList.add("scrolling_class");
function addClassOnScroll() {
  if(window.scrollY > 180){ 
    targetElement.classList.add("gone");
  } else {
    targetElement.classList.remove("gone");
  }
  home.style.transform = "translateY(" + -window.scrollY + "px)";
}
window.addEventListener("scroll", addClassOnScroll);

var home=document.getElementById("home");
var vid = document.getElementById("myVideo");
vid.oncanplaythrough = function(){
  document.getElementById("myImage").hidden=true
}

function menuBtnFunction(menuBtn) {
  menuBtn.classList.toggle("active");
  document.body.classList.toggle("open");
}

function addBodyClass(className) {
  document.body.classList.add(className);
}

function removeBodyClass(className) {
  document.body.classList.remove(className);
}


AOS.init();

// swiper slider

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
// var options = {
//     height: 1470,
//     width: 878,
//     zoomWidth: 900,
//     zoomHeight: 900,
//     zoomContainer: document.querySelector("about-right"),
//     // offset: {
//     //   vertical: 0,
//     //   horizontal: -600,
//     // },
//     // required
//     // more options here
// };
// new ImageZoom(document.getElementById("img-container"), options);
