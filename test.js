function usdToBgn(input) {
  let usd = Number(input[0]);
  let fixing = 1.79549;
  let bgn = usd * fixing;
  console.log(bgn);
}
usdToBgn(["12.5"]);