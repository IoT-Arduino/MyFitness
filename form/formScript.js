document.getElementById('name').addEventListener('blur',validateName);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('select').addEventListener('blur',validateSelect);
document.getElementById('textArea').addEventListener('blur',validateTextArea);

function validateName(){
    const name = document.getElementById('name');
    const nameError = document.getElementById('nameError')
    const re = /^\D{2,15}$/

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
    const textAreaChars = textArea.value.length

    if(textAreaChars <= 0 || textAreaChars>201){
        textError.classList.add('is-invalid');
        textError.classList.remove('dsNone');
    } else {
        textError.classList.add('dsNone');
        textError.classList.remove('is-invalid');
    }
}


// confirmation ================

// element select
const Cnt = document.getElementById('ContactInput')
const Cfm = document.getElementById('ContactConfirm')

const BtCfm = document.getElementById('BtConfirm')
const BtReset = document.getElementById('BtReset')
const BtSnd = document.getElementById('BtSend')
const BtCsl = document.getElementById('BtCancel')

const nameCfm = document.getElementById('nameCfm')
const emailCfm = document.getElementById('emailCfm')
const phoneCfm = document.getElementById('phoneCfm')
const memberCfm = document.getElementById('memberCfm')
const methodCfm = document.getElementById('methodCfm')

const subjectCfm = document.getElementById('subjectCfm')
const messageCfm = document.getElementById('messageCfm')


// リセットボタン
BtReset.addEventListener('click',function(){
    document.form.reset()
})

/* 確認ボタン*/
BtCfm.addEventListener('click',function(){
    Cnt.style.display = "none";
    Cfm.style.display = "block";
    confirmInput()
})

// キャンセルボタン 
BtCsl.addEventListener('click',function(){
    Cnt.style.display = "block";
    Cfm.style.display = "none";
})





//　確認ボタン実行時関数 ===================

const confirmInput = () => {
    const yourName = document.getElementById('name').value
    const yourEmail = document.getElementById('email').value
    const yourPhone = document.getElementById('tel').value
    const select = document.getElementById('select').value
    const textArea = document.getElementById('textArea').value

    nameCfm.textContent = yourName
    emailCfm.textContent = yourEmail
    phoneCfm.textContent = yourPhone
    selectCfm.textContent = select
    textAreaCfm.textContent = textArea

    // radio button
    const memberShip = document.form.membership
    let memberType = ''

	for (let i = 0; i < memberShip.length; i++){
		if(memberShip[i].checked){ 
			memberType = memberShip[i].value;
			break;
		}
    }
    
    memberCfm.textContent = memberType

    // check box
    const methodPrefer = document.querySelectorAll('input[type="checkbox"]')
    let methodType = []

    for (let i = 0; i < methodPrefer.length; i++){
        if(methodPrefer[i].checked){ 
            methodType.push(methodPrefer[i].value);
        }
    }

    methodCfm.textContent = methodType.join(',')
       

}
