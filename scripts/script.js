window.onload = function () {
    let fullName = document.getElementsByTagName('input')[0];
    let username = document.getElementsByTagName('input')[1];
    let checkbox = document.getElementsByClassName('agree')[0].firstElementChild;
    let signUp = document.getElementsByClassName('action')[0];
    let popup = document.getElementById('popup');
    let ok = document.getElementsByTagName('button')[1];
    let form = document.getElementsByClassName('form')[0];
    let fields = document.getElementsByTagName('input');

    fullName.onkeydown = (event) => {
        if (!event.key.trim()) {
            return;
        }
        if (!isNaN(+event.key)) {
            return false;
        }
    }

    username.onkeydown = (event) => {
        if (event.key === '.' || event.key === ",") {
            return false;
        }
    }

    checkbox.onclick = () => {
        if (checkbox.checked) {
            console.log("Согласен");
        } else console.log("Не согласен");
    }

    let checkFieldsPresence = function () {
        for (let i = 0; i < fields.length - 1; i++) {
            if (!fields[i].value.trim()) {
                alert(`Fill in the field ${fields[i].previousElementSibling.innerText}`);
                return false;
            }
        }
        return true;
    };

    let checkPasswordLength = function () {
        fields[3].minLength = 8;
        if (fields[3].value.length < 8) {
            alert("The password is too short. Enter at least 8 characters.");
            return false;
        } else {
            return true;
        }
    };

    let checkPasswordMatch = function () {
        if (fields[3].value !== fields[4].value) {
            alert("The passwords don't match. Try again.");
            return false;
        } else {
            return true;
        }
    };

    let checkCheckbox = function () {
        if (!checkbox.checked) {
            alert("Confirm acceptance of our Terms of Service and Privacy Statement. ");
            return false;
        } else {
            return true;
        }
    };

    let isValidForm = function () {
        return (
            checkFieldsPresence() &&
            checkPasswordLength() &&
            checkPasswordMatch() &&
            checkCheckbox()
        );

    };

    form.onsubmit = (event) => {
        event.preventDefault();
        if (isValidForm()) {
            popup.style.display = "flex";
        }
    };

    ok.addEventListener('click', createAccount);
    let link = document.getElementsByClassName('link')[0].children[0];
    link.addEventListener('click', createAccount);

    function createAccount() {
        popup.style.display = "none";

        for (let i = 0; i < fields.length; i++) {
            fields[i].value = null;
            fields[5].checked = false;
        }

        document.getElementsByTagName('h1')[0].innerText = "Log in to the system";
        fields[0].parentElement.remove();
        fields[1].parentElement.remove();
        fields[2].parentElement.remove();
        fields[2].parentElement.remove();
        signUp.children[0].innerText = "Sign In";
        link.remove();

        form.onsubmit = (event) => {
            event.preventDefault();
            if (!username.value || !fields[1].value) {
                alert("Fill in all fields");
            } else {
                alert(`Welcome, ${username.value}!`);
            }
        }
    }
}