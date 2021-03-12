let loanAmount = document.querySelector('#amount');
let loanMonths = document.querySelector('#months');
let loanRate = document.querySelector('#interest');
let output = document.querySelector('#output');
const btn = document.querySelector('.btn');



function calculate(){
    //Convert values into integers
    let amount = parseInt(loanAmount.value);
    let months = parseInt(loanMonths.value);
    let interest = parseInt(loanRate.value);
    monthlyPayment(amount, months, interest);
}

//Add click even on calculate button
btn.addEventListener('click', calculate);

function monthlyPayment(amount, months, interest){
    //Calculate monthly interest percentage
    let monthlyInterest = interest / 1200;
    //Calculate compound interest factor
    let factor = Math.pow((1 + monthlyInterest), months);
    //Calculate monthly payment based on above
    let monthlyPayment = (amount * monthlyInterest * factor)/(factor - 1); 
    output.innerText = monthlyPayment;
}

