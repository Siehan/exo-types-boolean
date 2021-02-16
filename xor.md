## xor.md

Créer un fichier markdown xor.md où vous écrirez la table de vérité de l'opération xor.

Expliquez comment fonctionne cet opération xor.

_Bien que l'on peut utiliser xor pour des opérations bit à bit avec ^ il n'existe pas d'opérateur logique pour xor équivalent à && et ||._

Pour faire une table en markdown, vérifier dans les sources du cours : (<https://raw.githubusercontent.com/AbsoluteVirtueXI/blockchain-courses/master/programming/05-js-types-and-variables.md>)

La fonction OU exclusif, souvent appelée XOR (eXclusive OR) ou (disjonction) exclusive, ou encore ⊻ en (algèbre relationnelle), est un (opérateur logique de l'(algèbre de Boole).
À deux (opérandes), qui peuvent avoir chacun la valeur VRAI ou FAUX, il associe un résultat qui a lui-même la valeur VRAI seulement si les deux opérandes ont des valeurs distinctes.
Cet opérateur est très utilisé en (électronique), en (informatique), et aussi en (cryptographie) du fait de ses propriétés intéressantes.
Son symbole est traditionnellement un signe plus dans un cercle : " ⊕ "
Appelons A et B les deux opérandes considérés. Convenons de représenter leur valeur ainsi :

1 = VRAI
0 = FAUX

L'opérateur XOR est défini par sa (table de vérité), qui indique pour toutes les valeurs possibles de A et B la valeur du résultat R :

### Table de vérité de XOR

|   A   |   B   | R = A ⊕ B |
| :---: | :---: | :-------: |
|   0   |   0   |     0     |
|   0   |   1   |     1     |
|   1   |   0   |     1     |
|   1   |   1   |     0     |

Comme on peut le voir, l'opérateur logique XOR, ou OU exclusif, peut se définir par la phrase suivante :

*Le résultat est VRAI si un et un seul des opérandes A et B est VRAI*
ou
*Le résultat est VRAI si les deux opérandes A et B ont des valeurs distinctes*
ou
*Le résultat est VRAI si un nombre (impair) d'entrées est vrai (ceci est surtout applicable lorsque deux ou plusieurs opérateurs logiques XOR se cascadent (générateurs de bit de parité)*

Il se différencie de l'opérateur (OU inclusif), car il donne un résultat FAUX lorsque A et B ont simultanément la valeur VRAI. Son symbole se différencie aussi de l'opérateur OU inclusif dont le symbole est simplement un "PLUS": " + ".

En (informatique), cet opérateur peut s'utiliser pour combiner deux (bits), valant chacun 0 ou 1, en appliquant les règles définies par la table précédente, le résultat étant lui-même la valeur d'un (bit).

Avec des portes logiques ET/OU, A XOR B = (A ET non B) OU (non A ET B)
