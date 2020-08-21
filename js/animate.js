window.onscroll = function () {
  if (window.pageYOffset > 150) {
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

  if (window.pageYOffset > 3350) {
    const element = document.querySelector(".connect-photo");
    element.classList.add("animate__animated", "animate__fadeInLeft");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 3400) {
    const element = document.querySelector(".submit");
    element.classList.add("animate__animated", "animate__fadeInRight");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 3900) {
    const element = document.querySelector(".poloska5");
    element.classList.add("animate__animated", "animate__fadeInLeft");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 4150) {
    const element = document.querySelector(".contacts-imgs");
    element.classList.add("animate__animated", "animate__slideInUp");
    element.style.setProperty("--animate-duration", "2.5s");
  }

  if (window.pageYOffset > 4150) {
    const element = document.querySelector(".contacts-data");
    element.classList.add("animate__animated", "animate__fadeInRight");
    element.style.setProperty("--animate-duration", "2.5s");
  }
};
