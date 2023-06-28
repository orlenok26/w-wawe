let PrevBtn = document.querySelector('.swiper-button-prev');
let NextBtn = document.querySelector('.swiper-button-next');
document.addEventListener("DOMContentLoaded", function(event) {
  /*ПОЛУЧАЕТ ТЕКУЩУЮ ШИРИНУ ЭКРАНА*/
  let widthWind = document.querySelector('.w-wawe').offsetWidth;
  if (widthWind < 1270 && widthWind >1065) {
    PrevBtn.style.setProperty("display", "none");
    NextBtn.style.setProperty("display", "none");
  }
});
