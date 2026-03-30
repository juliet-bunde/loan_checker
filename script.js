function checkEligibility(){
    let age = document.getElementById("age").value;
    let monthlyIncome = document.getElementById("monthlyincome").value;
    let employmentTypes = document.getElementById("employmentTypes");
    let creditScore = document.getElementById("creditScore").value;

   //convert value to number
   age = parseFloat(age);
   monthlyIncome = parseFloat(monthlyIncome);
   creditScore = parseFloat(creditScore);

   //get selected employment type
    let selectedEmploymentType = employmentTypes.options[employmentTypes.selectedIndex].value;

    let result = document.getElementById("result");
    let interestRate;

   //check eligibility criteria

   if (selectedEmploymentType === ""){
    result.innerHTML = "Please select a valid employment type.";
   } else if (age < 18){
    result.innerHTML = "You must be 18 years or older.";
   } else if (monthlyIncome < 10000){
    result.innerHTML = "Your monthly income must be atleast KES 10,000.";
   } else if (creditScore < 30){
    result.innerHTML = "Your credit score must be a 30 or above.";
   } else {

    // if all conditions are met, eligible for loan
     if(creditScore >= 80){
        interestRate = 10;
     }else if (creditScore >= 50){
        interestRate = 14;
     }else {
        interestRate = 20;
     }
<<<<<<< HEAD
     
result.innerHTML = `you qualify for a loan with an interest rate of ${interestRate}%.`;  

=======
     result.innerHTML = `you qualify for a loan with an interest rate of ${interestRate}%.`;
>>>>>>> 2be2e942770f527ec26aa1737383672f59e54d00
   }
}