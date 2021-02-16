//trading.js

//Écrivez un programme qui décidera si vous devez vendre, acheter du Bitcoin ou ne rien faire en fonction d'un prix.

let currencyValue = 39267;
doIbuy = false;
doIsell = true;

if (currencyValue < doIbuy) {
  console.log("It’s the right time to BUY Bitcoin.");
} else if (currencyValue < doIsell) {
  console.log("Now is the right time to SELL Bitcoin.");
} else {
  console.log("Price is NOT interesting. You shouldn’t buy Bitcoin.");
}
