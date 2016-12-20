function percorreArray(trsPacientes, funcao){

    for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {

        var pacienteTrAtual = trsPacientes[posicaoAtual];

        //aqui ele passa pra função chamada o pacienteTrAtual que está sendo percorrido naquele momento
        funcao(pacienteTrAtual);
    }
}
