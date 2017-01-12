//ele entende que é busca por id quando é colocado um # no nome do id
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener('click', function (event) {

    //impede o comportamento padrão. Nesse caso, impede que a página recarregue depois do botão ser clicado, já que se trata de um botão de formulário (submit)
    event.preventDefault();

    var campoNome = document.querySelector('#campo-nome');
    var campoPeso = document.querySelector('#campo-peso');
    var campoAltura = document.querySelector('#campo-altura');

    //pra pegar o valor de um INPUT usasse o value

    var pacienteNovo = "<tr class='paciente'>"
    + "<td class='info-nome'>" + campoNome.value + "</td>"
    + "<td class='info-peso'>" + campoPeso.value + "</td>"
    + "<td class='info-altura'>" + campoAltura.value + "</td>"
    + "<td class='info-imc'></td>" + "</tr>";

    //outra forma de selecionar uma tabela
    //querySelector recebe uma string que é um seletor, nesse caso é uma tagName para buscar uma tabela
    //ele sempre traz um elemento só
    //document.querySelectorAll("table") que retorna um array
    var tabela = document.querySelector("table");

    //pra adicionar pegamos a tabela que já temos e adicionamos a linha nova
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;

    campoNome.value = '';
    campoPeso.value = '';
    campoAltura.value = '';
});
