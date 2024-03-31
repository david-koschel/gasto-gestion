document.addEventListener("DOMContentLoaded", () => {
    const invoiceParam = new URLSearchParams(window.location.search).get('number');
    if (invoiceParam) {
        if (invoiceParam === "new") {
            setNewData();
        } else {
            setData(invoiceParam);
        }
    } else {
        navigateToUserHome();
    }
});


async function setNewData() {
    const user = await getLoggedUserData();
    const number = user.invoiceList[user.invoiceList.length - 1].invoiceNumber + 1;
    document.getElementById("title").textContent = "Nueva Factura";
    document.getElementById("edit-button").textContent = "AÑADIR";
    document.getElementById("invoiceNumber").value = number;
}

async function setData(invoiceIndex) {
    const invoice = await getInvoice(invoiceIndex);
    document.getElementById("title").textContent = `Editar Factura Nº ${invoiceIndex}`;
    const inputs= document.getElementById("data-container").querySelectorAll("input");
    inputs.forEach(input => input.value = invoice[input.id]);
}

async function getInvoice(index) {
    const user = await getLoggedUserData();
    const invoice = user?.invoiceList.find(invoice => invoice.invoiceNumber === +index);
    if (invoice) return invoice;
    navigateToUserHome();
}