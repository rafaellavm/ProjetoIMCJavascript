var tdPeso2 = document.getElementById('peso-2');
var tdAltura2 = document.getElementById('altura-2');

var peso2 = tdPeso2.textContent;
var altura2 = tdAltura2.textContent;

//textContent pega o texto (peso e altura)
var paciente2 = {
    peso: peso2,
    altura: altura2
}

//pra pegar o valor existem duas formas:
//paciente.peso;
//paciente['peso'];

var tdPeso1 = document.getElementById('peso-1');
var tdAltura1 = document.getElementById('altura-1');

var peso1 = tdPeso1.textContent;
var altura1 = tdAltura1.textContent;

//textContent pega o texto (peso e altura)
var paciente1 = {
    peso: peso1,
    altura: altura1
}

var pacientes = [paciente2, paciente1];

var primeiro = pacientes[0];
var segundo = pacientes[1];

var posicaoAtual = 0;

// peso / altura * altura

while (posicaoAtual <= pacientes.length - 1) {

    if (pacientes[posicaoAtual].altura != 0) {
        var imc = pacientes[posicaoAtual].peso / (pacientes[posicaoAtual].altura * pacientes[posicaoAtual].altura);

        var tdIMC = document.getElementById('imc-2');

        tdIMC.textContent = imc;

        console.log(imc);
    } else {

        console.log("A altura é igual a zero");
    }

    posicaoAtual++;

}
