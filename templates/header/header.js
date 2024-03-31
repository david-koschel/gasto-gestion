const parent = document.getElementById('home-buttons');
const template = document.getElementById('button-template');
const headerScript = document.getElementById('header-script');

const iconTemplate = document.getElementById('button-icon-template');
const iconParent = document.getElementById('dropdown-menu');

loadButtonData();

function loadButtonData() {
    fetch("/data.json")
        .then(result => result.json())
        .then(json => json.header[headerScript.getAttribute("json-data")])
        .then(json => json.forEach(buttonData => {
            createButtons(buttonData, template, parent);
            createButtons(buttonData, iconTemplate, iconParent);
        }));
}

function createButtons(buttonData, template, parent) {
    const node = template.content.cloneNode(true);
    const button = node.querySelector('a');
    button.innerText = buttonData.name;
    button.href = buttonData.link;
    parent.appendChild(node);
}