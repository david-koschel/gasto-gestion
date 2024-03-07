function homeButtons(buttons) {
    let parent = document.getElementById('home-buttons');
    let template = parent.firstElementChild.content;
    buttons.forEach(buttonName => {
        const node = template.cloneNode(true);
        node.firstElementChild.innerHTML = buttonName;
        parent.appendChild(node);
    })
}