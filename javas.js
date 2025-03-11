function calculateBonus() {
    var employeeID = document.getElementById('employeeID').value;
    var employeeName = document.getElementById('employeeName').value;
    var employeeSex = document.getElementById('employeeSex').value;
    var employeeSalary = parseFloat(document.getElementById('employeeSalary').value);
    var employeePosition = document.getElementById('employeePosition').value;

    var bonusPercentage = 0;

    if (employeePosition.toLowerCase() === "manager" || employeePosition.toLowerCase() === "MANAGER") {
        bonusPercentage = 0.20;
    } else if (employeePosition.toLowerCase() === "accounting" || employeePosition.toLowerCase() === "ACCOUNTING") {
        bonusPercentage = 0.15;
    } else if (employeePosition.toLowerCase() === "it" || employeePosition.toLowerCase() === "IT") {
        bonusPercentage = 0.25;
    } else {
        bonusPercentage = 0.10;
    }

    var bonus = employeeSalary * bonusPercentage;
    var totalSalary = employeeSalary + bonus;

    document.getElementById('employeeBonus').textContent = `${(bonusPercentage * 100)}`;
    document.getElementById('TotalSalary').textContent = totalSalary;
}
