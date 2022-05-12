let validmeesage = {
    account: '帳號不可為空',
    name: '名字不可為空',
    password: '密碼不可為空',
    passwordcheck: '確認密碼不可為空',
    email: '電子信箱不可為空'
};

document.querySelector('#account').addEventListener('change', function (account) {

    let value = document.querySelector('#account').value;
    CheckAccount(value);

})

document.querySelector('#email').addEventListener('change', function (account) {

    let value = document.querySelector('#email').value;
    isEmail(value);

})

$send = document.querySelector('.sendbtn').addEventListener('click', function () {
    let account = document.getElementById('account').value;
    let password = document.getElementById('password').value;
    let passwordcheck = document.getElementById('passwordcheck').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    compare(password, passwordcheck);
    var inputs = document.querySelectorAll('.form input');
    inputs.forEach(input => {
        checkvalidation(input)
    })
    var invalid = document.querySelectorAll('.invalid');

    if (invalid.length == 0) {
        document.querySelector('.load').style.display = 'block';
        document.querySelector('.loadmask').style.display = 'block';
        Register(account, password, name, email);
    }


})


function checkvalidation(input) {
    if (input.value != '') {
        input.classList.remove('invalid');
    }
    else {
        input.classList.add('invalid');
        document.getElementById(input.id + 'e').innerHTML = validmeesage[input.id];
    }
}

function compare(valuea, valueb) {
    return valuea == valueb;
}

function isEmail(strEmail) {
    var email = document.getElementById('email');
    if (strEmail.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/) != -1) {
        document.getElementById('emaile').innerHTML = '';
        email.classList.remove('invalid');
    }
    else {
        email.classList.add('invalid');
        document.getElementById('emaile').innerHTML = '電子信箱格式不正確';
    }
}