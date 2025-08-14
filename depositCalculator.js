function depositCalculator(input) {
  let depositAmount = Number(input[0]);
  let termDeposit = Number(input[1]);
  let interestRate = Number(input[2]);

  let extraMoneyForOneYear = depositAmount * (interestRate / 100);
  let extraMoneyForOneMonth = extraMoneyForOneYear / 12;
  console.log(extraMoneyForOneMonth);


}

depositCalculator(["200", "3", "5.7"]);