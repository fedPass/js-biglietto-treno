// prova collegamento file
//alert('prova prova');
//prezzo: 0,21 €/km
var prezzo = 0.21;
// km: prompt quanti km percorrerai?
var km = parseFloat(prompt('Quanti kilometri devi percorrere?'));
document.getElementById('infoKm').innerHTML = km;
// anni: prompt quanti anni hai?
var anni = parseInt(prompt('Quanti anni hai?'));
// controllo che siano numeri
if (isNaN(anni && km)) {
    console.log('Ooops...non hai digitato un numero!');
    document.getElementById(error).setAttribute('class', 'visible');
} else {
    console.log('devi percorrere ' + km + ' km');
    console.log('la tua età è ' + anni + ' anni');
    document.getElementById('container').setAttribute('class', 'visible');
}
// calcolo il prezzoStandard = prezzo * km
var prezzoStandard = prezzo * km;
// calcolo se hanno lo sconto e il prezzo prezzoScontato
if (anni < 18) {
    var prezzo = parseFloat(prezzoStandard - (prezzoStandard * 0.2));
    console.log('con sconto Junior è: ' + prezzo + '€');
    document.getElementById('prezzoFinale').innerHTML = prezzo + '€ con sconto Junior applicato';
} else if (anni > 64) {
    var prezzo = parseFloat(prezzoStandard - (prezzoStandard * 0.4));
    console.log('Il prezzo con sconto Senior è: ' + prezzo + '€');
    document.getElementById('prezzoFinale').innerHTML = prezzo + '€ con sconto Senior applicato';
} else {
    console.log('Il prezzo del biglietto è: ' + prezzoStandard + '€');
    document.getElementById('prezzoFinale').innerHTML = prezzoStandard + '€';
}
