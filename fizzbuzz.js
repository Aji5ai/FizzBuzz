// Version plus complexe, avec ajout des résultats en liste dans la page html avec le DOM
// Se lance dans un navigateur, pas avec node

// Correction du prof tout en bas. Utile notamment pour le bonus 2 que je n'ai pas fait. Mais pas fait les bonus 3 et 4

function loop () { // Création d'une fonction 'loop'
    let count=0; // On initialise la variable qui sert de compteur
    while (count<100){ // La boucle se lance jusqu'à count=100
        count++; // On incrémente de 1 à chaque itération de la boucle while
        const node = document.createElement("li"); // On crée un élément de liste li dans le docmument html, sous le nom de variable node
        let textnode=""; // On créé la variable dans ce scope pour qu'elle soit accessible ensuite dans les if else
        if (count%3 === 0 && count%5 ===0){ // On vérifie que le chiffre count est divisible par 3 ET 5. À vérifier avant 3 et 5 seuls sinon ils sont prioritaires.
            textnode = document.createTextNode("FizzBuzz"); // On crée une variable text node qui contient le texte FizzBuzz en noeud
        }
        else if (count % 3 === 0){ // Vérifie si count est divisible par 3
            textnode = document.createTextNode("Fizz"); // On crée une variable text node qui contient le texte Fizz en noeud
        }
        else if (count % 5 === 0){ // Vérifie si count est divisible par 5
            textnode = document.createTextNode("Buzz"); // On crée une variable text node qui contient le texte Buzz en noeud
        }
        else { // écrit la valeur de count si elle ne correspond à aucune des autres conditions.
            textnode = document.createTextNode(count); // On crée une variable text node qui contient le compteur actuel
        } 
        node.appendChild(textnode); // On ajoute le noeud text node au li créé plus tôt
        document.getElementById("myList").appendChild(node); // On ajoute node, soit le li nouvellement créé, au ul possédant un id 'myList' du document
    }
};

/* // VERSION AVEC FONCTION
// Se lance avec node

var loop = () => { //création d'un fonction anonyme dans une variable loop
    let count=0; // Initialisation du compteur à 0
    while (count<100){ // La boucle se lance jusqu'à count=100
        count++; // On incrémente de 1 à chaque itération de la boucle while
        if (((count%3) === 0 && count%5) ===0){ // On vérifie que le chiffre count est divisible par 3 ET 5. À vérifier avant 3 et 5 seuls sinon ils sont prioritaires.
            console.log('FizzBuzz') 
        }
        else if ((count % 3) === 0){ // Vérifie si count est divisible par 3
            console.log('Fizz');
        }
        else if ((count % 5) === 0){ // Vérifie si count est divisible par 5
            console.log('Buzz');
        }
        else {
            console.log(count); // écrit la valeur de count si elle ne correspond à aucune des autres conditions.
        }
    }
};
loop(); // On appelle la fonction
 */

/* // VERSION SIMPLE SANS FONCTION
// Se lance avec node

// Création du compteur (variable)
let count=0;

//Création de la boucle qui permet d'écrire les chiffres de 1 à 100
while (count<100){ // La boucle se lance jusqu'à count=100
    count++; // On incrémente de 1 à chaque itération de la boucle while
    if (((count%3) === 0 && count%5) ===0){ // On vérifie que le chiffre count est divisible par 3 ET 5. À vérifier avant 3 et 5 seuls sinon ils sont prioritaires.
        console.log('FizzBuzz') 
    }
    else if ((count % 3) === 0){ // Vérifie si count est divisible par 3
        console.log('Fizz');
    }
    else if ((count % 5) === 0){ // Vérifie si count est divisible par 5
        console.log('Buzz');
    }
    else {
            console.log(count); // écrit la valeur de count si elle ne correspond à aucune des autres conditions.
    }
} */

/* 
//Premier essai, ne fonctionne pas car pb avec le modulo
// Se lance avec node.js

// Création de la boucle qui permet d'écrire les chiffres de 1 à 100
let count=0;
while (count<100) {
    count+=1;
    switch (count) {
        case count % 3 === 0: // Le modulo ne marche pas avec les switch ! Je passe à des if
            console.log('Fizz');
            break;
        case 5:
            console.log('Buzz');
            break;
        case 15:
            console.log('FizzBuzz');
            break;
        default:
            console.log(count);
    }
} */


// Correction du prof
// Partie finale à décommenter : 129-169 (déclaration de la fonction)

// while : tant que la condition est vraie, alors
// for : pour une valeur donnée, tant que la condition sur la valeur est vrai, alors
// for .. of : pour chaque valeur d'une tableau
/*
let step = 0;
while (step < 100) {
  step = step + 1; // step++;
  // vérifier si step est un multiple de 3 : modulo
  // un nombre a est un multiple de b, si le reste de la division entière entre a et b est égal à zéro
  // a % b === 0
  if (step % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(step);
  }
}

 6 | 2
___|__
 0 | 3
   |
*/

// portée d'un variable, scope
// une variable let ou const existe entres deux accolades uniquement

// déclaration de la fonction
/* function fizzBuzz(step) { // step : prend la valeur de i passé en argument
    if (dividedBy3(step)
      && dividedBy5(step)
    ) {
      console.log(step, "FizzBuzz");
    } else if (dividedBy3(step)) {
      console.log(step, "Fizz");
    } else if (dividedBy5(step)) {
      console.log(step, "Buzz");
    } else {
      console.log(step);
    }
  }
  
  // retourne vrai si le nombre peut être divisé par 3
  // retourne faux sinon
  function dividedBy3(number) {
    // vérifie si un nombre est divisible par 3
    if (number % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  function dividedBy5(number) {
    // vérifie si un nombre est divisible par 5
    if (number % 5 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // adaptée au parcour de tableau ou incrémentation d'une variable
  for (let i = 1; i <= 100; i++) {
    // appel de la fonction
    fizzBuzz(i);
  }
   */
  /*
  // éviter les conditions imbiquées
  if () {
    if () {
  
    }
  }
  */