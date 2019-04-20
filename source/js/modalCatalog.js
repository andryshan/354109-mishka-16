var linkItem1 = document.querySelector('.js-first'); // Ссылки находящиеся в catalog.html
var linkItem2 = document.querySelector('.js-second');
var linkItem3 = document.querySelector('.js-third');
var popupSize = document.querySelector('.overlay'); // Попап

linkItem1.addEventListener('click', function(evt){
  evt.preventDefault();
  popupSize.classList.add('modal--show');
});

linkItem2.addEventListener('click', function(evt){
  evt.preventDefault();
  popupSize.classList.add('modal--show');
});

linkItem3.addEventListener('click', function(evt){
  evt.preventDefault();
  popupSize.classList.add('modal--show');
});

window.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if(popupSize.classList.contains('modal--show')){
      popupSize.classList.remove('modal--show');
    }
  }
});
