// initialiser x, y, et z
// tant que 10 * x > y :
//     x = (y * z) % 10000
//     y = (3 * z) % 10000
//     z = (7 * z) % 10000 
// afficher les navi-composantes : x, y, z

// Exo 1 de pydefi

let x = 997;
let y = 312;
let z = 663;

while (10 * x > y) {
    x = (y * z) % 10000;
    y = (3 * z) % 10000;
    z = (7 * z) % 10000;

}
console.log(x, y, z);

// Exo 2 de pydefi


function sommesExoDeux(a) {
    let somme = 0;
    for (let i = 0; i < a; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            somme += i;
        }
    }
    return somme;
}
console.log(sommesExoDeux(1435));

// Exo 3 de pydefi


let aaa;
function numDeBombe(u, n) {
    for (let i = 0; i < n; i++) {
        u = (u * 13) % 1000;
    }
    return u
}

console.log(numDeBombe(797, 114))

// coupez le numéro de série en 2. Les trois premiers chiffres forment le nombre U et les 3 derniers le nombre N
// répétez N fois les opérations 4 et 5 suivantes en partant du nombre U
// multipliez ce nombre par 13
// ne conservez que les 3 derniers chiffres.


// Exo 4 de pydefi




function testBoeuf() {
    for (let blanc = 0; blanc < 1000; blanc++) {
        for (let roux = blanc + 1; roux < 1000; roux++) {
            for (let noir = roux + 1; noir < blanc * 2; noir++) {
                if ((blanc * roux * noir) === ((blanc + roux + noir) * 777) && blanc + roux + noir < 1000) {
                    console.log([blanc, roux, noir]);
                }
            }
        }
    }
}





// Exo 5 de pydefi


let etagesPommes;

function pommesAEmporter(etage) {
    let pommes = 0;
    for (let i = 0; i <= etage; i++) {
        etagesPommes = i ** 2;
        if (etagesPommes % 3 === 0) {
            pommes = etagesPommes + pommes;
        }
    }
    return pommes;
}

console.log(pommesAEmporter(50))



//exo 5 pydefi


const tableauAltitudes = [0, 20, 10, 120, 40, 170, 40, 60, 50, 100, 50, 180, 170, 180, 80, 130, 10, 150, 120, 130, 80, 170, 60, 110, 10, 60, 20, 180, 40, 50, 10, 70, 40, 190, 80, 130, 110, 190, 60, 170, 10, 200, 20, 50, 20, 180, 30, 70, 30, 130, 80, 120, 100, 140, 100, 110, 70, 170, 160, 180, 170, 200, 50, 170, 100, 130, 60, 70, 10, 180, 150, 180, 100, 140, 110, 120, 60, 100, 90, 180, 160, 190, 80, 90, 80, 90, 60, 90, 30, 80, 70, 110, 10, 110, 60, 70, 50, 180, 90, 140, 70, 160, 90, 200, 110, 160, 110, 150, 30, 100, 50, 120, 30, 160, 150, 200, 40, 120, 40, 90, 50, 170, 60, 140, 60, 150, 110, 200, 120, 130, 20, 110, 100, 170, 20, 200, 130, 180, 70, 140, 20, 30, 20, 90, 50, 80, 60, 110, 50, 120, 30, 180, 160, 170, 140, 180, 100, 170, 20, 130, 50, 100, 70, 190, 170, 200, 180, 190, 30, 50, 30, 40, 30, 150, 30, 70, 20, 180, 40, 60, 50, 190, 70, 170, 90, 150, 30, 100, 60, 100, 10, 60, 20, 150, 130, 180, 140, 190, 70, 150, 140, 180, 0];

function calculerNombPierres(testPierre) {

    let cailloux = 0;
    for (let i = 0; i < testPierre.length - 1; i++) {
        if (testPierre[i] > testPierre[i + 1]) {
            cailloux += (testPierre[i] - testPierre[i+1])/10+1; 
        }   
    }
    return cailloux; 
      
}
console.log(calculerNombPierres(tableauAltitudes))

const tableauExo = [0, 50, 40, 100, 70, 90, 0];
console.log(calculerNombPierres(tableauExo));





//exo 6 Lion

let dieuxYouss = ['ARTEMIS','ASCLEPIOS','ATHENA','ATLAS','CHARON','CHIRON','CRONOS','DEMETER','EOS','ERIS','EROS','GAIA','HADES','HECATE','HEPHAISTOS','HERA','HERMES','HESTIA','HYGIE','LETO','MAIA','METIS','MNEMOSYNE','NYX','OCEANOS','OURANOS','PAN','PERSEPHONE','POSEIDON','RHADAMANTHE', 'SELENE','THEMIS','THETIS','TRITON','ZEUS'];

// let dico = {'A': 1, 'B': 2 };

console.log(dieuxYouss);
function comparaison(word1, word2){
    return conversionMot(word1) - conversionMot(word2);
    
}

function conversionMot(word){
    let somme = 0;
    for (let i = 0 ; i < word.length ; i++){
       somme = (word.charCodeAt(i)- 64) + somme;
    }
    return somme;
}
console.log(dieuxYouss.sort(comparaison));
// console.log(conversionMot('AABAAAAA'));
// console.log('R'.charCodeAt(0) - 64);


// Exo niveau 2 MESSAGE DU WITCHER

function minuscule(truc) {
    return truc.toLowerCase();
  }

let parchemin = 'yYyYjJpPEviIzeExXZxgGwWjkKJXmMxXVvVkqQoOagxXGeEAoOpPtTntTNnNKjtTxXwWgGJunjJdDoONUspPSutTtgGTUhHqlLrRQmuUjJnwfFWNxXpzZPyYlLzZMoOnweEfFWkwpPjJWnNxXKyYjJyYfFuUicbBCcCpuUoOPoeEoOsgwWsaAsSSjJGkKeEnNSpPvVsmyYMoOsSSOxXdyqQzZmMmMYnNDd';
//   console.log(minuscule(parchemin));
//   const parchemin2 = 'mzzfiifmmppizwwzkbbyykffjjkkussbbupllqissllddiqpnrrnuuuusgkkffddgsxhhmmmmxggjaajpzzpeeppnnpncmminniwppwffcccnpnqqxxneqqhhraeffedkkdpmmparaqqqqikjjkmmooirrppoonnmyymffxxkoosskzzweffewvvyyyyjjppeviizeexxzxggwwjkkjxmmxxvvvkqqooagxxgeeaooppttnttnnnkjttxxwwggjunjjddoonusppsutttggtuhhqllrrqmuujjnwffwnxxpzzpyyllzzmoonweeffwkwppjjwnnxxkyyjjyyffuuicbbcccpuuoopoeeoosgwwsaasssjjgkkeennsppvvsmyymoosssoxxdyqqzzmmmmynndd';

function estMinuscule(mot){
    return minuscule(mot) === mot;
}

function tradWitcher(papierDeGeralt){
    let message ="";
    let i = 0;
    while (i < papierDeGeralt.length-1){
        let minuscule1 = estMinuscule(papierDeGeralt[i]);
        let majuscule2 = !estMinuscule(papierDeGeralt[i+1])
        if(minuscule1 && majuscule2 && papierDeGeralt[i] === minuscule(papierDeGeralt[i+1])){
            i += 2;
        
        }
        else{
            message += papierDeGeralt[i];
            i++;
        
        
        }
        
    }
    if( i == papierDeGeralt.length -1 ){
        message += papierDeGeralt[i];
    }

    return message;

}
  
let parchemin2 = tradWitcher(parchemin);

while ( parchemin !== parchemin2 ){
    parchemin = parchemin2;
    parchemin2 = tradWitcher(parchemin);
}
console.log(tradWitcher(parchemin));
console.log(tradWitcher('GwboOBynaABlnNecCigGdd'));
console.log(tradWitcher('MzZfiIFmMpPizwWZkbByYKfFjJkKusSbBUplLqisSlLdDIQPnrRnuUuUsgkKfFdDGSxhHmMmMXgGjaAJpzZpeEPPnNpncmMinNIwpPWfFcCCNPnqQxXNeqQhHraefFEdkKDpmMPARaqQqQikjJKmMoOIrRpPoOnNmyYMfFxXkoOsSKzZwefFEWvV yYyYjJpPEviIzeExXZxgGwWjkKJXmMxXVvVkqQoOagxXGeEAoOpPtTntTNnNKjtTxXwWgGJunjJdDoONUspPSutTtgGTUhHqlLrRQmuUjJnwfFWNxXpzZPyYlLzZMoOnweEfFWkwpPjJWnNxXKyYjJyYfFuUicbBCcCpuUoOPoeEoOsgwWsaAsSSjJGkKeEnNSpPvVsmyYMoOsSSOxXdyqQzZmMmMYnNDd'));



//Code Konami 

const codeKonami = {
'←←' : 'h',
'←↑' : '!',
'←→' : 'm',
'←↓' : 'l',
'←A' : 's',
'←B' : ',',
'↑←' : 'r',
'↑↑' : 'p',
'↑→' : 'x',
'↑↓' : 'b',
'↑A' : 'j',
'↑B' : 'v',
'→←' : 'a',
'→↑' : 'i',
'→→' : ' ', 
'→↓' : 'w',
'→A' : 'g',
'→B' : 'é',
'↓←' : 'è',
'↓↑' : 't',
'↓→' : '.',
'↓↓' : 'o',
'↓A' : 'n',
'↓B' : 'u',
'A←' : 'à',
'A↑' : '?',
'A→' : 'y',
'A↓' : 'c',
'AA' : 'f',
'AB' : 'd',
'B←' : 'q',
'B↑' : 'k',
'B→' : "'",
'B↓' : 'z',
'BA' : 'e',
'BB' : 'ê'
};


// const message = '↑↑↓↓←→←→BA';
const message = '←↓↓↓↑←←AB←↓BBA→→↓↑↓B→→→←↓B↑←→←←A→→↑B→←→↑↓AA↓↓B→→↑↓→↑→A→→A↓↓↓↑←BA←B→→→←AAAA↑←↓↓↓A↓↑→B→→←↓BA→→↑←BA→A→←↑←AB→→→↑←→↑↑→↑↓↑↓↓A→→←↑↓←↓BA→→ABBA←A→→←A↓↑→←↓↑↓BBA←A→→→→←→↓↓→←→↑→→BA↓↑→→←A↓B↑←↑B→BA↓↓B→→→←↓B→→↑↓→←←↓←↓BA↓↑→→ABBA←A→→←A↓↓↓BA↓↓↓↓B↑↑BA←A←B→→→←↑↑↑←↓←←A→→→←↑B↓↓→↑↑←→→↓↑BA↓A↓B→→↓↑BB↓↑BA→→→←↓B↑→→→→←←→→↑↑↓BA←A→→→→↓↑BA↓A↓↑→←A↓↓B←↓→←→↑↑←BA←A←B→→↓↑↓B→→BA↓A↓↑↑←BA↑←→←←A→→BA↓AAA→↑↓A→→AB→←↓A←A→→←↓→←→→↑↓→←←ABA→→ABBA←A→→↑↓→←A↓↓↑→B↑←→↑→←↓A←A→→↑↑BA↓B↑↑←↓→BBA→→ABBA→→↑←↓↓↑↓↓↓↓↑←A→→↑↓→↑↑↑↓←ABBA←A↓→→→↑↑↓B→↑←A←B→→↓↑↓B→→AB→BA↓↓↓↓B↑B↑←→↑↑←→←←A→→←↓BA→→A↓BA↑←↑BBA→←↓B←B→→B←↓BB→→↑←↓→→↓↑BA→→AA→←↓BAB↑←→←→→AB→B↓↑↑←↓B→↑↑←BA↓→→→BA↓↑→→↓ABA→→↓↑B→→←↑B→↑←ABA→→↑↑→←←A→→ABBA→→A↓↓↓←→←→BA↓AA↓BA↑←→→A←→→AB→BA↓←←→↑AAAA↑←BA↑←→→A↓BA→→←→BA←A←A→←→ABA→→A←→→←↓→←→→←→→←→↑↓A→→BA↓A→→↑↑→←↑←↓↑→←↓A↓↑→→ABBA→→←↓→←→→AA→↑↓A←B→→A↓→←↑←→→←→↓↓↓A→→↓↓↑↓↑ABAA↓↓↑→↑AA→→BA←A↓↑→→ABBA→→↓↑BA→→AB→BA↓↓↓↓B↑←→←→ABA↑←→→ABB→→←→A→↑↑←→→ABBA→→←↓→←→→←A↓↓↑←↓↑BA↓→';

const deuxParDeux = [];
for (let i = 0; i < message.length; i += 2) {
  deuxParDeux.push(message.slice(i, i + 2));
}
console.log(message);
console.log(deuxParDeux);
let messageTrad = '';

for (let deux of deuxParDeux) {
  messageTrad += codeKonami[deux];
}
console.log(messageTrad)


//Exo pydefi SW VII : Détection des stormtroopers compatissants

// let numero = i;
// dans une boucle qui demarre a 1503 a 2187 ?
// if (numero[1]) === numero[2] && numero[3] === numero[4]){}


//Les bonbons surprises
//Non... pas encore crotte de nez...


// les pref d'hermion : Aubergine, Épinards, Glace et Herbe
// if (bonbons[i] === 'Aubergine' || bonbons[i] === 'Epinards' || bonbons[i] === 'Glace' || bonbons[i] === 'Herbe') 

let compteurBonbon = 0;

bonbons =['Aubergine', 'Bouillabaisse', 'Epinards', 'Chaussettes', 'Glace', 'Foie', 'MorveDeTroll', 'OeufPourri', 'Herbe', 'Poubelle', 'Saucisse', 'Vomi'];


// while(bonbonsMelangee === true){

//     compteurBonbon++;
// }


function mixBonbon(bonbonTest) {
    for (let i = 0; i < bonbonTest.length; i += 5) {
      let bonbonTemporaire = bonbonTest[i];
      bonbonTest[i] = bonbonTest[i - 1];
      bonbonTest[i - 1] = bonbonTemporaire;
    }
    return bonbonTest;
  }

console.log(mixBonbon(bonbons));

// if (bonbons[i] === 'Aubergine' || bonbons[i] === 'Epinards' || bonbons[i] === 'Glace' || bonbons[i] === 'Herbe') 


let ouiouioui = 2;



// thor test

//https://arraythis.com/ tellement utile

let countThor = 0;

function thorCount(wordsThor){
    
    for (const word of wordsThor) {
    let isValid = true;
    const letters = ['T', 'h', 'o', 'r'];
        for (const letter of letters) {
            if (!word.includes(letter)) {
            isValid = false;
            }
            else {
                isValid = true;
            }
        }
       if (isValid) {
            return countThor++;
        }
    }
}

// console.log(thorCount(wordsThor));





// Exo pydefis Pokemon piege numerique


let resultMewtwo = [];

for (let i = 1; i < 1000; i++) {
  
  if (i % 7 === 0) {
    const sum = i.toString().split('').reduce((a, b) => a + parseInt(b), 0);
    if (sum === 11) {
      resultMewtwo.push(i);
    }
  }
}

/* 2547 2547%10 = 7 
2547 - 7 = 2540
2540/10 = 254
254%10 = 4 
254 - 4 = 250
250/10 = 25
25%10 = 5
25-5
20/10 = 2
2%10 = 2
2-2 = 0
0/10 = 0


Bossé le modulo

*/
console.log(resultMewtwo);


let undefinedEnCas = undefined;


// Exo pydefis Les pouvoirs psychiques de Psystigri
// Planquez-vous, Psystigri se déchaine






// reduce



//parseInt


function sayHello(n1 ,n2){
    console.log("je calcule avec" , n1 ,"et", n2)
    return n1 + 10*n2;
    // ne fonctionne pas du coup : console.log("j'ai trouve");
}
function fff(n1 , n2){
    return n1 + 10*n2;
}

console.log(fff(1 , fff(2,3)));
console.log(sayHello(1,2));


// Exo pierre

// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
const f1 = () => console.log(17);
f1();



// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 17.
// Utiliser la fonction f2 pour afficher 17 dans la console.
const f2 = () => 17;
console.log(f2());
// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
// Utiliser la fonction f3 pour écrire dans la console le double de 99.
const f3 = (a) => console.log(a*2);
f3(99);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
// Utiliser la fonction f4 pour écrire dans la console le double de 99.
// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
const f4 = (a) => a*2;
console.log(f4(99));
doubleA = f4(99);
console.log("test du double a" , doubleA);


// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
const f5 = (a,b) => console.log(a + b);
f5(42, 47);


// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
const f6 = (a, b) => a+b;
doubleA += f6(42, 77);
console.log("Incrémentation de double = " , doubleA);


// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
let f7 = (a,b) => (a > b) ? a + ' a plus grand' : b + ' b plus grand';

console.log(f7(10, 50));
console.log(f7(20, 10));
console.log(f7(10, 1));
console.log(f7(10000, 50));
console.log(f7(10, 500000));
console.log(f7(10, 10));



// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
let f8 = (a,b,c) => {
    if(a > b && a > c){
        return a;
    }
    if( b > a && b > c){
        return b;
    }
    if(c > a && c >b){
        return c;
    }
}

console.log(f8(10,50,80));
console.log(f8(10,80,40));
console.log(f8(80,50,10));
// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.

let f9 = (a,b) =>{ 
    for(let i = 0 ; i < a ; i++){
        console.log(b)
    }  
}

f9(10, 'roger');

let f10 = (a,b)=>{
        if(a <= 0){
            return;
        }
    console.log(b);
    f10(a - 1, b);
}

f10(2, 'Youss');




/*exo pierre suite
Écrire une fonction syracuse qui prend un nombre en entrée, et qui retourne :
- le triple du nombre + 1 si le nombre est impair
- la moitié du nombre sinon


*/
function syracuse(a){
    if(a%2 === 1){
        return a*3+1;
    }
    return a/2;
}

/*Écrire une fonction countDown qui reçoit un nombre positif en entrée, et qui affiche dans la console le compte à rebours jusqu'à 0 en partant de ce nombre.
Par exemple, l'appel à `countDown(3)` devra afficher
3
2
1
0
*/
function countDown(a){
    if(a <= 0){
        return alert('NIQUE TOI');
    }
    for (let i = a; i >= 0 ; i --){
        console.log(i);
    }
}
countDown(5);


/*
Écrire une fonction fastCooldown qui reçoit un nombre en entrée et qui affiche un compte à rebours en partant de cette valeur. La valeur sera divisée par 2 à chaque fois, et le compte à rebours s'arrête quand la valeur devient inférieur à 0.1.
Par exemple, l'appel à `fastCountDown(3)` devra afficher
3
1.5
0.75
0.375
0.1875
*/

function fastCountDown(num) {
    while (num >= 0.1) {
      console.log(num);
      num /= 2;
    }
  }

  fastCountDown(3);

/*
Écrire une fonction evenNumbers qui reçoit deux nombres en entrées et qui affiche tous les nombres pairs entre ces deux nombres.
Par exemple, l'appel à `evenNumbers(5,14)` devra afficher
6
8
10
12
*/
function evenNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }

  evenNumbers(3, 22);



/*
Sur la page wikipedia du PGCD (pas besoin de savoir ce que c'est), on peut trouver l'algorithme récursif suivant :
```
fonction euclide(a, b)
    si b = 0 alors retourner a
    sinon retourner euclide(b, a modulo b)
```
Écrire cette fonction.
*/

function euclide (a,b){
    if (b === 0){
        return a;
    }
    return euclide(b,(a%b));
}


/*
À la main, calculer `euclide(6,10)`.
*/

/* euclide (6,10)
euclide(10, (10%6))  =>10%6 = 4
euclide(10,4)
euclide (10, 4%10) 4%10 = 4
euclide(6, 6)
euclide(6, 6%6) 6%6 = 0





b ===0
donc return de a
a = 

console.log(euclide (6,10)) = 
*/

console.log(euclide(6,10));




