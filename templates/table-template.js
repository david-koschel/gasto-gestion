let rowTemplate = document.getElementById('th-template');
let headerTemplate = document.querySelector('#table-header template');
let table = document.getElementById('table');

createTableHeaders("ID");
createTableHeaders("Name");
createRow(["Content 1", "Content 2"]); // Example row with content
createRow(["Content A", "Content B"]); // Another example row with content

function createTableHeaders(text) {
    let newHeaderRow = document.importNode(headerTemplate.content, true);
    let headerColumns = newHeaderRow.querySelectorAll("th");

    headerColumns.forEach((headerColumn, index) => {
        headerColumn.textContent = text;
    });

    table.querySelector("thead").appendChild(newHeaderRow);
}

function createRow(contents) {
    let newRow = rowTemplate.firstElementChild.content;
    let column = newRow.cloneNode(true);

    contents.forEach((content) => {
        const element = column.clone();
        element.firstElementChild.innerHTML = content;
        rowTemplate.appendChild(element);
    });

    // Append the new row to the tbody
    table.querySelector("tbody").appendChild(newRow);
}
