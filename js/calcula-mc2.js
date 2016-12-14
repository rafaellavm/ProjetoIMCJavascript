//pegar todos os elementos dessa classe
//isso transforma o trsPacientes num array de trs
var trsPacientes = document.getElementsByClassName('paciente');

// peso / altura * altura


for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {

    //pega o tr correspondente e tudo que tem dentro dele
    var pacienteTr = trsPacientes[posicaoAtual];
    console.log(pacienteTr);
    console.log(pacienteTr.getElementsByClassName('info-nome'));

    //ele vai pegar dentro da tr a td com a classe 'info-xxx', que tb devolve um array
    var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
    var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
    var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];
    var tdImc =
        //pegar todos os dados acima e criar um objeto paciente
        paciente = {
            nome: tdNome.textContent,
            peso: tdPeso.textContent,
            altura: tdAltura.textContent
        };

    if (paciente.altura != 0) {

        var imc = paciente.peso / (paciente.altura * paciente.altura);

        var tdIMC = pacienteTr.getElementsByClassName('info-imc')[0];

        tdIMC.textContent = imc;

        console.log(imc);

    } else {

        console.log("A altura é igual a zero");
    }
}
