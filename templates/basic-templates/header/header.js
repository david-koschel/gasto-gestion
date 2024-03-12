const parent = document.getElementById('home-buttons');
const template = parent.firstElementChild.content;
const script = document.getElementById('header-script')

loadButtonData();

function loadButtonData() {
    fetch("/data.json")
        .then(result => result.json())
        .then(json => access(script.getAttribute("json-data"), json).forEach(buttonName => {
                const node = template.cloneNode(true);
                node.firstElementChild.innerHTML = buttonName;
                parent.appendChild(node);
            })
        );
}

const access = (path, object) => {
    return path.split('.').reduce((o, i) => o[i], object)
}