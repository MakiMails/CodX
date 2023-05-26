//форма 'Sing Up'
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

//Модальное окно "Оставить отзыв"
const modalPayment = document.getElementById("modal-payment");
const modalPaymentWrap = modalPayment.querySelector(".modal__wrap");
const bntCloseModalPayment = modalPaymentWrap.querySelector(".bnt-close");
const formPayment = modalPaymentWrap.querySelector("#modal-payment__form");
const inputUserName = formPayment.elements["userName"];
const cleavePaymentPhone = new Cleave('#modal-payment-inpunt-phone', {
  phone: true,
  prefix: '+375',
  delimiter: '-',
  phoneRegionCode: 'BY',
});
const cleavePaymentCreditCard = new Cleave('#modal-payment-inpunt-credit-card', {
  creditCard: true,
  creditCardType: 'visa,mastercard',
});
const cleavePaymentdateOfBirth = new Cleave('#modal-payment-inpunt-date-birth',{
  date: true,
  delimiter: '-',
  datePattern: ['Y', 'm', 'd'],
  dateMin: '1970-01-01',
  dateMax: '2023-12-31',
});
let timer;

function removeEventsOnPaymentModelWindow() {
  modalPayment.removeEventListener("click", onClickModalPayment);
  bntCloseModalPayment.removeEventListener(
    "click",
    onClickBntCloseModalPayment
  );
  document.removeEventListener("keydown", onDownKeyEscape);
}

function clearFieldFormFeedback() {
  inputUserName.value = "";
  cleavePaymentPhone.setRawValue('');
  cleavePaymentCreditCard.setRawValue('');
  cleavePaymentdateOfBirth.setRawValue('');
}

function closeModalPayment() {
  removeEventsOnPaymentModelWindow();
  modalPayment.classList.add("modal-hidden");
  clearFieldFormFeedback();
}

function onClickModalPayment(evt) {
  if (evt.target === modalPayment) {
    closeModalPayment();
  }
}

function onClickBntCloseModalPayment(evt) {
  closeModalPayment();
}

function onDownKeyEscape(evt) {
  if (evt.key === "Escape") {
    evt.preventDefault();
    closeModalPayment();
  }
}

function setEventsOnModalPayment() {
  timer = setTimeout(() => {
    modalPayment.addEventListener("click", onClickModalPayment);
  }, 1000);
  bntCloseModalPayment.addEventListener("click", onClickBntCloseModalPayment);
  document.addEventListener("keydown", onDownKeyEscape);
}

function showModalPayment() {
  clearTimeout(timer);
  setEventsOnModalPayment();
  modalPayment.classList.remove("modal-hidden");
}

function onClickBntOpenModalPayment() {
  showModalPayment();
}

//Табы
const tape = document.querySelector(".tape");
const tapeControl = tape.querySelector(".tape__control");
const tapeBnt = tapeControl.querySelectorAll(".tape-bnt");
const tapeWarp = tape.querySelector(".tape__warp");
const tapeItems = tapeWarp.querySelectorAll(".tape-item");
let currentIndexTabe = 0;

function switchContentToTape(newIndexTabe) {
  tapeBnt[currentIndexTabe].classList.remove("tape-bnt-active");
  tapeItems[currentIndexTabe].classList.remove("tape-item-visible");

  tapeBnt[newIndexTabe].classList.add("tape-bnt-active");
  tapeItems[newIndexTabe].classList.add("tape-item-visible");

  currentIndexTabe = newIndexTabe;
}

function OnClickTapeControl(evt) {
  const newIndexTabe = evt.target.getAttribute("data-index-tabe-bnt");
  if (newIndexTabe !== null) {
    switchContentToTape(newIndexTabe);
  }
}

//swiper
const swiperSlidesPriew = new Swiper('.slides',{
  pagination:{
    el: '.swiper-pagination',
    clickable: true,
  },
  loop : true,
  autoplay : {
    delay: 5000,
    disableOnInteraction: false,
  },
});

const swiperLineImgs = new Swiper('.line-imgs',{
  pagination:{
    clickable: true,
  },
  autoplay : {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: 'auto',
  slideToClickedSlide: false,
});

//Исполняймый код
AOS.init();

//валидация формы
setCustomsValidityForm();

//модальное окно "Оставить отзыв"
const bntOpenModelPayment= document.getElementById("bnt-open-modal-payment");
bntOpenModelPayment.addEventListener("click", onClickBntOpenModalPayment);

//Табы
tapeControl.addEventListener("click", OnClickTapeControl);
