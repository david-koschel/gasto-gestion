const parent = document.getElementById('home-buttons');
const template = document.getElementById('button-template');
const script = document.getElementById('header-script')

loadButtonData();

function loadButtonData() {
    fetch("/data.json")
        .then(result => result.json())
        .then(json => access(script.getAttribute("json-data"), json).forEach(buttonData => {
                const node = template.content.cloneNode(true);
                const button = node.querySelector('a');
                button.innerText = buttonData.name;
                button.href = buttonData.link
                parent.appendChild(node);
            })
        );
}

const access = (path, object) => {
    return path.split('.').reduce((o, i) => o[i], object)
}