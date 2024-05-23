var trackRowNum = 2;

function addRow() {
    trackRowNum++;
    // Get the table body element
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

    // Create a new row
    var newRow = table.insertRow();
    var nameCell = newRow.insertCell(0);
    nameCell.textContent = "Activity " + trackRowNum.toString();

    var shortnameCell = newRow.insertCell(1);
    shortnameCell.textContent = "A" + trackRowNum.toString();

    var weightCell = newRow.insertCell(2);
    var weightInputField = document.createElement("input");
    weightInputField.type = "number";
    weightInputField.className = "weight";
    weightInputField.step = "1";
    weightInputField.min = "0";
    weightInputField.id = "inputWeight" + trackRowNum.toString();
    weightCell.appendChild(weightInputField);

    var gradeCell = newRow.insertCell(3);
    var gradeInputField = document.createElement("input");
    var totalInputField = document.createElement("input");
    gradeInputField.type = "number";
    totalInputField.type = "number";
    gradeInputField.className = "grade";
    totalInputField.className = "total"
    gradeInputField.id = "inputGrade" + trackRowNum.toString();
    totalInputField.id = "inputTotal" + trackRowNum.toString();
    gradeInputField.min = "0";
    totalInputField.min = "0";
    gradeInputField.step = "0.1";
    totalInputField.step = "0.1";
    gradeCell.appendChild(gradeInputField);
    gradeCell.append(" / ");
    gradeCell.appendChild(totalInputField);

    var precentCell = newRow.insertCell(4);
    precentCell.id = "precent" + trackRowNum.toString();





}
var totalWeight = 0;
var totalGrade = 0;

function calculateWeighted() {
    // when rol less than 3
    for (var i = 1; i <= trackRowNum; i++) {
        var currentWeight = document.getElementById('inputWeight' + i).value;
        var currentGrade = document.getElementById('inputGrade' + i).value;
        var currentTotal = document.getElementById('inputTotal' + i).value;
        var precent = currentGrade / currentTotal;
        totalGrade += currentGrade / currentTotal * currentWeight;
        totalWeight = +totalWeight + +currentWeight;
        document.getElementById('precent' + i).textContent = precent.toFixed(4);
    }
    var result = totalGrade / totalWeight;
    // console.log(totalGrade);
    // console.log(totalWeight);
    // console.log(totalGrade / totalWeight);
    document.getElementById('resultText').textContent = `Weighted Result: ${result.toFixed(4)}%`;


    // console.log(currentWeight.nodeValue);
    totalWeight = 0;
    totalGrade = 0;
}

function calculateMean() {
    for (var i = 1; i <= trackRowNum; i++) {
        // var currentWeight = document.getElementById('inputWeight' + i).value;
        var currentGrade = document.getElementById('inputGrade' + i).value;
        var currentTotal = document.getElementById('inputTotal' + i).value;
        var precent = currentGrade / currentTotal;
        totalGrade = +totalGrade + +precent;
        // totalWeight = +totalWeight + +currentWeight;
        document.getElementById('precent' + i).textContent = precent.toFixed(4);
    }
    var result = totalGrade / trackRowNum;
    // console.log(totalGrade);
    // console.log(totalWeight);
    // console.log(trackRowNum);
    document.getElementById('resultText').textContent = `Mean Result: ${result.toFixed(4)}%`;

    totalWeight = 0;
    totalGrade = 0;
}