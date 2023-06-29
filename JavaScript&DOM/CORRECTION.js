/*
Exercice 1

À l'aide des fonctions vue ce matin,
changer le contenu text de la balise h1
par "Bienvenue"
*/
let h1 = document.querySelector("h1");
h1.innerText = "Bienvenue";
/*
Exercice 2

Ajouter la class css "super-titre"
à la balise h1
*/
h1.classList.add("super-titre");
/*
Exercice 3

Créer une balise p avec le contenue text
suivant "Comment allez-vous ?".

Ajouter cette balise p à la suite de la balise h1
(dans la balise body)
*/
 let newp = document.createElement("p");
  let newContent = document.createTextNode("Comment allez-vous ?");
  newp.appendChild(newContent);
  let currentDiv = document.getElementById("body");
  document.body.insertBefore(newp, currentDiv);

/*
Exercice 4

Créer une balise img avec l'attribut
src suivant : https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.lMmoCJ4KmcG7hN3nsIEz3AAAAA%26pid%3DApi&f=1

Ajouter cette balise image entre la h1 et la balise p
*/