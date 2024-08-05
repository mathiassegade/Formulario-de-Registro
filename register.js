const formRegister = document.querySelector(".form-register");
const inputUser = document.querySelector('.form-register input[type="text"]');
const inputPass = document.querySelector('.form-register input[type="password"]');
const inputEmail = document.querySelector('.form-register input[type="email"]');
const alertaError = document.querySelector(".form-register .alerta-error");
const alertaExito = document.querySelector(".form-register .alerta-exito");

const userNameRegex = /^[a-zA-Z0-9\_\-]{4,16}$/;
const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const passwordRegex = /^.{4,12}$/;

const estadoValidacionCampos = {
  userName: false,
  userEmail: false,
  userPassword: false,
};

document.addEventListener("DOMContentLoaded", () => {
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    enviarFormulario();
  });

  inputUser.addEventListener("input", () => {
    validarCampo(userNameRegex,inputUser,"El usuario tiene que ser de 4 a 16 dígitos y solo puede contener, letras y guión bajo.");
  });

  inputEmail.addEventListener("input", () => {
    validarCampo(emailRegex,inputEmail,"El correo solo puede contener letras, números, puntos, guiones y guíon bajo.");
  });

  inputPass.addEventListener("input", () => {
    validarCampo(passwordRegex,inputPass,"La contraseña tiene que ser de 4 a 12 dígitos");
  });
});

function validarCampo(regularExpresion, campo, mensaje) {
  const validarCampo= regularExpresion.test(campo.value);}
  if (validarCampo) {
    eliminarAlerta(campo.parentElement.parentElement);
    estadoValidacionCampos[campo.name] = true;
  }