gsap.registerPlugin(ScrollTrigger);

var targetElement = document.getElementById("header");
var home = document.getElementById("home");
var bannerImg = document.getElementById("myImage");

targetElement.classList.add("scrolling_class");
function addClassOnScroll() {
  if(window.scrollY > 180){ 
    targetElement.classList.add("gone");
  } else {
    targetElement.classList.remove("gone");
  }
  home.style.transform = "translateY(" + -window.scrollY*0.75 + "px)";
  if(window.scrollY==0){
    vid.play();
    vid.oncanplaythrough = function(){
      bannerImg.hidden=true;
    }
  }
}
window.addEventListener("scroll", addClassOnScroll);

var home=document.getElementById("home");
var vid = document.getElementById("myVideo");
// vid.oncanplaythrough = function(){
//   document.getElementById("myImage").hidden=true;
//   vid.play();
// }

vid.addEventListener('loadeddata', (e) => {
  if(vid.readyState >= 3){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    bannerImg.hidden = true;
    vid.play();
  }
});


// if(window.scrollY<10){
//   vid.play();
//   vid.oncanplaythrough = function(){
//     bannerImg.hidden=true;
//   }
// }

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

// gsap.to("#myImage", {
//   scale: 1.5,
//   // y:-470,
//   duration: 1,
//   scrollTrigger: {
//     trigger: ".banner-section",
//     start: "top bottom",
//     end: "50% bottom",
//     toggleAction: "replay",
//     markers: true,
//   }
// })

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
