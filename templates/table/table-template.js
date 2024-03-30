let rowHeaderTemplate = document.getElementById('th-template');
let rowTemplate = document.getElementById('tbody-template')
let table = document.getElementById('table');

createTableHeaders(["LoremImpsum", "LoremImpsum", "LoremImpsum"]);
createRow(["LoremImpsum", "LoremImpsum", "LoremImpsum"]);
createRow(["LoremImpsum", "LoremImpsum", "LoremImpsum"]);

function createTableHeaders(contents) {
    let newHeaderRow = rowHeaderTemplate.content.querySelector("#tr-header");

    let firstTh = newHeaderRow.querySelector("th");
    if (firstTh) {
        firstTh.textContent = contents[0];
        contents.splice(0,1);
    }

    contents.forEach((content) => {
        let th = document.createElement('th');
        th.textContent = content;
        newHeaderRow.appendChild(th);
    });
    table.querySelector("#table-header").appendChild(newHeaderRow);
}

function createRow(contents) {
    let newRow = rowTemplate.cloneNode(true).content.querySelector("#tr-body");

    let firstTd = newRow.querySelector("td");
    if (firstTd) {
        firstTd.textContent = contents[0];
        contents.splice(0,1);
    }

    contents.forEach((content) => {
        let td = document.createElement('td');
        td.textContent = content;
        newRow.appendChild(td);
    });
    table.querySelector("tbody").appendChild(newRow);
}
