let btnShowPass = document.querySelector('.registry__toggle-key');
let inputPass = document.querySelector('.registry__input_pas');
let inputFullName = document.querySelector('#fullName');
let btnSubmit = document.querySelector('.registry__submit');
let warningMessage = document.querySelector('.registry__label_warning');
let btnSelectMonth = document.querySelector('.registry__input_month');

btnShowPass.addEventListener('click', showPassword);
btnSubmit.addEventListener('click', checkFullName);
btnSelectMonth.addEventListener('change', selectMonth);

let reg = /^[a-zA-Z]+\s[a-zA-Z ]+$/;

function showPassword() {
    let type = inputPass.type;

    if (type === 'password') {
        inputPass.setAttribute('type', 'text'); 
    } else {
        inputPass.setAttribute('type', 'password'); 
    }
}

function checkFullName() {
    let fullName = inputFullName.value;
    let isValidName = reg.test(fullName);

    if (isValidName) {
        warningMessage.classList.add('d-none');
        inputFullName.classList.remove('registry__input_warning');
    } else {
        warningMessage.classList.remove('d-none');
        inputFullName.classList.add('registry__input_warning');
    }
}

function selectMonth() {
    btnSelectMonth.classList.add('registry__month_chenged');
}