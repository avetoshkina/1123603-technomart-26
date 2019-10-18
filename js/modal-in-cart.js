var purchaseLink = document.querySelectorAll(".purchase-btn");
var button;
var popup = document.querySelector(".modal-in-cart");
var close = popup.querySelector(".modal-close-btn");

for(var i=0; i<purchaseLink.length; i++) {
  button = purchaseLink[i];
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    console.log('Клик купить'); //вывод сообщений в консоль работает, а показ попапа нет
  });
}

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
      }
    }
});
