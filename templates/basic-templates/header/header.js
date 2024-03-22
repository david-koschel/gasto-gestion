const parent = document.getElementById('home-buttons');
const template = document.getElementById('button-template');
const script = document.getElementById('header-script')

loadButtonData();

function loadButtonData() {
    fetch("/data.json")
        .then(result => result.json())
        .then(json => json.header[script.getAttribute("json-data")])
        .then(json => json.forEach(buttonData => {
                const node = template.content.cloneNode(true);
                const button = node.querySelector('a');
                button.innerText = buttonData.name;
                button.href = buttonData.link
                parent.appendChild(node);
            })
        );
}
