function greenGarten(input) {
  let qm = input[0];
  let priceQm = qm * 7.61;
  let discountValue = 0.18;
  let discountPrice = discountValue * priceQm;
  let sumTotal = priceQm - discountPrice;
  console.log(`The final price is ${sumTotal} lv.\nThe discount is: ${discountPrice} lv.`);
}
greenGarten(["150"]);