// EXERCICES CODEPASSPORT SUR LE SITE DE JEREMY
//

// LES BOUCLES
//

// Exercice 1 : crer un tableau contenant les 50 premiers nombres qui contienent "2" et "3"

// note 1 : la boucle While est choisie car on ne sait pas combien d'itérations elle doit faire. On utiliser la longueur du tableau de 50 pour sortir de la boucle.
// note 2 : il a fallu transformer le nombre en string pour pouvoir utiliser la méthode de recherche de caractère indexOf

const neverTwoWithoutThree = () => {
  let array = [];
  let number = 0;

  while (array.length < 50) {
    number++;
    let newNumber = number.toString();
    if (newNumber.indexOf(2) >= 0 && newNumber.indexOf(3) >= 0) {
      array.push(newNumber);
    }
  }
  return array;
};
// console.log(neverTwoWithoutThree());
