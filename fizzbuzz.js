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
}