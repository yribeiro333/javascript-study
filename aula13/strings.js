//               01234567
let umaString = "Um texto";

console.log(umaString.indexOf('o', 1));
console.log(umaString.lastIndexOf('o', 3));
console.log(umaString.match(/[a-z]/g));
console.log(umaString.search(/x/));
console.log(umaString.replace(/Um/, 'Outra'));
console.log(umaString.length);
console.log(umaString.slice(2, 6));
console.log(umaString.split(' ', 3));
console.log(umaString.toUpperCase());
console.log(umaString.toLowerCase());
console.log(umaString.concat(' em', ' um', ' lindo dia'));
console.log(umaString + ' em um lindo dia');
console.log(`${umaString} em um lindo dia`);