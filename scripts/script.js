window.onload = function () {
    const fullNamedRegEx = /^\s*[a-z]{2,}\s+[a-z]{2,}\s*$/ig;
    const usernameRegEx = /^\s*[a-z0-9_-]{3,15}\s*$/ig;
    const emailRegEx = /^\s*\w{3,}@[a-z]+\.[a-z]{2,6}\s*$/ig;
    const passwordRegEx = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}/g;
    let fields = document.getElementsByTagName('input');
    let fullName = fields[0];
    let username = fields[1];
    let email = fields[2];
    let password = fields[3];
    let repeatPassword = fields[4];
    let checkbox = document.getElementsByClassName('agree')[0].firstElementChild.firstElementChild;
    let signUp = document.getElementsByClassName('action')[0].children[0];
    let popup = document.getElementById('popup');
    let ok = document.getElementsByTagName('button')[1];
    let form = document.getElementsByClassName('form')[0];
    let title = document.getElementsByTagName('h1')[0];
    let link = document.getElementsByClassName('link')[0].children[0];
    let client;
    let clients = localStorage.getItem('clients');
    let clientsArray = JSON.parse(localStorage.getItem('clients'));

    function showOrErrorMessage(field, action) {
        if (action === 'show') {
            field.style.border = '1px solid #DD3142';
            field.nextElementSibling.style.visibility = 'visible';
        } else {
            field.style.border = '';
            field.nextElementSibling.style.visibility = 'hidden';
        }
    }

    // function showErrorMessage(field) {
    //     field.style.border = '1px solid #DD3142';
    //     field.nextElementSibling.style.visibility = 'visible';
    // }
    //
    // function hideErrorMessage(field) {
    //     field.style.border = '';
    //     field.nextElementSibling.style.visibility = 'hidden';
    // }

    function fullNameValidation() {
        if (!fullName.value.match(fullNamedRegEx)) {
            showOrErrorMessage(fullName, 'show');
            return false;
        } else {
            showOrErrorMessage(fullName, 'hide');
            return true;
        }
    }

    function userNameValidation() {
        if (!username.value.match(usernameRegEx)) {
            showOrErrorMessage(username, 'show');
            return false;
        } else {
            showOrErrorMessage(username, 'hide');
            return true;
        }
    }

    function emailValidation() {
        if (!email.value.match(emailRegEx)) {
            showOrErrorMessage(email, 'show');
            return false;
        } else {
            showOrErrorMessage(email, 'hide');
            return true;
        }
    }

    function passwordValidation() {
        if (!password.value.match(passwordRegEx)) {
            showOrErrorMessage(password, 'show');
            return false;
        } else {
            showOrErrorMessage(password, 'hide');
            return true;
        }
    }

    function checkPasswordMatch() {
        if (passwordValidation() === true && repeatPassword.value === password.value) {
            showOrErrorMessage(repeatPassword, 'hide');
            return true;
        } else {
            showOrErrorMessage(repeatPassword, 'show');
            return false;
        }
    }

    function checkboxValidation() {
        if (checkbox.checked) {
            checkbox.parentElement.nextElementSibling.style.visibility = 'hidden';
            return true;
        } else {
            checkbox.parentElement.nextElementSibling.style.visibility = 'visible';
            return false;
        }
    }

    function checkFieldsPresence() {
        for (let i = 0; i < fields.length - 1; i++) {
            if (!fields[i].value.trim().length) {
                showOrErrorMessage(fields[i], 'show');
            }
        }
        fullNameValidation();
        userNameValidation();
        emailValidation();
        passwordValidation();
        checkPasswordMatch();
        checkboxValidation();
        return true;
    }

    function isValidForm() {
        return (checkFieldsPresence() &&
            fullNameValidation() &&
            userNameValidation() &&
            emailValidation() &&
            passwordValidation() &&
            checkPasswordMatch() &&
            checkboxValidation());
    }

    function addUserToLocalStorage() {
        if (clients) {
            clientsArray = JSON.parse(clients);
        } else {
            clientsArray  = [];
        }
        clientsArray.push(client);
        localStorage.setItem('clients', JSON.stringify(clientsArray));
    }


    function backToRegistration() {
        location.reload();
    }

    function resetErrors() {
        for (let i = 0; i < fields.length; i++) {
            fields[i].value = null;
            showOrErrorMessage(fields[i], 'hide');
        }
    }

    function redirectToLoginPage() {
        title.innerText = "Log in to the system";
        signUp.innerText = "Sign In";
        link.innerText = 'Registration';
        fullName.parentElement.remove();
        email.parentElement.remove();
        password.parentElement.nextElementSibling.remove();
        checkbox.parentElement.parentElement.remove();
    }

    function signIn() {
        signUp.innerText = "Exit";
        title.nextElementSibling.remove();
        username.parentElement.remove();
        password.parentElement.remove();
        link.remove();
        title.style.justifySelf = 'center';
        document.getElementsByClassName('form')[0].style.maxWidth = 'unset';
        signUp.addEventListener('click', function () {
            location.reload();
        });
    }

    function fieldsValidation() {
        if (!username.value || !password.value) {
            for (let i = 0; i < fields.length; i++) {
                if (!fields[i].value) {
                    fields[i].nextElementSibling.innerText = `Fill in the field`;
                    showOrErrorMessage(fields[i], 'show');
                } else {
                    showOrErrorMessage(fields[i], 'hide');
                }
            }
        } else {
            localStorage.getItem('username');
            for (let i = 0; i < clientsArray.length; i++) {
                if (username.value === clientsArray[i].username) {
                    showOrErrorMessage(username, 'hide');
                    if (clientsArray[i].password !== password.value) {
                        password.nextElementSibling.innerText = 'Incorrect password';
                        showOrErrorMessage(password, 'show');
                        return;
                    } else {
                        title.innerText = `Welcome, ${clientsArray[i].full_Name}!`;
                        signIn();
                    }
                } else {
                    username.nextElementSibling.innerText = 'This user is not registered';
                    showOrErrorMessage(username, 'show');
                    showOrErrorMessage(password, 'hide');
                }
            }
        }
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
            addUserToLocalStorage();
            popup.style.display = "flex";
        }
    };

    ok.addEventListener('click', logIN);
    link.addEventListener('click', logIN);

    function logIN() {
        link.addEventListener('click', backToRegistration);
        popup.style.display = "none";

        resetErrors();
        redirectToLoginPage();

        form.onsubmit = (event) => {
            event.preventDefault();
            fieldsValidation();
        }
    }
}