//Déclarer deux variables avec comme valeur 4 et 5
//Créez une autre variable contenant l'addition des deux et l'afficher.
//const age1 = 5;
//let age2 = 4;

//const Addit = age1 + age2;
//console.log(Addit);


//-------------------------
//Afficher la chaine de caractère suivante en majuscule
// const team = 'avengers';
// const teamMaj = 'avengers'.toUpperCase()


// console.log(teamMaj)

//----------------------------------
//afficher la première lettre de la chaine de caractère suivante
//const team = 'avengers';
//const team1 = 'avengers' [0];

//console.log(team1)

//--------------------------------------

//afficher la chaine de caractère suivante exepté la première lettre.
//const team = 'avengers';
//const team1 = 'avengers'

//console.log(team1[1], team1[2], team1[3], team1[4], team1[5], team1[6], team1[7]);


//-----------------------------------------
//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
//const firstName = 'Tony';
//const lastName = 'Stark';

//console.log(firstName + lastName);


//------------------------------------------

//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
//=> Avengers
//const team = 'aveNgers'.toUpperCase()[0];


//const team1 = 'vengers'

//console.log(team + team1);


//---------------------------------
//2e try exercices Dim08nov
//---------------------------------

//Créez une autre variable contenant l'addition des deux et l'afficher.
//const age1 = 5;
//let age2 = 4;

//let nb1 = 4;
//let nb2 = 5;

//console.log(nb1 + nb2);

//--------------------------

//Afficher la chaine de caractère suivante en majuscule
//let team = 'avengers';

//let team = 'avengers';

//console.log(team.toUpperCase());

//-------------------------

//Afficher la première lettre de la chaine de caractère suivante
//let team = 'a';
//let teamA = 'vengers'

//console.log(team[0];

//-------------------------

//afficher la chaine de caractère suivante excepté la première lettre.
//let team = 'avengers';
//let team1 = 'vengers'

//console.log(team1);

//--------------------------------

//Afficher les deux chaines suivantes dans une seule chaine de caractère (concaténation)
//let firstName = 'Tony';
//let lastName = 'Stark';

//console.log(firstName + lastName);

//----------------------------------


//Afficher la chaine de caractère suivante avec seulement la première lettre en majuscule.
//let team = 'aveNgers';
//=> Avengers

//console.log(team.charAt(0).toUpperCase() + team.substring(1).toLowerCase());

//---------------------------------
//PAUSE CAFEW ---------------------------------------
//---------------------------------

//Les tableaux
//Déclarez un tableau avec 5 villes
//Afficher la ville à l'indice 3
//Ajouter une ville au tableau
//Supprimer la ville à l'indice 2

//const villes5 = ["Marseille", "Bordeaux", "Montpellier", "Nice", "Saint-etienne"]
//console.log(villes5);

//console.log(villes5[3]);

//villes5.push('Lille');
//console.log(villes5);



//delete villes5[2]
//console.log(villes5);


//----------------------------------

//Les boucles
//
//Comme tu le sais sans doute, pour parcourir un tableau,
//il faut boucler sur ce tableau. Parcours le tableau suivant afin de monter chaque
//élément au carré et affiche le tableau.

//const array1 = [2, 4, 8];


//for (let index = 0; index < 3; index++) {
//    console.log(array1[index] * array1[index]);
//}

//------------------------------------------

//Le tableau suivant indique les notes d'une promo lointaine !
//Calculer la moyenne de cette promo et afficher le resultat

//const promo = [12, 13, 17, 3, 14, 18];

//const reducer = (accumulator, currentValue) => accumulator + currentValue;

//console.log(promo.reduce(reducer) / 6);

//------------------------------------------

//les conditions

//Déclarez une variable "age" avec la valeur de votre choix.
//En utilisant les conditions 'if' et 'else' affichez :
//peut voter si 'age' est supérieur ou égal à 18
//ne peut pas voter si 'age' est inférieur à 18


//let age = 27;


//if (age > 18) {
//   console.log('peut voter');
//} else {
//   console.log('ne peut pas voter');
//}


//---------------------------------------------------------

// Afficher la date d'aujourd'hui avec javascript.
// En utilisant les conditions 'if' et 'else' affichez :
// "bonjour" si il est en 5h du matin et 17h
// et "bonsoir" s'il est entre 17h et 5h du matin


let date = "12 Novembre 2020";
console.log(date);

let hour = 4;


if (hour > 4) {
    console.log("bonjour");
} else(hour > 17); {
    console.log("bonsoir");
}