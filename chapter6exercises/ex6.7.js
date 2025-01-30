// 6.7 Financial Application
const prompt = require(`prompt-sync`)();

function futureInvestmentValue(investmentAmount, annualInterestRate, years) {
  let  monthlyInterestRate = annualInterestRate / (100 * 12);
  console.log(`${"Years"}\t${"Future Value"}`);
  for (let year = 1; year<= years; year++) {
    let futureInvestmentValue = investmentAmount * (1 + monthlyInterestRate) ** (year * 12) ;
    console.log(`${year}\t${futureInvestmentValue.toFixed(2) }`);
  }
}

let amount = prompt("The amount invested: ");
let interestRate = prompt("Annual interest rate: ");
let years = prompt("Number of years: ");

futureInvestmentValue(amount, interestRate, years);
