//pegar todos os elementos dessa classe
//isso transforma o trsPacientes num array de trs
var trsPacientes = document.getElementsByClassName('paciente');

for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {

    //pega o tr correspondente e tudo que tem dentro dele
    var pacienteTr = trsPacientes[posicaoAtual];

    //ele vai pegar dentro da tr a td com a classe 'info-xxx', que tb devolve um array
    var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
    var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
    var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];

    var tdImc =
        //pegar todos os dados acima e criar um objeto paciente
        pacienteAtual = {
            nome: tdNome.textContent
            , peso: tdPeso.textContent
            , altura: tdAltura.textContent

            //a propriedade é uma função
            //funcao anônima, função que não tem nome
            //é uma função que só serve pro paciente, não precisa ser global
            , pegaImc: function () {
                if (this.altura != 0) {
                    var imc = this.peso / (this.altura * this.altura);
                    return imc;
                }
                else {
                    console.log("A altura é igual a zero");
                }
            }
        };

    var imc = pacienteAtual.pegaImc();

    var tdIMC = pacienteTr.getElementsByClassName('info-imc')[0];

    tdIMC.textContent = imc;

    console.log(imc);
}
