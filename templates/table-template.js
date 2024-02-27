let rowTemplate = document.getElementById('row-template');

createRow();
createRow();
console.log(rowTemplate);

function createRow() {
    var i = 0;
    let newRow = rowTemplate.cloneNode(true);
    let columns = newRow.getElementsByTagName("td");

    for (const column of columns) {
        column.firstElementChild.innerHTML = "Columna " + i;
        i++;
    }

    table.appendChild(newRow);
}