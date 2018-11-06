/* zadanie 1 */

var today = new Date();


console.log('Hello! Today is ' + today);

/*Zadanie 1 wersja 2 -  */

var date = new Date();


var day = date.getUTCDate();
var month = (date.getUTCMonth() + 1);
var year = date.getUTCFullYear();
var hour = (date.getUTCHours() + 1);
var minute = date.getUTCMinutes();

console.log('Hello! Today is ' + day + '.' + month + '.' + year + ' ' + hour + ':' + minute);

/*Zadanie 1 z *   Nie wiedziałam czy chodzi poprostu o wyświetlenie napisu
 za pomocą document.getElementById("hello").innerHTML czy dodatkowo użycie
OnClick (zasugerowałąm się linkiem bo tam był taki przykład) więc zrobiłam dwie wersje */
function myFunction() {
    document.getElementById("hello").innerHTML = 'Hello! Today is ' + day + '.' + month + '.' + year + ' ' + hour + ':' + minute;
}

document.getElementById("hi").innerHTML = "Nie do końca zrozumiałam zadanie więc zrobiłam dwie wersje " + today;

/*Zadanie nr.2 */

var array = [1, 14, 15, -31, 5, 6, 129, 9, -21, 55];

var max = Math.max.apply(null, array);

console.log(max);

var min = Math.min.apply(null, array);

console.log(min);


/*Zadanie nr 3*/


function myFunction() {
    var nrPesel = prompt("Podaj swój numer PESEL", "PESEL");
if (nrPesel !== null && nrPesel.length === 11) {
    alert("Dziękujemy twój numer PESEL to:  " + nrPesel)

} else {
    alert('podany pesel nie ma 11 znaków')
}
}