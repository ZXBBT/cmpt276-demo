function addRow() {
    // Get the table body element
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    // Create a new row
    var newRow = table.insertRow();

    // Insert cells into the new row
    for (var i = 0; i < 5; i++) {
        var newCell = newRow.insertCell(i);
        newCell.textContent = `New Row, Col ${i + 1}`;
    }
}

function calculateWeighted() {
    // JavaScript function to calculate weighted result
    // This function can be implemented according to your requirements
}

function calculateMean() {
    // JavaScript function to calculate mean result
    // This function can be implemented according to your requirements
}