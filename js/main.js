//форма "Sing Up"
function setCustomsValidityForm() {
  let form = document.forms["forms-subs-events"];

  let inputEmail = form.elements["emailUser"];
  inputEmail.setCustomValidity("This field should not be empty");
  inputEmail.addEventListener("input", onInputEmail);

  let inputPhoneNum = form.elements["prohoneNumUser"];
  inputPhoneNum.setCustomValidity("This field should not be empty");
  inputPhoneNum.addEventListener("input", onInputPhoneNum);
}

function onInputEmail(event) {
  let inputEmail = event.target;
  cuctomValidEmail(inputEmail);
}

function onInputPhoneNum(event) {
  let inputPhoneNum = event.target;
  cuctomValidPhoneNum(inputPhoneNum);
}

function cuctomValidEmail(inputEmail) {
  let emailPattern = /\S+@\S+\.\S+/;

  if (inputEmail.value !== "") {
    if (!emailPattern.test(inputEmail.value)) {
      inputEmail.setCustomValidity("The email address was entered incorrectly");
    } else {
      inputEmail.setCustomValidity("");
    }
  } else {
    inputEmail.setCustomValidity("This field should not be empty");
  }
}

function cuctomValidPhoneNum(inputPhoneNum) {
  let phonePattern = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

  if (inputPhoneNum.value !== "") {
    if (!phonePattern.test(inputPhoneNum.value)) {
      inputPhoneNum.setCustomValidity("Phone number entered incorrectly");
    } else {
      inputPhoneNum.setCustomValidity("");
    }
  } else {
    inputPhoneNum.setCustomValidity("This field should not be empty");
  }
}


//Модальное окно "Отзывы"
const modalFeedback = document.getElementById("modal-feedback");
const modalFeedbackWrap = modalFeedback.querySelector(".modal__wrap");
const bntCloseModalFeedback = modalFeedbackWrap.querySelector(".bnt-close");
const formFeedback = modalFeedbackWrap.querySelector("#modal-feedback__form");
const inputUserName = formFeedback.elements["userName"];
const textareaFeedbackText = formFeedback.elements["feedbackText"];

function removeEventsOnFeedbackModelWindow() {
  modalFeedback.removeEventListener("click", onClickModalFeedback);
  bntCloseModalFeedback.removeEventListener(
    "click",
    onClickBntCloseModalFeedback
  );
  document.removeEventListener("keydown", onDownKeyEscape);
}

function clearFieldFormFeedback() {
  inputUserName.value = "";
  textareaFeedbackText.value = "";
}

function closeModalFeedback() {
  removeEventsOnFeedbackModelWindow();
  modalFeedback.classList.add("modal-hidden");
  clearFieldFormFeedback();
}

function onClickModalFeedback(evt) {
  if (evt.target === modalFeedback) {
    closeModalFeedback();
  }
}

function onClickBntCloseModalFeedback(evt) {
  closeModalFeedback();
}

function onDownKeyEscape(evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeModalFeedback();
  }
}

function setEventsOnModalFeedback() {
  setTimeout(() => {
    modalFeedback.addEventListener("click", onClickModalFeedback);
  }, 1000);
  bntCloseModalFeedback.addEventListener("click", onClickBntCloseModalFeedback);
  document.addEventListener("keydown", onDownKeyEscape);
}

function showModalFeedback() {
  setEventsOnModalFeedback();
  modalFeedback.classList.remove("modal-hidden");
}

function onClickBntOpenModalFeedback() {
  showModalFeedback();
}


//Табы



//Исполняймый код
setCustomsValidityForm();

const bntOpenModelFeedback = document.getElementById("bnt-open-modal-feedback");
bntOpenModelFeedback.addEventListener("click", onClickBntOpenModalFeedback);




