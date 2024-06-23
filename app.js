function acceptForinterview(age) {
    return age >= 12 && age <= 30;
}
function checkAPPLICANT() {
    let age = parseInt(prompt("Enter the applicant's age:"));
    if(isNaN(age)) {
        console.log("invalid age entered,");
    }else if(acceptForinterview(age)) {
        console.log("Accepted for interview,");
    }else{
        console.log("Not accepted for interview.");
    }
}