document.querySelector("#log-in-form").addEventListener('submit', onSubmit);
document.querySelector("#log-in-form").addEventListener('invalid', onInvalid, true);
document.addEventListener("DOMContentLoaded", () => {
    if (userIsLoggedIn()) navigateToUserHome();
});

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.srcElement);
    const jsonObject = {};
    formData.forEach((value, key) => jsonObject[key] = value);

    login(formData.get("username"), formData.get("password"));
}

async function login(username, password) {
    const existingUser = await getUserData(username);
    if (existingUser && existingUser.password === password) {
        localStorage.setItem("user-email", existingUser.email);
        navigateToUserHome();
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
}

function onInvalid(event) {
    event.target.classList.add("invalid");
}