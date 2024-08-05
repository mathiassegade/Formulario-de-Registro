document.addEventListener("DOMContentLoaded", function () {

    let signInBtn = document.querySelector("#sign_in_button");
    let signUpBtn = document.querySelector("#sign_up_button");
    let signInForm = document.querySelector(".sign_in_box");
    let body = document.querySelector("body");

    signUpBtn.onclick = function(){
        signInForm.classList.add('form_none');
        body.classList.add('form_slide');
        if (body.classList.contains('form_slide')){
            body.style.background = '#f47136';
        }
    }

    signInBtn.onclick = function(){
        body.style.backgroundColor = "#b803f4";
        body.classList.remove('form_slide');
        signInForm.classList.remove('form_none');
    }
});