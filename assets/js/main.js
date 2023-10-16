//-----intro_lvl_1_3---

// console.log("it works");

// let i = (1) ;
// console.log(typeof i);

// let lastName = ("Johnso");
// console.log(typeof lastName)

// let j = ("2");
// console.log (typeof j);

// let status = (true);
// console.log(typeof status);

// let hello = ("hello");
// console.log(typeof hello);

// let helloWorld = ("hello");
// console.log(typeof helloWorld);

//----intro_lvl_1_4---

// let firstName = ("John");
// console.log(typeof firstName);

// const PI  = (3.14);
// console.log(typeof PI);

// const  notannumber = (NaN);
// console.log(typeof NaN);

// const status  = (false);
// console.log(typeof false);

// let reihe     = ([1,2,3,4]);
// console.log(typeof reihe);

// const  userName   = ({name:'John', age:34});
// console.log(typeof userName);

// const  date  = (new Date(23.03));
// console.log(typeof date);

// const funktion  = (function () {});
// console.log(typeof funktion);

// const undefi = (null);
// console.log(typeof undefi);

// const  operator  = (3+2==5);
// console.log(typeof operator);

// const addieren = (3 + "3");
// console.log(typeof addieren)

//----variablen-lvl-1_6---

// let x = (34);
// x = 67;
// console.log(x);

// const y = (34);
// y = 67;         // erro weil ich eine constante nicht überschreiben kann!
// console.log(y);

//----variablen-lvl-1_5---

// const carName =("BWM");

// console.log(carName);

// const x = (150);
// console.log(x);

// const y = (50);
// console.log(y);

// const z = (x+y);
// console.log(z);

// let firstName =("John");
// let lastName =("Doe");
// let age =(35);
// console.log(firstName +" "+ lastName+" "+ age);  /(string-methodes-lvl1_11)/

//----variablen-lvl-1_7---

// let helloWorld=("Hello World");
// helloWorld=("Hallo Deutschland");
// console.log(helloWorld);
// const pi = (3.14);
// console.log(pi);
// const burjdubai = ("828m");
// console.log(burjdubai);
// const fullName=("Jan Schmidt");
// console.log(fullName);
// const eifeltower=("324m");
// console.log(eifeltower);
// const camelCase=("camelCase");
// console.log(camelCase);
// let kursstatus=(true);
// console.log(kursstatus);

//----Arithmetic operators-lvl-1_7---

// let x = (20);
// let y = (30);
// let z = (10);
// let a = (15);
// let b = (9);
// let c = (20);
// let resultOne = (60);
// let resultTwo = (480);
// let resultThree = (18);

// console.log(x+y);

// console.log(y-x);

// console.log(x*y);

// console.log(x/y);

// console.log((x*y)/z);

// console.log(a%b);

// console.log((a+b)*c);

// a++;
// console.log(a);

// b--;
// console.log(b);

// console.log(a-b);

// console.log(resultOne&resultTwo);

//----Arithmetic operators-lvl-1_12---

// let zahl = (1);
// zahl = (zahl + 1);
// zahl += (1);

// zahl++;
// console.log('Inkrement'+zahl);

// zahl--;
// console.log('Dekrement '+zahl);

//----Arithmetic operators-lvl-1_12---

// Addition
// let addition_operator = 1 + 1;
// console.log("addition: " + addition_operator);

// // Subtraktion
// let subtraktion_operator = 2 - 1;
// console.log("subtraktion: " + subtraktion_operator);

// // Multiplikation
// let multiplication_operator = 2 * 2;
// console.log("multiplication: " + multiplication_operator);

// // Division
// let division_operator = 4 / 2;
// console.log("division: " + division_operator);

// // Modul: zeigt an, was der Rest sein würde.
// let modulus_operator = 14 % 5;
// console.log("modulus: " + modulus_operator);

//----variablen-lvl-1_11---

// let x = ('Hello');
// let y = ('World');
// let z = ('Hello World');
// let n = (x+" "+y);

// console.log(x+y);
// document.write(z);

// document.write(n);

// document.write(x+y);

// const meinString = ('Ich bin Erster, ');
// const keinString = ('Ich komme auf Platz zwei');

// console.log(meinString+keinString);
// document.write(meinString+keinString);

//----output-lvl-1_4---

window.alert('Hallo Welt');
window.prompt('Bitte geben Sie Ihren Namen ein');
window.prompt("Stimmen Sie meiner Meinung zu?");

let alter = window.prompt("Gib mir bitte dein Alter:");

console.log(alter);

let b =(5);
let a =(b*5-3);
window.alert(a);

let mann=('Robert Wadlow ist der grösste Mann der Welt:');
let grosse=('2,72m');
window.confirm(mann + grosse);