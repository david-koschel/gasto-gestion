const buttons = ["lorem ipsum", "lorem ipsum", "lorem ipsum"]

const parent = document.getElementById('home-buttons');
const template = parent.firstElementChild.content;
buttons.forEach(buttonName => {
    const node = template.cloneNode(true);
    node.firstElementChild.innerHTML = buttonName;
    parent.appendChild(node);
})