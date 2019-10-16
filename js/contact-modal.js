var contactBtn = document.querySelector(".contacts-btn");
var contactModal = document.querySelector(".modal-feedback");
var closeContactModal = contactModal.querySelector(".modal-close-btn");
var contactForm = contactModal.querySelector(".contact-form");
var contactName = contactModal.querySelector("[name=name]");
var email = contactModal.querySelector("[name=email]");
var letter = contactModal.querySelector("[name=letter]");
var isStorageSupportName = true;
var isStorageSupportEmail = true;
var storageName = "";
var storageEmail = "";

  try {
    storageName = localStorage.getItem("contactName");
  } catch (err) {
    isStorageSupportName = false;
  }

  try {
    storageEmail = localStorage.getItem("email");
  } catch (err) {
    isStorageSupportEmail = false;
  };

// Показывает попап по клику по кнопке "Заблудились? Напишите нам!" - работает
contactBtn.addEventListener("click", function (evt){
  evt.preventDefault();
  contactModal.classList.add("modal-show");

// проверяет наличие данных в localStorage - ФОКУСИРУЕТСЯ ТОЛЬКО НА ИМЕНИ ВСЕГДА
  if (storageName && storageEmail) {
    contactName.value = storageName;
    email.value = storageEmail;
    letter.focus(); //не работает
  } else {
    if (storageName) {
      contactName.value = storageName;
      email.focus(); //не работает
    } else {
      if (storageEmail) {
        email.value = storageEmail;
        contactName.focus();
      } else {
        contactName.focus(); //работает
      }
      }}
});

// Закрывает попап при клике на кнопку закрытия (крестик) - работает
closeContactModal.addEventListener("click", function (evt) {
    evt.preventDefault();
    contactModal.classList.remove("modal-show");
    contactModal.classList.remove("modal-error");
  });

// проверяет на заполнение полей Имя и Email - не работает
contactForm.addEventListener("submit", function (evt) {
    if (!contactName.value || !email.value) {
      evt.preventDefault();
      // contactModal.classList.remove("modal-error");
      // contactModal.offsetWidth = contactModal.offsetWidth;
      // contactModal.classList.add("modal-error");
      console.log('Нужно ввести данные');
    }
    // else {
    //   if (isStorageSupportName) {
    //     localStorage.setItem("contactName", contactName.value);
    //   }
    // }
  });

// Закрывает форму по клавише esc - работает
window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (contactModal.classList.contains("modal-show")) {
        contactModal.classList.remove("modal-show");
        contactModal.classList.remove("modal-error");
      }
    }
  });
