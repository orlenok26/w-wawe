const btnHeaderPlay1 = document.querySelector ('.btn-efir__btn1'); //кнопка play1 header
const btnHeaderPlay2 = document.querySelector ('.btn-efir__btn2'); //кнопка play2 header

const btnPodcastPlay = document.querySelectorAll('.podcast__btn-play'); //кнопки play podcast

//header
//включаем кнопку stop
btnHeaderPlay1.addEventListener('click', () => {
  btnHeaderPlay1.classList.toggle('btn-efir__btn1-stop');
  btnHeaderPlay1.classList.toggle('btn-efir__btn1');
});

btnHeaderPlay2.addEventListener('click', () => {
  btnHeaderPlay2.classList.toggle('btn-efir__btn2-stop');
  btnHeaderPlay2.classList.toggle('btn-efir__btn2');
});

//podcast

btnPodcastPlay.forEach((elem)=>{
  elem.addEventListener('click',()=>{
      elem.classList.toggle('podcast__btn-stop_active');
      elem.classList.toggle('podcast__btn-play');
  })
})





