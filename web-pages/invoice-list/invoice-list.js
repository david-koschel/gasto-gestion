document.addEventListener("DOMContentLoaded", () => {
    if (!userIsLoggedIn()) {
        logOutUser();
    }
});

document.addEventListener("table-build-complete", () => {
    createTableHeaders(["Comercio", "Concepto", "Tipo de Gasto", "Fecha", "Cantidad"]);
    loadTableData();
});

async function loadTableData() {
    const currentUser = await getLoggedUserData();
    if (!currentUser) logOutUser();
    currentUser.invoiceList.forEach(invoice => {
        createRow(Object.values(invoice));
    });
}
