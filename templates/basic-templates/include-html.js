async function includeHTML() {
    for (const element of document.querySelectorAll("[html-page]")) {
        fetch(element.getAttribute("html-page"))
            .then(response => response.ok ? response.text() : "CONTENT COULD NOT BE LOADED")
            .then((text) => {
                element.innerHTML = text;
                executeScripts(element);
            });
    }
}

function executeScripts(container) {
    const scripts = container.querySelectorAll('script');
    scripts.forEach(script => {
        const scriptTag = document.createElement('script');
        if (script.src) {
            scriptTag.src = script.src;
        } else {
            scriptTag.textContent = script.textContent;
        }
        document.head.appendChild(scriptTag).parentNode.removeChild(scriptTag);
    });
}
