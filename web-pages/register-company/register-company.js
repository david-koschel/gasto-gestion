document.querySelector("#submit-button").addEventListener('click', checkFormValidity);
document.querySelector("#register-company-form").addEventListener('submit', onSubmit);
document.querySelector("#register-company-form").addEventListener('invalid', onInvalid, true);
document.addEventListener("DOMContentLoaded", () => {
    if (userIsLoggedIn()) navigateToUserHome();
});

function checkFormValidity() {
    const passwordInput = document.querySelector("#password");
    const repeatPasswordInput = document.querySelector("#re-password");
    const cifInput = document.querySelector("#cif");
    if (passwordInput.value !== repeatPasswordInput.value) {
        passwordInput.setCustomValidity("Las contraseñas deben coincidir");
        repeatPasswordInput.setCustomValidity("Las contraseñas deben coincidir");
    } else {
        passwordInput.setCustomValidity("");
        repeatPasswordInput.setCustomValidity("");
    }
    if (!cifInput.value?.match("([ABCDEFGHJKLMNPQRSUVW])(\\d{7})([0-9A-J])")) {
        cifInput.setCustomValidity("Debe introducir un CIF válido");
    } else {
        cifInput.setCustomValidity("");
    }
}

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.srcElement);
    const jsonObject = {};
    formData.forEach((value, key) => jsonObject[key] = value);
    addUser(jsonObject);
}

async function addUser(userData) {
    const existingUser = await getUserData(userData.email);
    if (existingUser) {
        alert("Este correo electrónico ya está registrado");
    } else {
        console.log("Aquí se crearía un nuevo usuario y se añadiría a la base de datos...");
    }
}

function onInvalid(event) {
    event.target.classList.add("invalid");
}