document.addEventListener("DOMContentLoaded", () => {
    if (userIsLoggedIn()) {
        checkUserData();
    } else {
        logOutUser();
    }
});

async function checkUserData() {
    const existingUser = await getLoggedUserData();
    if (existingUser) {
        document.querySelector("#username").textContent = existingUser.username;
    } else {
        logOutUser();
    }
}