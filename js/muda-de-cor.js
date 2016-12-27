//http://www.w3schools.com/js/js_htmldom_eventlistener.asp
//mudar a cor quando passar o mouse por cima da tr
var trs = document.getElementsByTagName('tr');

percorreArray(trs,function(tr){

    tr.addEventListener('mouseover',function(){

        //setando o atributo do background
        this.setAttribute('bgcolor','grey');
    });

});
