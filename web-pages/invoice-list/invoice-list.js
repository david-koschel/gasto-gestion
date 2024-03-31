document.addEventListener("DOMContentLoaded", () => {
    if (!userIsLoggedIn()) {
        logOutUser();
    }
});

document.addEventListener("table-build-complete", () => {
    createTableHeaders(["Comercio", "Concepto", "Tipo de Gasto", "Fecha", "Cantidad"]);
    loadTableData();
});

document.addEventListener("table-row-click", e => {
    window.location.href = `/gasto-gestion/web-pages/invoice-detail/invoice-detail.html?invoice=${e.detail}`;
});

document.addEventListener("table-row-delete", e => {
    console.log(`Aquí se borraría la factura nº ${e.detail} en la base de datos`);
});

async function loadTableData() {
    const currentUser = await getLoggedUserData();
    if (!currentUser) logOutUser();
    currentUser.invoiceList.forEach((invoice) => {
        createRow(getListData(invoice), invoice.invoiceNumber);
    });
}

function getListData(invoice) {
    return [invoice.commerce, invoice.concept, invoice.expenseType, invoice.date, `${invoice.quantity}€`];
}