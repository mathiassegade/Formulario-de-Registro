const btnSignIn = document.getElementById("sign-in"),
      btnSignUp = document.getElementById("sign-up"),
      containerFormRegistrer = document.querySelector(".register"),
      containerFormLogin = document.querySelector(".login");
      
btnSignIn.addEventListener("click", e => {
    containerFormRegistrer.classList.add("hide");
    containerFormLogin.classList.remove("hide")
})      

btnSignUp.addEventListener("click", e => {
    containerFormLogin.classList.add("hide");
    containerFormRegistrer.classList.remove("hide")
})      