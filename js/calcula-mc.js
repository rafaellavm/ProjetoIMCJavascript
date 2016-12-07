var tdPeso = document.getElementById('peso-2');
var tdAltura = document.getElementById('altura-2');

//textContent pega o texto (peso e altura)
var paciente = {
    peso: tdPeso.textContent,
    altura: tdAltura.textContent
}

//pra pegar o valor existem duas formas:
//paciente.peso;
//paciente['peso'];

// peso / altura * altura

if (paciente.altura != 0) {
    var imc = paciente.peso / (paciente.altura * paciente.altura);

    var tdIMC = document.getElementById('imc-2');
    tdIMC.textContent = imc;

    console.log(imc);
} else {

    console.log("A altura é igual a zero");
}
