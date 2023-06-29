/**
 * Exercice 0 :
 *
 * 1. Déclarer une variable age avec le nombre 24
 * 2. En utilisant la fonction console.log(...), afficher le contenu de la variable age
 */
 let age = 24;
 console.log(age);
 
 /*
 Exercice 1 :
 
 1. Créer une variable "newAge" qui est égale à l'age plus 10 ans
 2. Toujours avec console.log, afficher la variable "newAge"
 */
 let newage = "plus de 10 ans";
 console.log(newage);
 /*
 Exercice 2 :
 
 1. Créer une variable "notes" qui contient un tableau (array) de notes suivantes :
    - 8, 9, 10, 18
 2. Toujours avec console.log, afficher la variable "notes"
 3. Toujours avec console.log, afficher la dernière note du tableau
 */
 let notes = [8, 9, 10, 11]
 console.log(notes);
 console.log(notes[3])
 /*
 Exercice 3 :
 
 1. Créer une variable "eleve" qui contient un objet (object) avec les clefs et valeurs suivantes :
    nom => 'Dupont'
    prenom => 'Jean'
    age => 17
    notes => notes
 2. Toujours avec console.log, afficher le nom de l'éléve
 */
 let eleve = {nom: 'Dupont', prenom: 'Jean', age: 19, notes: notes}
 console.log(eleve["notes"])
 
 /*
 Exercice 4 :
 
 1. Créer une variable "salutation" qui contient la chaine de caractère suivante :
   'Bonjour {nom de l'éléve} {prénom de l'éléve}, vous avez {age de l'éléve} ans'
 
 2. Toujours avec console.log, afficher la variable "salutation"
 */
 let salutation = "Bonjour"+" "+eleve["nom"]+" "+eleve["prenom"]+",vous avez"+" "+eleve["age"]+" ans"
 console.log(salutation)
 
 /*
 Exercice 5 :
 
 1. En utilisant une condition et console.log, afficher "Vous êtes majeur" si l'éléve
    est majeur, "vous êtes mineur" dans les autres cas.
 (BONUS: Vous pouvez essayer de changer l'age de l'éléve afin de tester votre condition)
 */
     
 if (eleve["age"] < 18) {
   console.log('La personne est mineur');
 } else  {
   console.log('La personne est majeur');
 }
 
 /*
 Exercice 6 :
 
 1. En utilisant une condition et console.log, afficher "Insuffisant" si
    la dernière note de l'éléve est en dessou de 5, afficher "Vous pouvez vous améliorer"
    si la dernière note de l'éléve est en dessou de 10, afficher "Vous êtes sur la bonne voie"
    si la dernière note de l'éléves est en dessous de 15 et sinon
    afficher "Félicitation"
 */
 if (eleve.notes[3] < 5)
 {
   console.log('Insuffisant');
 } 
 else if (eleve.notes[3] < 10) 
 {
   console.log('Vous pouvez vous améliorer');
 }
 else if (eleve.notes[3] < 15) 
 {
   console.log('Vous êtes sur la bonne voie');
 }
 else  
 {
   console.log('Félicitation');
 }
 console.log(eleve.notes[3])