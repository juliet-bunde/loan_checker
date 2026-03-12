function checkEligibility(){
    let age = document.getElementById("age").value;
    let monthlyIncome = document.getElementById("monthlyincome").value;
    let employmentTypes = document.getElementById("employmentTypes").value;
    let creditScore = document.getElementById("creditScore").value;

//convert value to number
age = parseFloat(age);
monthlyIncome = parseFloat(monthlyIncome);
creditScore = parseFloat(creditScore);

//get selected employment type
    let selectedEmploymentType = employmentTypes.options(employmentTypes.selectedIndex).value;

    //check eligibility criteria
    
}