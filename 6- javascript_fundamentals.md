# Javascript : Les fondamentaux

Vous allez apprendre les briques fondammentales à la base du langage Javascript : les variables, les fonctions, les boucles, et les conditions.

## Ressources

- [Les bases de Javascript - MDN](https://developer.mozilla.org/fr/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

## Contexte du projet

Vous êtes developpeur dans un studio web. Pour un client, vous devez ecrire un programme qui affiche les nombres de 1 à 100.
Mais : 
- si le nombre est un multiple de 3, vous devrez afficher "Fizz" au lieu du nombre
- si c'est un multiple de 5 , vous devrez afficher Buzz" au lieu du nombre. 
- Pour les nombres qui sont un mutiple de 3 et de 5, vous devrez& afficher "FizzBuzz".

### Mise en place

Pour faire ce programme, vous allez utiliser l'IDE VScode, et devrez avoir node installer sur votre machine.
Créez un dossier dans votre répertoire de projets. Dans ce dossier, créez un fichier fizzbuzz.js
Dans ce fichier, écrivez cette ligne : 

`console.log("FizzBuzz");`

si vous ouvrez un terminal, et que vous tapez node fizzbuzz.js, vous devriez voir s'afficher "FizzBuzz" à la ligne suivante. 

>`console.log()` est une fonction du moteur de javascript, qui permet d'afficher des messages dans la console ou le terminal. 


### Un peu d'aide sur le principe

#### Variable
Le principe du programme est un compteur. Il vous faut donc définir une **variable** qui va contenir le nombre en cours : 0, puis 1, puis 2...

> Indice : Comment déclare-t-on une **variable** ? 

#### Boucle
Un fois cette variable déclarée, il vous faudra utiliser une **boucle** pour l'incrémenter 100 fois.

> Indice : Comment déclare-t-on une **boucle** ? 

#### Fonction
A chaque incrément, il vous faudra afficher la valeur de cette variable. La fonction console.log() de javascript vous y aidera.

#### Condition
Dans la boucle à chaque incrément, il vous faudra vérifier si la valeur actuelle est un multiple de 3, 5, ou les deux, et afficher "Fizz", "Buzz" ou "FizzBuzz" si c'est le cas. 

> Indice : Comment déclarer une condition ?

> Indice : Comment vérifier une égalité en javascript ?

> Indice : L'opérateur modulo (%) permet de connaitre le "reste" d'une division.  
Si a % 2 === 0, cela signifie qu'il n'y a pas de reste dans la division a / 2.  
Donc a est divisible par 2. 


### Bonus

Bonus 1 : extraire le code executé par la boucle dans une fonction

Bonus 2 : extraire le code executé dans les conditions dans des fonctions dédiées

Bonus 3 : exécutez ce code js dans une page HTML

Bonus 4 : affichez le compte dans dans la page HTML

## Modalités pédagogiques

Vous serez en autonomie pour ce brief. Essayez de chercher seul(e) les réponses à vos problèmes ! Votre programme devra se trouver dans le fichier `fizzbuzz.js`

Ajoutez des commentaires afin d'expliquer votre code.
> comment ajouter des commentaires de code en javascript ?

Une fois l'application développée, partager votre code versionné sur Gitlab.

## Modalités d'évaluation

- Un dépôt GitLab contient le code du projet
- Le programme fonctionne
- Des commentaires expliquent le code

## Livrables

Un lien vers GitLab

## Critères de performance

- La simplicité de la solution donnée (DRY, KISS)
- Le code source est documenté (commenté)
- Utiliser un outil de gestion de versions
