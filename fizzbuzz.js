// VERSION SIMPLE SANS FONCTION
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
}

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