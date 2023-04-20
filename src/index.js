import './style.css';


let a = 1;
console.log(typeof a);
a = '1';
console.log(typeof a);

a = String(25);
console.log(typeof a);

a = Number("45");
console.log(typeof a);

a = Number("45a");
console.log(typeof a, a);

a = Boolean('true');
console.log(typeof a);

console.log(typeof String(null), " ", String(null));
console.log(typeof String(undefined), " ", String(undefined));
console.log(typeof String(true), " ", String(true));
console.log(typeof String(false), " ", String(false));
console.log(typeof String(Symbol('test')), " ", String(Symbol('test')));
console.log(typeof Boolean({}), " ", Boolean({}));
console.log(typeof Boolean([]), " ", Boolean([]));
console.log(typeof Boolean(Symbol('test')), " ", Boolean(Symbol('test')));
console.log(typeof Boolean(function(){}), " ", Boolean(function(){}));
console.log(typeof Boolean('test'), " ", Boolean('test'));
console.log(typeof Boolean(18), " ", Boolean(18));
console.log(typeof Boolean(''), " ", Boolean(''));  //false
console.log(typeof Boolean(0), " ", Boolean(0));    //false
console.log(typeof Boolean(1), " ", Boolean(1));
console.log(typeof Boolean(2), " ", Boolean(2));
console.log(typeof Boolean(NaN), " ", Boolean(NaN));    //false
console.log(typeof Boolean(null), " ", Boolean(null));  //false
console.log(typeof Boolean(undefined), " ", Boolean(undefined));    //false
console.log(typeof Boolean(false), " ", Boolean(false));    //false
//falsy: ce type d'opérations qui renvoient false


console.log(typeof Number(null), " ", Number(null));
console.log(typeof Number(undefined), " ", Number(undefined));
console.log(typeof Number(true), " ", Number(true));
console.log(typeof Number(false), " ", Number(false));
console.log(typeof Number("22"), " ", Number("22"));
console.log(typeof Number(" 22s "), " ", Number(" 22s "));
console.log(typeof Number(""), " ", Number(""));


console.log( 2 == '2');     //il y a une conversion implicite du texte en nombre
console.log( 2 == '3');     //il y a une conversion implicite du texte en nombre

console.log( 2 === '2');

console.log(42 + '');

console.log(true + false);

console.log( 6 / '2');      //reconverti en nombre car multiplication / division (verifier)
console.log(15 + 3 + "a");

