const form = document.querySelector(".footer__subscribe");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector(".footer__input").value;
  console.log({ email });
});
const footerRegBtn = document.querySelector(".footer__register-btn");
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal-close");
const overlay = document.querySelector(".overlay");
footerRegBtn.addEventListener("click", () => {
  modal.classList.add("modal-showed");
  overlay.classList.add("overlay-showed");
});
closeBtn.addEventListener("click", () => {
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
});
let user;
const registrForm = document.querySelector(".register-form");
registrForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (registrForm.checkValidity() === false) {
    alert("Введите соответствующие данные");
    return;
  }
  const password = document.querySelector(".password");
  const repeatPassword = document.querySelector(".repeat-password");
  const formData = new FormData(registrForm);
  if (password.value !== repeatPassword.value) {
    alert("Пароли не совпадают");
    return;
  } else user = Object.fromEntries(formData);
  user.password = btoa(user.password);
  user.repeatPassword = btoa(user.repeatPassword);
  user.createdOn = new Date();
  console.log({ user });
  modal.classList.remove("modal-showed");
  overlay.classList.remove("overlay-showed");
  registrForm.reset();
});
