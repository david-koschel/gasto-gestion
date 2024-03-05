let temp = document.getElementById('buttons');
let content = temp.firstElementChild.content;
createButton("Iniciar Sesión");
createButton("Contacto");
createButton("Inicio");

function createButton(text) {
    const node = content.cloneNode(true);
    node.firstElementChild.innerHTML = text;
    temp.appendChild(node);
}