/*
Exercice 1 : L'addition

1. Créer une fonction 'additionner' qui accépte 2 paramètres (number)
   nommé "x" et "y"
2. Cette fonction doit retourner le résultat de x + y
3. Utilisez (à l'éxtérieur de la fonction) console.log pour afficher
   le résultat de 10 + 5
*/
function additionner(x, y){
    let res = x + y
    return res
  }
  console.log(additionner(10, 5))
  /*
  Exercice 2 : La soutraction
  
  1. Créer une fonction 'soustraire' qui accépte 2 paramètres (number)
     nommé "x" et "y"
  2. Cette fonction doit retourner le résultat de x - y
  3. Utilisez (à l'éxtérieur de la fonction) console.log pour afficher
     le résultat de 10 - 5
  */
  function soustraire(x, y){
    let res = x - y
    return res
  }
  console.log(soustraire(10, 5))
  /*
  Exercice 3 : La multiplication
  
  1. Créer une fonction 'multiplier' qui accépte 2 paramètres (number)
     nommé "x" et "y"
  2. Cette fonction doit retourner le résultat de x * y
  3. Utilisez (à l'éxtérieur de la fonction) console.log pour afficher
     le résultat de 10 * 5
  */
  function multiplier(x, y){
    let res = x * y
    return res
  }
  console.log(multiplier(10, 5))
  /*
  Exercice 4 : La division
  
  1. Créer une fonction 'diviser' qui accépte 2 paramètres (number)
     nommé "x" et "y"
  2. Cette fonction doit retourner le résultat de x / y
  3. Utilisez (à l'éxtérieur de la fonction) console.log pour afficher
     le résultat de 10 / 5
  */
  function diviser(x, y){
    let res = x / y
    return res
  }
  console.log(diviser(10, 5))
  /*
  Exercice 6 : La moyenne
  
  1. Créer une fonction moyenne qui accépte 1 paramètre (array)
     nommé "notes"
  2. Cette fonction doit calculer la moyenne de toutes les notes (vous
     pouvez utiliser nomDuTableau.length pour connaitre le nombre d'élément
     dans un tableau)
  3. Afficher dans la console la moyenne des notes : 10, 5, 18, 9
  */
  /*
  function moyenne(notes) {
      let i = 0, somme = 0, len = notes.length;
      while (i < len) {
          somme = somme + notes[i++];
  }
      return somme / len;
  }
  let notes = [0, 10, 20];
  let a = moyenne(notes);
  console.log(a)
  */
  function moyenne(notes) {
      let i = 0, somme = 0, len = notes.length;
      for (let i in notes) {
          somme = somme + notes[i];
  }
      return somme / len;
  }
  let notes = [0, 10, 20];
  let a = moyenne(notes);
  console.log(a)
  /*
  Exercice 7 : Les notes au dessus de la moyenne
  
  1. Créer une fonction "auDessusDeLaMoyenne" qui accépte un paramètre (array)
     nommé "notes" et qui retourne un tableaux de ces même notes mais uniquement
     celle au dessus de la moyenne
     
     ex:
     auDessusDeLaMoyenne([8, 7, 14, 8, 19]) => [14, 19]
     
     Vous pouvez vous aider de la fonction `monTableau.push(10)` pour
     ajouter des éléments dans un tableaux
  2. Afficher dans les console les notes au dessus de la moyenne
     permis les notes : 10, 19, 7, 8, 13
  */
  /*
  function auDessusDeLaMoyenne(note) {
      let i = 0, newtab = [], len = note.length;
          while (i < len) {
        if (10 < note[i]) {
        newtab.push(note[i++])
        } else {
          i++
        }
  }
      return newtab;
  }
  let note = [8, 7, 14, 8, 19, 20];
  let b = auDessusDeLaMoyenne(note);
  console.log(b)
  */
  function auDessusDeLaMoyenne(note) {
      let i = 0, newtab = [], len = note.length;
          for (let i in note) {
        if (10 < note[i]) {
        newtab.push(note[i++])
        } else {
          i++
        }
  }
      return newtab;
  }
  let note = [11, 8, 7, 14, 8, 19, 20];
  let b = auDessusDeLaMoyenne(note);
  console.log(b)
  
  /*
  Exercice 8 :
  
  1. Créer une fonction qui ajoute 2 à chaques notes (attention, on ne peut pas
     dépasser 20)
  */
  function ajouter2(notee) {
      let i = 0, newtabs = [], lens = notee.length;
          for (let i in notee) {
        if (notee[i] == 20) {
          newtabs.push(notee[i])
        } else if(notee[i] == 19) {
          newtabs.push(notee[i]+1)
        } else {
          newtabs.push(notee[i]+2)
        }
  }
      return newtabs;
  }
  let notee = [11, 8, 7, 14, 8, 19, 20, 10];
  let c = ajouter2(notee);
  console.log(c)
  /*
  Exercice 9 :
  En utilisant les fonction additionner et diviser au dessus,
  créer une fonction qui calcul la moyenne arrondis à l'entier le plus proche
  */
  function arrondie(notee) {
      let i = 0, somme = 0, l = not.length;
      for (let i in notes) {
          somme = additionner(somme, notes[i]);
  }
      return diviser(somme, l);
  }
  let not = [11, 8, 7, 14, 8, 19, 20, 10];
  let d = arrondie(not);
  console.log(Math.round(d))
  
  