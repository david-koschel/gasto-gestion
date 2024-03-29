document.addEventListener("DOMContentLoaded", () => {
    const user = localStorage.getItem("user-email");
    if (user) {
        checkUserData(user);
    } else {
        logout();
    }
});

function getUsernames() {
    return fetch("/data.json")
        .then(result => result.json())
        .then(json => json.users);
}

async function checkUserData(email) {
    const usernames = await getUsernames();
    const existingUser = usernames.find(user => user.email = email);
    if (existingUser) {
        document.querySelector("#username").textContent = existingUser.username;
    } else {
        logout();
    }
}

function logout() {
    window.location.href = "/gasto-gestion/web-pages/home/home.html?log-out=true";
}