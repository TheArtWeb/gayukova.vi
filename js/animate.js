window.onscroll = function () {
  if (window.pageYOffset > 200) {
    const element = document.querySelector(".poloska1");
    element.classList.add("animate__animated", "animate__zoomIn");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 900) {
    const element = document.querySelector(".poloska2");
    element.classList.add("animate__animated", "animate__zoomIn");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 2200) {
    const element = document.querySelector(".poloska3");
    element.classList.add("animate__animated", "animate__zoomIn");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 2200) {
    const element = document.querySelector(".table-1");
    element.classList.add("animate__animated", "animate__fadeInLeft");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 2200) {
    const element = document.querySelector(".table-2");
    element.classList.add("animate__animated", "animate__fadeInRight");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 3200) {
    const element = document.querySelector(".poloska4");
    element.classList.add("animate__animated", "animate__zoomIn");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 3400) {
    const element = document.querySelector(".form");
    element.classList.add("animate__animated", "animate__fadeInRight");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 3400) {
    const element = document.querySelector(".connect-photo");
    element.classList.add("animate__animated", "animate__fadeInLeft");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 3500) {
    const element = document.querySelector(".submit");
    element.classList.add("animate__animated", "animate__fadeInRight");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 4100) {
    const element = document.querySelector(".poloska5");
    element.classList.add("animate__animated", "animate__fadeInLeft");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 4300) {
    const element = document.querySelector(".contacts-imgs");
    element.classList.add("animate__animated", "animate__slideInUp");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 4300) {
    const element = document.querySelector(".contacts-data");
    element.classList.add("animate__animated", "animate__fadeInRight");
    element.style.setProperty("--animate-duration", "2.5s");
  }
};

// /* animation of form */
// $(function () {
//   $(window).scroll(function () {
//     $(".offer").each(function () {
//       var imagePos = $(this).offset().top;
//         // element.style.setProperty("--animate-duration", "2.5s");
//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow + 650) {
//         $(this).addClass("fadeInLeft");
//       }
//     });
//   });

//   $(window).scroll(function () {
//     $(".connect-photo").each(function () {
//       var imagePos = $(this).offset().top;

//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow + 650) {
//         $(this).addClass("fadeInLeft");
//       }
//     });
//   });
// });

// /* animation of 2nd section */
// $(function () {
//   $(window).scroll(function () {
//     $(".form").each(function () {
//       var imagePos = $(this).offset().top;

//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow + 650) {
//         $(this).addClass("fadeInRight");
//       }
//     });
//   });

//   $(window).scroll(function () {
//     $(".section2-tittle").each(function () {
//       var imagePos = $(this).offset().top;

//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow + 650) {
//         $(this).addClass("fadeInRight");
//       }
//     });
//   });
// });

// /* animation of form */
// $(function () {
//   $(window).scroll(function () {
//     $(".tab-1").each(function () {
//       var imagePos = $(this).offset().top;

//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow + 650) {
//         $(this).addClass("fadeInLeft");
//       }
//     });
//   });

//   $(window).scroll(function () {
//     $(".tab-2").each(function () {
//       var imagePos = $(this).offset().top;

//       var topOfWindow = $(window).scrollTop();
//       if (imagePos < topOfWindow + 650) {
//         $(this).addClass("fadeInRight");
//       }
//     });
//   });
// });
