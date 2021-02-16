//coat.js
// Améliorer l'exemple du cours :
/*
Programme qui va m'aider à décider si je dois mettre mon manteau ou pas en fonction d'une météo pluvieuse ou venteuse
*/

let isRainy = false;
let isWindy = false;
let degre = 18;

if (isRainy || (isWindy && degre > 18)) {
  console.log("Put on your coat today, the temperature is bad");
} else {
  console.log("You don’t need to wear a coat today");
}

/*
Vous devrez aussi prendre en compte la température pour décider si on doit mettre un manteau ou pas.
*/
