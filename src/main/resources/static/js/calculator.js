var trackRowNum = 2;

function addRow() {
    trackRowNum++;
    var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];

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
    var precent = "";
    var result = "";
    for (var i = 1; i <= trackRowNum; i++) {
        var currentWeight = document.getElementById('inputWeight' + i).value;
        var currentGrade = document.getElementById('inputGrade' + i).value;
        var currentTotal = document.getElementById('inputTotal' + i).value;
        precent = currentGrade / currentTotal;
        if (currentGrade == "" || currentTotal == "" || currentWeight == "") {
            precent = "";
            document.getElementById('precent' + i).textContent = precent.toString();
            continue;
        }
        totalGrade += currentGrade / currentTotal * currentWeight;
        totalWeight = +totalWeight + +currentWeight;
        document.getElementById('precent' + i).textContent = precent.toFixed(4);
    }
    var result = totalGrade / totalWeight;
    if (totalWeight == 0)
        document.getElementById('resultText').textContent = "Please enter at least one Activity";
    else
        document.getElementById('resultText').textContent = `Weighted Result: ${result.toFixed(4)}%`;

    totalWeight = 0;
    totalGrade = 0;
}

function calculateMean() {
    var precent = "";
    var result = "";
    var countingNum = 0;
    for (var i = 1; i <= trackRowNum; i++) {
        var currentGrade = document.getElementById('inputGrade' + i).value;
        var currentTotal = document.getElementById('inputTotal' + i).value;
        precent = currentGrade / currentTotal;
        if (currentGrade == "" || currentTotal == "") {
            precent = "";
            document.getElementById('precent' + i).textContent = precent.toString();
            continue;
        }
        totalGrade = +totalGrade + +precent;
        document.getElementById('precent' + i).textContent = precent.toFixed(4);
        countingNum++;
    }
    result = totalGrade / countingNum;
    if (countingNum == 0)
        document.getElementById('resultText').textContent = "Please enter at least one Activity";
    else
        document.getElementById('resultText').textContent = `Mean Result: ${result.toFixed(4)}%`;

    totalWeight = 0;
    totalGrade = 0;
}