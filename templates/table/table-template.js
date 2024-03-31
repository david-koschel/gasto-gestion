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

function createRow(contents, dataId) {
    let newRow = document.getElementById('tbody-template').cloneNode(true).content.querySelector("#tr-body");
    newRow.setAttribute("data-id", dataId);

    let firstTd = newRow.querySelector("td");
    contents.forEach((content) => {
        let td = firstTd.cloneNode(true);
        td.textContent = content;
        newRow.insertBefore(td, newRow.querySelector("#last-td"));
    });
    firstTd.remove();
    document.getElementById('table').querySelector("tbody").appendChild(newRow);
}
