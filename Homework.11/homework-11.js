import { Modal } from "../Homework.12/modal.js";
import { Form } from "../Homework.12/form.js";

const form = document.querySelector(".footer__subscribe");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector(".footer__input").value;
  console.log({ email });
});
const modalInstance = new Modal("modal");
const formInstance = new Form("registerForm");
const footerRegBtn = document.querySelector(".footer__register-btn");
//const modal = document.querySelector(".modal");
//const closeBtn = document.querySelector(".modal-close");
//const overlay = document.querySelector(".overlay");*/
footerRegBtn.addEventListener("click", () => {
  //modal.classList.add("modal-showed");
  //overlay.classList.add("overlay-showed");
  modalInstance.open();
});
/*closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});*/
let user;
const registrForm = document.querySelector(".register-form");
registrForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const isValid = formInstance.isValid();
  if (!isValid) {
    alert("Введите соответствующие данные");
    return;
  }
  const values = formInstance.getValues();

  /*if (registrForm.checkValidity() === false) {
    alert("Введите соответствующие данные");
    return;
  }*/
  const password = document.querySelector(".password");
  const repeatPassword = document.querySelector(".repeat-password");
  //const formData = new FormData(registrForm);

  if (password.value !== repeatPassword.value) {
    alert("Пароли не совпадают");
    return;
  } // else user = Object.fromEntries(formData);
  user = values;
  user.password = btoa(user.password);
  user.repeatPassword = btoa(user.repeatPassword);
  user.createdOn = new Date();
  console.log({ user });
  modalInstance.close();
  formInstance.reset();
  //modal.classList.remove("modal-showed");
  //overlay.classList.remove("overlay-showed");
  //registrForm.reset();
});
