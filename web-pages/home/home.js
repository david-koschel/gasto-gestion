document.addEventListener("DOMContentLoaded", () => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('log-out')) {
        logOutUser(true);
    } else if (userIsLoggedIn()) {
        navigateToUserHome();
    }
});
