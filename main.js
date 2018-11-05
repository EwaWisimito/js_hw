var today = new Date();


console.log('Hello! Today is ' + today);

var date = new Date();


var day = date.getUTCDate();
var month = (date.getUTCMonth()+1);
var year = date.getUTCFullYear();
var hour = (date.getUTCHours()+1);
var minute = date.getUTCMinutes();

console.log('Hello! Today is '+ day + '.' + month +'.' + year +' ' + hour +':' + minute);


function myFunction() {
    document.getElementById("hello").innerHTML = 'Hello! Today is '+ day + '.' + month +'.' + year +' ' + hour +':' + minute;
}


ar array = [1,14,15,-31,5,6,129,9,-21,55];
