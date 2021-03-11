/* xor.js

En vous basant sur vos explications de l'exercice précédent, ou d'internet, écrivez un programme qui simule une opération xor.

indice: xor peut être obtenu avec une combinaison d'opérateurs logiques &&, || et !. La réponse peut être obtenue sur internet, essayez de comprendre !!!
*/

//CORRECTION Sofiane

let a = true;
let b = true;

// V1
if ((a || b) && !(a && b)) {
  console.log("V1: TRUE");
} else {
  console.log("V1: FALSE");
}
// V2
if ((a && !b) || (!a && b)) {
  console.log("V2: TRUE");
} else {
  console.log("V2: FALSE");
}

// EXO SYLVIE

if ((a && b) || a || b) {
  console.log("EXO: TRUE");
} else {
  console.log("EXO: FALSE");
}
// Output:
