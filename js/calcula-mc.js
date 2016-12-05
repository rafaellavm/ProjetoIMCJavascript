var tdPeso = document.getElementById('peso-2');
var tdAltura = document.getElementById('altura-2');

//textContent pega o peso
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;

// peso / altura * altura

if (altura != 0) {
    var imc = peso / (altura * altura);

    var tdIMC = document.getElementById('imc-2');
    tdIMC.textContent = imc;

    console.log(imc);
}
else{

    console.log("A altura é igual a zero");
}
