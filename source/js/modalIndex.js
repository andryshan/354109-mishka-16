var button = document.querySelector('.top-product__order'); // Кнопка находящяяся в index.html
var popupSize = document.querySelector('.overlay');

button.addEventListener('click', function(evt){
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
