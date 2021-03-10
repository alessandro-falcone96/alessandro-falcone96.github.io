var listaMultipli = [];
var input = parseInt(prompt("Inserisci un numero: "));
var n = 1;
var divisore = 1;

do {
  if ((n % divisore) == 0) {
    listaMultipli.push(divisore);
    divisore++;
  } else {
    listaMultipli = [];
    divisore = 1;
    n++;
  }
} while (listaMultipli.length <= (input - 1));
console.log(n);
alert(n + " è il numero più piccolo che può essere diviso da tutti i numeri da 1 a " + input + " senza resto");
