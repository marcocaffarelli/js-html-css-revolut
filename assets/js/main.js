$(function (){
    //variabile dei diversi menu atendina
    var menu = $('.menu_titolo');

    menu.mouseenter(function () { 
        //console.log("cliccato");
        $('.menu_tendina').show();
    });

    menu.mouseleave(function (){
        $('.menu_tendina').hide();
    });
});

