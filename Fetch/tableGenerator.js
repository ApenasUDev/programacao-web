// tableGenerator.js

function generateTable(data) {
    const tableDiv = document.createElement("div");
    const table = document.createElement("table");
    const tableHeader = document.createElement("thead");
    const tableBody = document.createElement("tbody");

    // Assuming data is an array of objects with keys representing columns
    if (data.length > 0) {
        const headers = Object.keys(data[0]);

        const headerRow = document.createElement("tr");
        headers.forEach(headerText => {
            const headerCell = document.createElement("th");
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });
        tableHeader.appendChild(headerRow);

        data.forEach(rowData => {
            const row = document.createElement("tr");
            headers.forEach(headerText => {
                const cell = document.createElement("td");
                cell.textContent = rowData[headerText];
                row.appendChild(cell);
            });
            tableBody.appendChild(row);
        });
    }

    table.appendChild(tableHeader);
    table.appendChild(tableBody);
    tableDiv.appendChild(table);

    return tableDiv;
}