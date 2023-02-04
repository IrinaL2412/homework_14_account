window.onload = function () {
    let fullName = document.getElementsByTagName('input')[0];
    let username = document.getElementsByTagName('input')[1];
    let email = document.getElementsByTagName('input')[2];
    let password = document.getElementsByTagName('input')[3];
    let checkbox = document.getElementsByClassName('agree')[0].firstElementChild.firstElementChild;
    let signUp = document.getElementsByClassName('action')[0].children[0];
    let popup = document.getElementById('popup');
    let ok = document.getElementsByTagName('button')[1];
    let form = document.getElementsByClassName('form')[0];
    let fields = document.getElementsByTagName('input');
    let title = document.getElementsByTagName('h1')[0];
    let link = document.getElementsByClassName('link')[0].children[0];
    let client;
    let clients = localStorage.getItem('clients');


    function fullNameValidation () {
        if (!fullName.value.match(/^\s*[a-z]{2,}\s+[a-z]{2,}\s*$/ig)) {
            fullName.style.border = '1px solid #DD3142';
            fullName.nextElementSibling.style.visibility = 'visible';
            return false;
        } else {
            fullName.nextElementSibling.style.visibility = 'hidden';
            fullName.style.border = '';
            return true;
        }
    }

    function userNameValidation () {
        if (!username.value.match(/^\s*[a-z0-9_-]{3,15}\s*$/ig)) {
            username.style.border = '1px solid #DD3142';
            username.nextElementSibling.style.visibility = 'visible';
            return false;
        } else {
            username.nextElementSibling.style.visibility = 'hidden';
            username.style.border = '';
            return true;
        }
    }

    function emailValidation () {
        if (!email.value.match(/^\s*\w{3,}@[a-z]+\.[a-z]{2,6}\s*$/ig)) {
            email.style.border = '1px solid #DD3142';
            email.nextElementSibling.style.visibility = 'visible';
            return false;
        } else {
            email.nextElementSibling.style.visibility = 'hidden';
            email.style.border = '';
            return true;
        }
    }

   function passwordValidation () {
        if (!password.value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}/ig)) {
            password.style.border = '1px solid #DD3142';
            password.nextElementSibling.style.visibility = 'visible';
            return false;
        } else {
            password.nextElementSibling.style.visibility = 'hidden';
            password.style.border = '';
            return true;
        }
    }

    function checkPasswordMatch () {
        if (passwordValidation() === true && fields[4].value === fields[3].value) {
            fields[4].nextElementSibling.style.visibility = 'hidden';
            fields[4].style.border = '';
            return true;
        } else {
            fields[4].style.border = '1px solid #DD3142';
            fields[4].nextElementSibling.style.visibility = 'visible';
            return false;
        }
    }

    function checkboxValidation () {
        if (checkbox.checked) {
            checkbox.parentElement.nextElementSibling.style.visibility = 'hidden';
            return true;
        } else {
            checkbox.parentElement.nextElementSibling.style.visibility = 'visible';
            return false;
        }
    }

    function checkFieldsPresence () {
        for (let i = 0; i < fields.length - 1; i++) {
            if (!fields[i].value.trim().length) {
                fields[i].style.border = '1px solid #DD3142';
                fields[i].nextElementSibling.style.visibility = 'visible';
            }
        }
        fullNameValidation();
        userNameValidation();
        emailValidation();
        passwordValidation();
        checkPasswordMatch();
        checkboxValidation();
        return true;
    };

    function isValidForm () {
        return (checkFieldsPresence() &&
            fullNameValidation() &&
            userNameValidation() &&
            emailValidation() &&
            passwordValidation() &&
            checkPasswordMatch() &&
            checkboxValidation());
    };

    function createArray () {

        if (clients) {
            clients = JSON.parse(clients);
        } else {
            clients = [];
        }
        clients.push(client);
        localStorage.setItem('clients', JSON.stringify(clients));
    }


    form.onsubmit = (event) => {
        event.preventDefault();
        if (isValidForm()) {
            client = {
                full_Name: fullName.value,
                username: username.value,
                email: email.value,
                password: password.value,
            }
            createArray();
            popup.style.display = "flex";
        }
    };

    ok.addEventListener('click', createAccount);
    link.addEventListener('click', createAccount);


    function backToRegistration() {
        location.reload();
    }

    function createAccount() {
        link.addEventListener('click', backToRegistration);

        popup.style.display = "none";

        for (let i = 0; i < fields.length; i++) {
            fields[i].value = null;
            fields[i].style.border = '';
            fields[i].nextElementSibling.style.visibility = 'hidden';
        }

        title.innerText = "Log in to the system";
        fullName.parentElement.remove();
        email.parentElement.remove();
        password.parentElement.nextElementSibling.remove();
        checkbox.parentElement.parentElement.remove();
        signUp.innerText = "Sign In";
        link.innerText = 'Registration';

        form.onsubmit = (event) => {
            event.preventDefault();
            userNameValidation();
            passwordValidation();

            if (username.value && password.value) {
                localStorage.getItem('username');
                let clientsArray = JSON.parse(localStorage.getItem('clients'));
                for (let i = 0; i < clientsArray.length; i++) {
                    if (username.value === clientsArray[i].username) {
                        username.nextElementSibling.style.visibility = 'hidden';
                        username.style.border = '';
                        if (clientsArray[i].password !== password.value) {
                            password.nextElementSibling.style.visibility = 'visible';
                            password.nextElementSibling.innerText = 'Incorrect password';
                            password.style.border = '1px solid #DD3142';
                            return;
                        } else {
                            title.innerText = `Welcome, ${clientsArray[i].full_Name}!`;
                            signUp.innerText = "Exit";
                            title.nextElementSibling.remove();
                            document.getElementsByClassName('form')[0].style.maxWidth = 'unset';
                            username.parentElement.remove();
                            password.parentElement.remove();
                            link.remove();
                            title.style.justifySelf = 'center';
                            signUp.addEventListener('click', function () {
                                location.reload();
                            });
                        }
                    } else {
                        username.nextElementSibling.style.visibility = 'visible';
                        username.nextElementSibling.innerText = 'This user is not registered';
                        username.style.border = '1px solid #DD3142';
                    }
                }
            } else {
                userNameValidation();
                passwordValidation();
            }
        }
    }
}