document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("#header");
  const overlay = document.querySelector("#overlay");
  const myVideo = document.querySelector("#myVideo");
  const myImage = document.querySelector("#myImage");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.remove("notgone");
      header.classList.add("gone");
    } else {
      header.classList.remove("gone");
      header.classList.add("notgone");
    }
  });

  if (myVideo) {
    myVideo.addEventListener("loadeddata", () => {
      if (myVideo.readyState >= 3) {
        myImage.style.display = "none";
        myVideo.play();
        myVideo.style.display = "block";
      }
    });

    myVideo.addEventListener("timeupdate", () => {
      if (myVideo.currentTime > 0) {
        overlay.style.opacity = "0";
        myVideo.style.opacity = "1";
      }
    });

    myVideo.addEventListener("ended", () => {
      overlay.style.opacity = "1";
      myVideo.style.opacity = "0";
      myImage.style.display = "block";
    });
  }

  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  AOS.init();

  const menuBtn = document.querySelector(".menu-btn-3");
  const mobileMenu = document.querySelector(".mobile-ul");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});
