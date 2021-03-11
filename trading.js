/* trading.js

Écrivez un programme qui décidera si vous devez vendre,
acheter du Bitcoin ou ne rien faire en fonction d'un prix.
*/

// mon exercice et petites modifications

let currencyValue = 39267; // Bitcoin en euros le 16/02/2021
doIbuy = false;
doIsell = true;

if (currencyValue <= doIbuy) {
  console.log("It’s the right time to BUY Bitcoin.");
} else if (currencyValue <= doIsell) {
  console.log("Now is the right time to SELL Bitcoin.");
} else {
  console.log("Price is NOT interesting. You shouldn’t buy Bitcoin.");
}
// output : Price is NOT interesting. You shouldn’t buy Bitcoin.

// CORRECTIONS SOFIANE

let prixDuBTC = 50000; // Prix du BTC en dollars
let prixPourVendre = 60000;
let prixPourAcheter = 45000;

if (prixDuBTC <= prixPourAcheter) {
  console.log("Acheter du BTC");
} else if (prixDuBTC >= prixPourVendre) {
  console.log("Vendre du BTC");
} else {
  console.log("Attendre");
}

console.log("Programme terminé");
