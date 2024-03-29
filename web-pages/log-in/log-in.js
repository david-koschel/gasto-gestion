document.querySelector("#log-in-form").addEventListener('submit', onSubmit);
document.querySelector("#log-in-form").addEventListener('invalid', onInvalid, true);

function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.srcElement);
    const jsonObject = {};
    formData.forEach((value, key) => jsonObject[key] = value);

    login(formData.get("username"), formData.get("password"));
}

function getUsernames() {
    return fetch("/data.json")
        .then(result => result.json())
        .then(json => json.users);
}

async function login(username, password) {
    const usernames = await getUsernames();
    const existingUser = usernames.find(user => user.email === username && user.password === password);
    if (existingUser) {
        localStorage.setItem("user-email", existingUser.email);
        window.location.href = "/gasto-gestion/web-pages/user-home/user-home.html";
    } else {
        alert("Correo electrónico o contraseña incorrectos");
    }
}

function onInvalid(event) {
    event.target.classList.add("invalid");
}