var linkCatalog = document.querySelector('.catalog__basket');
var productWeekLink = document.querySelector('.top-product__order');
var popupSize = document.querySelector('.modal-size');

productWeekLink.addEventListener('click', function(evt){
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

linkCatalog.addEventListener('click', function(evt){
  evt.preventDefault();
  popupSize.classList.add('modal--show');
});
