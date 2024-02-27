async function includeHTML() {
    for (const element of document.querySelectorAll("[html-page]")) {
        const response = await fetch(element.getAttribute("html-page"));
        if (response.ok) {
            element.innerHTML = await response.text();
            if (element.getAttribute("home-buttons")) {
                homeButtons(element.getAttribute("home-buttons").split(','));
            }
        }
    }
}

function homeButtons(buttons) {
    let temp = document.getElementById('home-buttons');
    let content = temp.firstElementChild.content;
    buttons.forEach(buttonName => createButton(buttonName))
    function createButton(text) {
        const node = content.cloneNode(true);
        node.firstElementChild.innerHTML = text;
        temp.appendChild(node);
    }
}