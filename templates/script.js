async function includeHTML() {
    for (const element of document.querySelectorAll("[html-page]")) {
        const response = await fetch(element.getAttribute("html-page"));
        if (response.ok) element.innerHTML = await response.text();
    }
}