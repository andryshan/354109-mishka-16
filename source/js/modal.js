if(window.NodeList && !NodeList.prototype.forEach){
  NodeList.prototype.forEach = function(callback, thisArg){
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++){
      callback.call(thisArg, this[i], i, this);
    }
  };
}

var modals = document.querySelectorAll('.js-modal');
var popupSize = document.querySelector('.modal');

function modalOpen(modal) {
  modal.addEventListener('click', function(evt){
    evt.preventDefault();
    popupSize.classList.add('modal--show');
  });
}

modals.forEach(function(modal){
  modalOpen(modal);
});

window.addEventListener('keydown', function(evt){
  if(evt.keyCode === 27) {
    evt.preventDefault();
    if(popupSize.classList.contains('modal--show')){
      popupSize.classList.remove('modal--show');
    }
  }
});
