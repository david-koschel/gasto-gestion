document.addEventListener("DOMContentLoaded", () => includeHTML())

function includeHTML() {
    for (const element of document.querySelectorAll("[html-page]")) {
        fetch(element.getAttribute("html-page"))
            .then(response => response.ok ? response.text() : "CONTENT COULD NOT BE LOADED")
            .then((text) => {
                element.innerHTML = text;
                executeScripts(element, element.getAttribute("json-data"));
            });
    }
}

function executeScripts(container, json) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach((script) => {
        const scriptTag = document.createElement('script');
        if (json) scriptTag.setAttribute("json-data", json);
        if (script.id) scriptTag.id = script.id;
        if (script.src) scriptTag.src = script.src;
        else scriptTag.textContent = script.textContent;

        document.head.appendChild(scriptTag);
        script.remove()
    });
}
