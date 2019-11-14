// prova collegamento file
//alert('prova prova');

//prezzo: 0,21 €/km
// km: prompt quanti km percorrerai?
// anni: prompt quanti anni hai?
// prezzoStandard = prezzo * km

//A- anni < 18 --> prezzoScontato = (prezzoStandard - (prezzoStandard *20 / 100))

//B- anni > 64 --> prezzoScontato = (prezzoStandard - (prezzoStandard * 40 / 100))

var km = parseFloat(prompt('Quanti kilometri devi percorrere?'));
var anni = parseInt(prompt('Quanti anni hai?'));

if (isNaN(anni&&km)) {
    console.log('Ooops...non hai digitato un numero!')
} else {
    console.log('devi percorrere ' + km + ' km');
    console.log('la tua età è ' + anni + ' anni')
}
