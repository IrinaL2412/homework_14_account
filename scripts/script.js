window.onload = function () {
    let fullName = document.getElementsByTagName('input')[0];
    let username = document.getElementsByTagName('input')[1];
    let checkbox = document.getElementsByClassName('agree')[0].firstElementChild.firstElementChild;
    let signUp = document.getElementsByClassName('action')[0];
    let popup = document.getElementById('popup');
    let ok = document.getElementsByTagName('button')[1];
    let form = document.getElementsByClassName('form')[0];
    let fields = document.getElementsByTagName('input');


    // let hasError = false;


    // if (!event.key.trim()) {
    //     return;
    // }
    // if (!isNaN(+event.key)) {
    //     return false;
    // }
    // if (!fullName.value.match(/[a-z]i/)) {
    //     fullName.innerText = 'Full Name can only contain letters and spaces';
    // }

    // fullName.value.match(/[a-z]i/);

    // username.onkeydown = (event) => {
    //     if (event.key === '.' || event.key === ",") {
    //         return false;
    //     }
    // }

    // checkbox.onclick = () => {
    //     if (checkbox.checked) {
    //         console.log(this.parentElement.nextElementSibling);
    //         checkbox.parentElement.nextElementSibling.style.visibility = 'hidden';
    //     } else checkbox.parentElement.nextElementSibling.style.visibility = 'visible';
    // }

    // console.log(fullName.value.match(/^\s*[A-Z][a-z]+\s+[A-Z][a-z]+\s*$/));


    let fullNameValidation = function () {
        if (fullName.value.trim().length > 0) {
            if (!fullName.value.match(/^\s*[a-z]{2,}\s+[a-z]{2,}\s*$/ig)) {
                fullName.nextElementSibling.innerText = 'Full Name can only contain letters and spaces';
                fullName.style.border = '1px solid #DD3142';
                fullName.nextElementSibling.style.visibility = 'visible';
                return false;
            } else {
                fullName.nextElementSibling.style.visibility = 'hidden';
                fullName.style.border = '';
                return true;
            }
        }

    }

    let userNameValidation = function () {
        if (username.value.trim().length > 0) {
            if (!username.value.match(/^\s*[a-z0-9_-]{3,15}\s*$/ig)) {
                username.nextElementSibling.innerText = 'Your username can only contain letters, numbers, underscores and dashes';
                username.style.border = '1px solid #DD3142';
                username.nextElementSibling.style.visibility = 'visible';
                return false;
            } else {
                username.nextElementSibling.style.visibility = 'hidden';
                username.style.border = '';
                return true;
            }
        }
    }

    let emailValidation = function () {
        if (fields[2].value.trim().length > 0) {
            if (!fields[2].value.match(/^\s*\w{3,}@[a-z]+\.[a-z]{2,6}\s*$/ig)) {
                fields[2].nextElementSibling.innerText = 'E-mail can only contain letters, numbers, underscore, dot and @';
                fields[2].style.border = '1px solid #DD3142';
                fields[2].nextElementSibling.style.visibility = 'visible';
                return false;
            } else {
                fields[2].nextElementSibling.style.visibility = 'hidden';
                fields[2].style.border = '';
                return true;
            }
        }
    }

    let passwordValidation = function () {
        if (fields[3].value.trim().length > 0) {
            if (!fields[3].value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}/ig)) {
                fields[3].nextElementSibling.innerText = 'Password must contain at least 8 characters, one uppercase letter, one number, one wildcard';
                fields[3].style.border = '1px solid #DD3142';
                fields[3].nextElementSibling.style.visibility = 'visible';
                return false;
            } else {
                fields[3].nextElementSibling.style.visibility = 'hidden';
                fields[3].style.border = '';
                return true;
            }
        }
    }

    let checkPasswordMatch = function () {
        if (fields[4].value.trim().length > 0) {
            if (passwordValidation() === true && fields[4].value === fields[3].value) {
                fields[4].nextElementSibling.style.visibility = 'hidden';
                fields[4].style.border = '';
                return true;
            } else {
                fields[4].nextElementSibling.innerText = 'Passwords do not match';
                fields[4].style.border = '1px solid #DD3142';
                fields[4].nextElementSibling.style.visibility = 'visible';
                return false;
            }
        }
    }

    let checkboxValidation = function () {
        if (checkbox.checked) {
            checkbox.parentElement.nextElementSibling.style.visibility = 'hidden';
            return true;
        } else {
            checkbox.parentElement.nextElementSibling.style.visibility = 'visible';
            return false;
        }
    }


    let checkFieldsPresence = function () {

        for (let i = 0; i < fields.length - 1; i++) {
            // console.log(fields[i].value.trim().length);
            if (fields[i].value.trim().length < 1) {
                // fields[i].nextElementSibling.innerText = 'Full Name can only contain letters and spaces';
                fields[i].style.border = '1px solid #DD3142';
                fields[i].nextElementSibling.style.visibility = 'visible';
                // return false;

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


    // if (fullName.value.match(/^\s*[a-z]{2,}\s+[a-z]{2,}\s*$/ig)) {
    //     fullName.nextElementSibling.style.visibility = 'hidden';
    //     fullName.style.border = '';
    //
    // } else {
    //     fullName.nextElementSibling.innerText = 'Full Name can only contain letters and spaces';
    //     fullName.style.border = '1px solid #DD3142';
    //     fullName.nextElementSibling.style.visibility = 'visible';
    // }
    //
    //
    // if (username.value.match(/^\s*[a-z0-9_-]{3,15}\s*$/ig)) {
    //     username.nextElementSibling.style.visibility = 'hidden';
    //     username.style.border = '';
    //
    //
    // } else {
    //     username.nextElementSibling.innerText = 'Your username can only contain letters, numbers, underscores and dashes';
    //     username.style.border = '1px solid #DD3142';
    //     username.nextElementSibling.style.visibility = 'visible';
    // }
    //
    // if (fields[2].value.match(/^\s*\w{3,}@[a-z]+\.[a-z]{2,6}\s*$/ig)) {
    //     fields[2].nextElementSibling.style.visibility = 'hidden';
    //     fields[2].style.border = '';
    //
    //
    // } else {
    //     fields[2].nextElementSibling.innerText = 'E-mail can only contain letters, numbers, underscore, dot and @';
    //     fields[2].style.border = '1px solid #DD3142';
    //     fields[2].nextElementSibling.style.visibility = 'visible';
    // }
    //
    // if (fields[3].value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}/ig)) {
    //     fields[3].nextElementSibling.style.visibility = 'hidden';
    //     fields[3].style.border = '';
    //
    //
    // } else {
    //     fields[3].nextElementSibling.innerText = 'Password must contain at least 8 characters, one uppercase letter, one number, one wildcard';
    //     fields[3].style.border = '1px solid #DD3142';
    //     fields[3].nextElementSibling.style.visibility = 'visible';
    // }
    //
    //
    // if (fields[3].value !== fields[4].value) {
    //     fields[4].nextElementSibling.innerText = 'Password must contain at least 8 characters, one uppercase letter, one number, one wildcard';
    //     fields[4].style.border = '1px solid #DD3142';
    //     fields[4].nextElementSibling.style.visibility = 'visible';
    //     // return false;
    // } else {
    //     fields[4].nextElementSibling.style.visibility = 'hidden';
    //     fields[4].style.border = '';
    //     // return true;
    // }
    //
    //


    // let checkPasswordLength = function () {
    //     fields[3].minLength = 8;
    //     if (fields[3].value.length < 8) {
    //         alert("The password is too short. Enter at least 8 characters.");
    //         return false;
    //     } else {
    //         return true;
    //     }
    // };

    // let checkPasswordMatch = function () {
    //     if (fields[3].value !== fields[4].value) {
    //         fields[4].nextElementSibling.innerText = 'Password must contain at least 8 characters, one uppercase letter, one number, one wildcard';
    //         fields[4].style.border = '1px solid #DD3142';
    //         fields[4].nextElementSibling.style.visibility = 'visible';
    //         return false;
    //     } else {
    //         fields[4].nextElementSibling.style.visibility = 'hidden';
    //         fields[4].style.border = '';
    //         return true;
    //     }
    // };

    // let checkCheckbox = function () {
    // if (!checkbox.checked) {
    //     alert("Confirm acceptance of our Terms of Service and Privacy Statement.");
    //     return false;
    // } else {
    //     return true;
    // }
    // };

    let isValidForm = function () {
        return (checkFieldsPresence() &&
            fullNameValidation() &&
            userNameValidation() &&
            emailValidation() &&
            passwordValidation() &&
            checkPasswordMatch() &&
            checkboxValidation());
    };


    form.onsubmit = (event) => {
        event.preventDefault();
        if (isValidForm()) {

            let client = {
                full_Name: fullName.value,
                username: username.value,
                email: fields[2].value,
                password: fields[3].value,
            }
            // console.log(client);

            // let clients = localStorage.getItem('clients');
            // if (clients) {
            //     let clientsArray = JSON.parse(clients);
            //     clientsArray.push(client);
            //     localStorage.setItem('clients', JSON.stringify(clientsArray));
            // } else {
            //     let clientsArray = [];
            //     clientsArray.push(client);
            //     localStorage.setItem('clients', JSON.stringify(clientsArray));
            // }

            let clients = localStorage.getItem('clients');
            if (clients) {
                clients = JSON.parse(clients);
            } else {
                clients = [];
            }
            clients.push(client);
            localStorage.setItem('clients', JSON.stringify(clients));

            // localStorage.setItem('client', JSON.stringify(clients));

            // console.log(clients);
            // console.log(clientsArray);
            console.log(localStorage);


            popup.style.display = "flex";


        }
        // console.log(client);


    };

    ok.addEventListener('click', createAccount);
    let link = document.getElementsByClassName('link')[0].children[0];
    link.addEventListener('click', createAccount);
    // link.onsubmit = () => {
    //     createAccount();
    // }

    function createAccount() {
        popup.style.display = "none";

        for (let i = 0; i < fields.length; i++) {
            fields[i].value = null;
            // fields[5].checked = false;
            fields[5].checked = true;
        }

        document.getElementsByTagName('h1')[0].innerText = "Log in to the system";
        fields[0].parentElement.remove();
        fields[1].parentElement.remove();
        fields[2].parentElement.remove();
        fields[2].parentElement.remove();
        signUp.children[0].innerText = "Sign In";
        // link.remove();
        link.innerText = 'Registration';

        form.onsubmit = (event) => {
            event.preventDefault();

            let f10 = function () {
                for (let i = 0; i < fields.length; i++) {
                    console.log(fields[i]);
                    // console.log(fields[i].value.trim().length);
                    if (fields[i].value.trim().length < 1) {
                        // fields[i].nextElementSibling.innerText = 'Full Name can only contain letters and spaces';
                        fields[i].style.border = '1px solid #DD3142';
                        fields[i].nextElementSibling.style.visibility = 'visible';
                        // return false;

                    }
                }

                userNameValidation();
                passwordValidation();
            }

            f10();

            // checkFieldsPresence();

            // if (!username.value || !fields[1].value) {
            //     alert("Fill in all fields");
            // } else {
            //     alert(`Welcome, ${username.value}!`);
            // }
        }
    }
}