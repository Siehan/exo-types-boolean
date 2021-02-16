// boolean.js

/*
Écrire un script boolean.js qui affichera le résultat des expressions suivantes qui ont été assignées à des variables.
Évaluer d'abord mentalement le résultat puis vérifier cela avec votre script.
*/

let res1 = (true && false) || (false && true);
//false || false = false
console.log(`res1 = ${res1}`);

let res2 = 10 > 11 && 11 > 10;
//false && true = false
console.log(`res2 = ${res2}`);

let res3 = (true || false) && true;
//true & true = true
console.log(`res3 = ${res3}`);

let res4 = (!true && !false) || (!false && !false);
//false || true = true
console.log(`res4 = ${res4}`);

let res5 = "Hello" === "Hello" && "World" == "Word";
//true && false = false
console.log(`res5 = ${res5}`);

let res6 = (!(20 >= 20) && 7 === 7) || true;
//false || true = true
// ou (!(true) && true) = false || true = true
console.log(`res6 = ${res6}`);

let res7 = "1" === 1 && "2" == 2 && "3" === 3;
//false && true && false = false
console.log(`res7 = ${res7}`);

let res8 = !res7;
//true
console.log(`res8 = ${res8}`);

let res9 = !res8;
//false
console.log(`res9 = ${res9}`);

let res10 =
  (res1 && res2) || (res3 && res4) || (res5 && res6) || (res7 && res8 && res9);
/*(false && false) = false || (true && true) = true || (false && true) = false || (false && true && true) = false
Réponse finale = true
*/
console.log(`res10 = ${res10}`);

/*
Vous devrez afficher les résultats sur la console avec un console.log, par exemple :
console.log(`res1 = ${res1}`)
Dans le doute sur la priorité des différents opérateurs vous pouvez vous appuyer sur cette table.
Plus le chiffre de la 1ere colonne est élevé plus l'opérateur est prioritaire sur ceux d'en dessous.
*/
