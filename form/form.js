document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('select').addEventListener('blur',validateSelect);
document.getElementById('textArea').addEventListener('blur',validateTextArea);

function validateName(){
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError')
    const re = /^[a-zA-Z]{2,15}$/;

    if(!re.test(name.value)){
        nameError.classList.add('is-invalid');
        nameError.classList.remove('dsNone');
    } else {
        nameError.classList.add('dsNone');
        nameError.classList.remove('is-invalid');
    }

}

function validateEmail(){
    const email = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})(\.[a-zA-Z]{2,5})?$/;

    if(!re.test(email.value)){
        emailError.classList.add('is-invalid');
        emailError.classList.remove('dsNone');
    } else {
        emailError.classList.add('dsNone');
        emailError.classList.remove('is-invalid');
    }
}

function validateSelect(){
    const select = document.getElementById('select');
    const selectError = document.getElementById('selectError');
    const re = /./;

    if(!re.test(select.value)){
        selectError.classList.add('is-invalid');
        selectError.classList.remove('dsNone');
    } else {
        selectError.classList.add('dsNone');
        selectError.classList.remove('is-invalid');
    }

}


function validateTextArea(){
    const textArea = document.getElementById('textArea');
    const textError = document.getElementById('textError');
    const re = /./;

    if(!re.test(textArea.value)){
        textError.classList.add('is-invalid');
        textError.classList.remove('dsNone');
    } else {
        textError.classList.add('dsNone');
        textError.classList.remove('is-invalid');
    }
}

