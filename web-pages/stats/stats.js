document.addEventListener("chart-script-loaded", () => {
    if (userIsLoggedIn()) {
        getData();
    } else {
        navigateToUserHome();
    }
});

async function getData() {
    const user = await getLoggedUserData();
    const monthMap = new Map();
    user.invoiceList.forEach(invoice => {
        const date = new Date(invoice.date);
        const month = date.getFullYear() * 100 + date.getMonth();
        if (monthMap.has(month)) {
            monthMap.set(month, monthMap.get(month) + invoice.quantity);
        } else {
            monthMap.set(month, invoice.quantity);
        }
    });

    const monthArray = Array.from(monthMap.keys()).sort();
    loadChart(monthArray.map(month => monthYearToString(month)), monthArray.map(month => monthMap.get(month)));
}

function monthYearToString(monthYearNumber) {
    const month = monthYearNumber.toString().substring(4);
    const year = monthYearNumber.toString().substring(0, 4);
    console.log((year));
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    return `${months[+month]} ${year}`;
}