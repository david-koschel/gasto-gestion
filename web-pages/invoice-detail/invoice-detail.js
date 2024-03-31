document.addEventListener("DOMContentLoaded", () => {
    const invoiceParam = new URLSearchParams(window.location.search).get('invoice');
    if (invoiceParam) {
        setData(invoiceParam);
    } else {
        navigateToUserHome();
    }
});

async function setData(invoiceIndex) {
    const invoice = await getInvoice(invoiceIndex);
    document.getElementById("title").textContent = `Factura Nº ${invoiceIndex}`;
    const spans= document.getElementById("data-container").querySelectorAll("span");
    spans.forEach(span => {
        span.textContent = invoice[span.id];
        if (span.id === "quantity") span.textContent += '€';
    });
}

async function getInvoice(index) {
    const user = await getLoggedUserData();
    const invoice = user?.invoiceList.find(invoice => invoice.invoiceNumber === +index);
    if (invoice) return invoice;
    navigateToUserHome();
}