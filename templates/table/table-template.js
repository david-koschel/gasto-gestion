function createTableHeaders(contents) {
    const rowHeaderTemplate = document.getElementById('th-template');
    const newHeaderRow = rowHeaderTemplate.content.getElementById('tr-header');

    let firstTh = newHeaderRow.querySelector("th");
    if (firstTh) {
        firstTh.textContent = contents[0];
        contents.splice(0,1);
    }

    contents.forEach((content) => {
        let th = document.createElement('th');
        th.textContent = content;
        newHeaderRow.insertBefore(th, newHeaderRow.querySelector("#last-th"));
    });
    document.getElementById('table').querySelector("#table-header").appendChild(newHeaderRow);
}

function createRow(contents) {
    let newRow = document.getElementById('tbody-template').cloneNode(true).content.querySelector("#tr-body");

    let firstTd = newRow.querySelector("td");
    if (firstTd) {
        firstTd.textContent = contents[0];
        contents.splice(0,1);
    }

    contents.forEach((content) => {
        let td = document.createElement('td');
        td.textContent = content;
        newRow.insertBefore(td, newRow.querySelector("#last-td"));
    });
    document.getElementById('table').querySelector("tbody").appendChild(newRow);
}
