// prova collegamento file
//alert('prova prova');

//prezzo: 0,21 €/km
var prezzo = 0.21;
// km: prompt quanti km percorrerai?
var km = parseFloat(prompt('Quanti kilometri devi percorrere?'));
// anni: prompt quanti anni hai?
var anni = parseInt(prompt('Quanti anni hai?'));
// controllo che siano numeri
if (isNaN(anni&&km)) {
    console.log('Ooops...non hai digitato un numero!');
    document.getElementById(error).setAttribute('class', 'visible')
} else {
    console.log('devi percorrere ' + km + ' km');
    console.log('la tua età è ' + anni + ' anni')
}
// calcolo il prezzo standard
// prezzoStandard = prezzo * km
var prezzoStandard = prezzo * km;
console.log('Il prezzo del biglietto è: ' + prezzoStandard + '€');
document.getElementById('km').innerHTML = km;
// calcolo se hanno lo sconto e il prezzo prezzoScontato
//A- anni < 18 --> prezzoScontato = (prezzoStandard - (prezzoStandard *0.2))
var prezzoJunior = parseFloat(prezzoStandard - (prezzoStandard * 0.2));
//B- anni > 64 --> prezzoScontato = (prezzoStandard - (prezzoStandard * 0.4))
var prezzoSenior = parseFloat(prezzoStandard - (prezzoStandard * 0.4));

if (anni < 18) {
    console.log('Il prezzo con sconto Junior è: ' + prezzoJunior + '€');
    document.getElementById(prezzoJunior).writtenHTML = prezzoJunior;
} else if (anni > 64) {
    console.log('Il prezzo con sconto Senior è: ' + prezzoSenior + '€');
    document.getElementById(prezzoSenior).writtenHTML = prezzoSenior;
}
