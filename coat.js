/* coat.js

Améliorer l'exemple du cours :
Programme qui va m'aider à décider si je dois mettre mon manteau ou pas en fonction d'une météo pluvieuse ou venteuse
Vous devrez aussi prendre en compte la température pour décider si on doit mettre un manteau ou pas.
*/

let isRainy = false;
let isWindy = false;
let degre = 18;

if (isRainy || (isWindy && degre > 18)) {
  console.log("Put on your coat today, the temperature is bad");
} else {
  console.log("You don’t need to wear a coat today");
}
// Output : You don’t need to wear a coat today


// DEUXIEME EXEMPLE :

let isRainy2 = true;
let isWindy2 = false;
let degre2 = 10;

if (isRainy2 && !isWindy2 && degre2 <= 10) {
  console.log("You should wear a coat today. Weather is really cold");
} else {
  console.log("Yes! You don’t need to wear a coat today");
}
// Output: You should wear a coat today. Weather is really cold


// TROISIEME EXEMPLE :

let isRainy3 = false;
let isWindy3 = false;
let degre3 = 15;

if (isRainy3 || isWindy3 || degre3 > 15) {
  console.log("You should wear a coat today. Weather is really cold");
} else {
  console.log("Yes! You don’t need to wear a coat today");
}
// Output: Yes! You don’t need to wear a coat today
