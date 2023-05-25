function setCustomsValidityForm(){
  let form = document.forms['forms-subs-events'];

  let inputEmail = form.elements['emailUser'];
  inputEmail.setCustomValidity('This field should not be empty');
  inputEmail.addEventListener('input', onInputEmail);
  
  let inputPhoneNum = form.elements['prohoneNumUser'];
  inputPhoneNum.setCustomValidity('This field should not be empty');
  inputPhoneNum.addEventListener("input",onInputPhoneNum);
  
}

function onInputEmail(event){
  let inputEmail = event.target;
  cuctomValidEmail(inputEmail)
}

function onInputPhoneNum(event){
  let inputPhoneNum = event.target;
  cuctomValidPhoneNum(inputPhoneNum);
}

function cuctomValidEmail(inputEmail){
  let emailPattern = /\S+@\S+\.\S+/;

  if(inputEmail.value != ''){
    if (!emailPattern.test(inputEmail.value)) {
      inputEmail.setCustomValidity('The email address was entered incorrectly');
    } 
    else{
      inputEmail.setCustomValidity('');
    } 
  }else{
    inputEmail.setCustomValidity('This field should not be empty');
  }
}

function cuctomValidPhoneNum(inputPhoneNum){
  let phonePattern = /^(\+375|80)(29|25|44|33)(\d{3})(\d{2})(\d{2})$/;

  if(inputPhoneNum.value != ''){
    if (!phonePattern.test(inputPhoneNum.value)) {
      inputPhoneNum.setCustomValidity('Phone number entered incorrectly');
    } 
    else{
      inputPhoneNum.setCustomValidity('');
    }
  }else{
    inputPhoneNum.setCustomValidity('This field should not be empty');
  }
}




function setEventBntOpenModalFeedback(){
  const bntOpenModelFeedback = document.getElementById('bnt-open-modal-feedback');
  bntOpenModelFeedback.addEventListener('click', onClickBntOpenModalFeedback)
}

function onClickBntOpenModalFeedback(){
  showModalFeedback();
}

function showModalFeedback(){
  setEventsOnModalFeedback();
  modalFeedback.classList.remove('modal-hidden');
}

function setEventsOnModalFeedback(){
  modalFeedback.addEventListener('click', onClickModalFeedback);
  document.addEventListener('keydown', onDownKeyEscape);
}

function onClickModalFeedback(event){
  const form = modalFeedback.querySelector('#modal-feedback__form');
  const bntCloseModal = form.elements['bntClose'];
  if(event.target === bntCloseModal || event.target === modalFeedback){
    closeModalFeedback();
  }
}

function onDownKeyEscape(event){
  if(event.key === 'Escape'){
    event.preventDefault();
    closeModalFeedback();
  }
}

function closeModalFeedback(){
  removeEventsOnFeedbackModelWindow();
  modalFeedback.classList.add('modal-hidden');
}

function removeEventsOnFeedbackModelWindow(){
  modalFeedback.removeEventListener('click', onClickModalFeedback);
  document.removeEventListener('keydown',onDownKeyEscape);
}

const modalFeedback = document.getElementById('modal-feedback');



setCustomsValidityForm();
setEventBntOpenModalFeedback();