async function includeHTML() {
    for (const element of document.querySelectorAll("[html-page]")) {
        fetch(element.getAttribute("html-page"))
            .then(response => response.ok ? response.text() : "CONTENT COULD NOT BE LOADED")
            .then((text) => element.innerHTML = text);
    }
    for (const element of document.querySelectorAll("[home-buttons]")) {
    }
}
