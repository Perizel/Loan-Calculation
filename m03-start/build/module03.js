"use strict";
/* Module 3: Implement interfaces in TypeScript
   Lab Start  */
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanTerms) {
    // Calculates the monthly payment of an interest only loan
    let interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment = loanTerms.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(principle, interestRate, months) {
    // Calculates the monthly payment of a conventional loan
    let interest = interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
const principalInput = document.getElementById('principal');
const interestRateInput = document.getElementById('interestRate');
const monthsInput = document.getElementById('months');
const resultElement = document.getElementById('result');
principalInput.addEventListener('input', updatePayments);
interestRateInput.addEventListener('input', updatePayments);
monthsInput.addEventListener('input', updatePayments);
function updatePayments() {
    const principal = Number(principalInput.value);
    const interestRate = Number(interestRateInput.value);
    const months = Number(monthsInput.value);
    let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal, interestRate });
    let conventionalPayment = calculateConventionalLoanPayment(principal, interestRate, months);
    if (resultElement) {
        resultElement.textContent = interestOnlyPayment + '\n' + conventionalPayment;
    }
}
