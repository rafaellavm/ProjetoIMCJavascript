var trsPacientes = document.getElementsByClassName('paciente');

//pacienteTr é o que a função devolve
percorreArray(trsPacientes, function(pacienteTr){

    var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
    var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
    var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];

    var tdImc =
        pacienteAtual = {
            nome: tdNome.textContent
            , peso: tdPeso.textContent
            , altura: tdAltura.textContent
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

    console.log(pacienteAtual.nome);

});
