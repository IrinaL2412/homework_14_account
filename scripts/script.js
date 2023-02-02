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


    let f1 = function () {
        if (fullName.value.trim().length > 0) {
            if (!fullName.value.match(/^\s*[a-z]{2,}\s+[a-z]{2,}\s*$/ig)) {
                fullName.nextElementSibling.innerText = 'Full Name can only contain letters and spaces';
                // fullName.style.border = '1px solid #DD3142';
                // fullName.nextElementSibling.style.visibility = 'visible';
                return false;
            } else {
                fullName.nextElementSibling.style.visibility = 'hidden';
                fullName.style.border = '';
                return true;
            }
        }

    }

    let f2 = function () {
        if (username.value.trim().length > 0) {
            if (!username.value.match(/^\s*[a-z0-9_-]{3,15}\s*$/ig)) {
                username.nextElementSibling.innerText = 'Your username can only contain letters, numbers, underscores and dashes';
                // username.style.border = '1px solid #DD3142';
                // username.nextElementSibling.style.visibility = 'visible';
                return false;
            } else {
                username.nextElementSibling.style.visibility = 'hidden';
                username.style.border = '';
                return true;
            }
        }
    }

    let f3 = function () {
        if (fields[2].value.trim().length > 0) {
            if (!fields[2].value.match(/^\s*\w{3,}@[a-z]+\.[a-z]{2,6}\s*$/ig)) {
                fields[2].nextElementSibling.innerText = 'E-mail can only contain letters, numbers, underscore, dot and @';
                // fields[2].style.border = '1px solid #DD3142';
                // fields[2].nextElementSibling.style.visibility = 'visible';
                return false;
            } else {
                fields[2].nextElementSibling.style.visibility = 'hidden';
                fields[2].style.border = '';
                return true;
            }
        }
    }

    let f4 = function () {
        if (fields[3].value.trim().length > 0) {
            if (!fields[3].value.match(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,20}/ig)) {
                fields[3].nextElementSibling.innerText = 'Password must contain at least 8 characters, one uppercase letter, one number, one wildcard';
                // fields[3].style.border = '1px solid #DD3142';
                // fields[3].nextElementSibling.style.visibility = 'visible';
                return false;
            } else {
                fields[3].nextElementSibling.style.visibility = 'hidden';
                fields[3].style.border = '';
                return true;
            }
        }
    }




    let checkFieldsPresence = function () {

        for (let i = 0; i < fields.length - 1; i++) {
            console.log(fields[i].value.trim().length);
            if (fields[i].value.trim().length < 1) {
                // fields[i].nextElementSibling.innerText = 'Full Name can only contain letters and spaces';
                fields[i].style.border = '1px solid #DD3142';
                fields[i].nextElementSibling.style.visibility = 'visible';
                // return false;

            } else {
                // f1();
                // console.log(f1());
                // f2();
                // console.log(f2());
            }

        }

        // if () {
        //
        // }

        f1();
        f2();
        f3();
        f4();

        // return true;

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


        if (checkbox.checked) {
            checkbox.parentElement.nextElementSibling.style.visibility = 'hidden';
        } else {
            checkbox.parentElement.nextElementSibling.style.visibility = 'visible';
        }

        // return true;
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
        return (
            checkFieldsPresence()
            &&
            f1()
            &&
            f2()
            // checkPasswordLength() &&
            // checkPasswordMatch() &&
            // checkCheckbox()
        );

    };


    form.onsubmit = (event) => {
        event.preventDefault();
        if (isValidForm()) {
            // popup.style.display = "flex";
        }
    };

    // ok.addEventListener('click', createAccount);
    // let link = document.getElementsByClassName('link')[0].children[0];
    // link.addEventListener('click', createAccount);

    // function createAccount() {
    //     popup.style.display = "none";
    //
    //     for (let i = 0; i < fields.length; i++) {
    //         fields[i].value = null;
    //         fields[5].checked = false;
    //     }
    //
    //     document.getElementsByTagName('h1')[0].innerText = "Log in to the system";
    //     fields[0].parentElement.remove();
    //     fields[1].parentElement.remove();
    //     fields[2].parentElement.remove();
    //     fields[2].parentElement.remove();
    //     signUp.children[0].innerText = "Sign In";
    //     link.remove();
    //
    //     form.onsubmit = (event) => {
    //         event.preventDefault();
    //         if (!username.value || !fields[1].value) {
    //             alert("Fill in all fields");
    //         } else {
    //             alert(`Welcome, ${username.value}!`);
    //         }
    //     }
    // }
}