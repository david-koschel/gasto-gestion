function createTableHeaders(contents) {
    const rowHeaderTemplate = document.getElementById('th-template');
    const newHeaderRow = rowHeaderTemplate.content.getElementById('tr-header');

    let firstTh = newHeaderRow.querySelector("th");
    contents.forEach((content) => {
        let th = firstTh.cloneNode(true);
        th.textContent = content.header;
        if (content.class) th.classList = content.class;
        newHeaderRow.insertBefore(th, newHeaderRow.querySelector("#last-th"));
    });
    firstTh.remove();
    document.getElementById('table').querySelector("#table-header").appendChild(newHeaderRow);
}

function createRow(contents, dataId) {
    let newRow = document.getElementById('tbody-template').cloneNode(true).content.querySelector("#tr-body");
    newRow.setAttribute("data-id", dataId);

    let firstTd = newRow.querySelector("td");
    contents.forEach((content) => {
        let td = firstTd.cloneNode(true);
        td.querySelector("span").textContent = content.data;
        td.querySelector("label").textContent = content.header;
        if (content.class) td.classList = content.class;
        newRow.insertBefore(td, newRow.querySelector("#last-td"));
    });
    firstTd.remove();
    document.getElementById('table').querySelector("tbody").appendChild(newRow);
}
