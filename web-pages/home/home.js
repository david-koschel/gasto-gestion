document.addEventListener("DOMContentLoaded", () => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.get('log-out')) {
        localStorage.removeItem("user-email");
    } else if (localStorage.getItem("user-email")) {
        window.location.href = "/gasto-gestion/web-pages/user-home/user-home.html";
    }
});
