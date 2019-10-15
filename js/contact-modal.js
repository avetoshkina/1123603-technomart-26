var contactBtn = document.querySelector(".contacts-btn");
var contactModal = document.querySelector(".modal-feedback");
var closeContactModal = contactModal.querySelector(".modal-close-btn");
var contactForm = contactModal.querySelector(".contact-form");
var name = contactModal.querySelector("[name=name]");
var email = contactModal.querySelector("[name=email]");
var letter = contactModal.querySelector("[name=letter]");
var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

  try {
    storageName = localStorage.getItem("name");
  } catch (err) {
    isStorageSupport = false;
  }

  try {
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupport = false;
  };

// Показывает попап по клику по кнопке "Заблудились? Напишите нам!"
contactBtn.addEventListener("click", function (evt){
  evt.preventDefault();
  contactModal.classList.add("modal-show");

// проверяет наличие данных в localStorage
  if (storageName && storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
    letter.focus();
  } else if (storageName) {
    name.value = storageName;
    email.focus();
  } else if (storageEmail) {
    email.value = storageEmail;
    name.focus();
  } else {
    name.focus();
  }
});

// Закрывает попап при клике на кнопку закрытия (крестик)
closeContactModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactModal.classList.remove("modal-show");
    contactModal.classList.remove("modal-error");
  });

// проверяет на заполнение полей Имя и Email
contactForm.addEventListener("submit", function (evt) {
    if (!name.value || !email.value) {
      evt.preventDefault();
      contactModal.classList.remove("modal-error");
      contactModal.offsetWidth = contactModal.offsetWidth;
      contactModal.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
        localStorage.setItem("name", name.value);
      }
    }
  });

// Закрывает форму по клавише esc
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (contactModal.classList.contains("modal-show")) {
        contactModal.classList.remove("modal-show");
        contactModal.classList.remove("modal-error");
      }
    }
  });
