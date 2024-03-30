document.querySelector("#submit-button").addEventListener('click', checkPasswords);
document.querySelector("#profile-form").addEventListener('submit', onSubmit);
document.querySelector("#profile-form").addEventListener('invalid', onInvalid, true);
document.addEventListener("form-build-complete", () => {
    if (userIsLoggedIn()) {
        getUserData();
    } else {
        logOutUser();
    }
});

async function getUserData() {
    const existingUser = await getLoggedUserData();
    if (existingUser) {
        document.querySelector("#username").value = existingUser.username;
        document.querySelector("#email").value = existingUser.email;
        document.querySelector("#password").value = existingUser.password;
        document.querySelector("#repeat-password").value = existingUser.password;
    } else {
        logOutUser();
    }
}

function onInvalid(event) {
    event.target.classList.add("invalid");
}

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.srcElement);
    const jsonObject = {};
    formData.forEach((value, key) => jsonObject[key] = value);
    console.log("Aquí se actualizarían los datos del usuario...");
}

function checkPasswords() {
    const passwordInput = document.querySelector("#password");
    const repeatPasswordInput = document.querySelector("#repeat-password");
    if (passwordInput.value !== repeatPasswordInput.value) {
        passwordInput.setCustomValidity("Las contraseñas deben coincidir");
        repeatPasswordInput.setCustomValidity("Las contraseñas deben coincidir");
    } else {
        passwordInput.setCustomValidity("");
        repeatPasswordInput.setCustomValidity("");
    }
}
