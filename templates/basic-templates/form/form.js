const inputContainer = document.getElementById("form-container");
const formTemplate = document.getElementById("form-input-template").content;
const formScript = document.getElementById('form-script');

loadFormData();

function loadFormData() {
    fetch("/data.json")
        .then(result => result.json())
        .then(json => json.form[formScript.getAttribute("json-data")])
        .then(inputs => {
            inputs.forEach(inputData => {
                const element = formTemplate.cloneNode(true);

                const label = element.querySelector("label");
                label.for = inputData.id;

                const svg = element.querySelector("svg");
                svg.children[0].setAttribute("d", inputData.path);

                const input = element.querySelector("input");
                input.placeholder = inputData.label;
                input.id = inputData.id;
                input.name = inputData.id;
                if (inputData.required) input.required = true;
                if (inputData.type) input.type = inputData.type;

                inputContainer.querySelector("#input-parent").appendChild(element);
            });
        });
}


