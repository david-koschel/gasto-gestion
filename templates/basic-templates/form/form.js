const inputContainer = document.getElementById("form-container");
const formTemplate = document.getElementById("form-input-template").content;
const formScript = document.getElementById('form-script')

loadFormData();

function loadFormData() {
    fetch("/data.json")
        .then(result => result.json())
        .then(json => json.form[script.getAttribute("json-data")])
        .then(json => {
            this.
            json.inputs.forEach(inputData => {
                const element = formTemplate.cloneNode(true);
                const label = element.querySelector("label")
                label.for = inputData.id;
                const svg = element.querySelector("svg");
                svg.fill = "#04D2FF";
                inputData.path.forEach((pathData, index) => {
                    svg.children[index].setAttribute("d", pathData)
                });
                const input = element.querySelector("input");
                input.placeholder = inputData.label;
                input.id = inputData.id;
                input.name = inputData.id;
                inputContainer.querySelector("#input-parent").appendChild(element);
            });
        })}


