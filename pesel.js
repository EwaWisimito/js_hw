/*Zadanie nr 3*/


function myFunction() {
    var nrPesel = prompt("Podaj swój numer PESEL", "PESEL");
    if (nrPesel !== null && nrPesel.length === 11) {
        var sum = nrPesel[0] * 1 + nrPesel[1] * 3 + nrPesel[2] * 7 + nrPesel[3] * 9 + nrPesel[4] * 1 + nrPesel[5] * 3 + nrPesel[6] * 7 + nrPesel[7] * 9 + nrPesel[8] * 1 + nrPesel[9] * 3;
        sum = sum % 10;
        sum = 10 - sum;
        controlNumber = sum % 10;
        if (nrPesel[10] == controlNumber) {
            alert('PESEL ' + nrPesel + ' jest poprawny')
        } else{
            alert('podany PESEL jest niepoprawny')
        };

    } else {
        alert('podany PESEL nie ma 11 znaków')
    }
};