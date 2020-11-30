$(function (){
    //variabile dei diversi menu atendina
    var menu = $('.menu_titolo');

    menu.mouseenter(function () { 
        //console.log("cliccato");
        $(this).show();
    });

    menu.mouseleave(function (){
        $(this).hide();
    });
});

