function depositCalculator(input) {
  let depositAmount = Number(input[0]);
  let termDeposit = Number(input[1]);
  let interestRate = Number(input[2]);

  let extraMoneyForOneYear = depositAmount * (interestRate / 100);

  let extraMoneyForOneMonth = extraMoneyForOneYear / 12;

  let totalExtraMoney = extraMoneyForOneMonth * termDeposit;

  console.log(depositAmount + totalExtraMoney);


}

depositCalculator(["2350", "6", "7"]);