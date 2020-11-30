$(function (){
    //variabile dei diversi menu atendina
    //var menu = $('.menu_titolo');

    // $('.menu_titolo1').mouseenter(function () { 
    //     //console.log("cliccato");
    //     $('.tendina1').show();
    // });

    // $('.menu_titolo1').mouseleave(function (){
    //     $('.tendina1').hide();
    // });

    // $('.menu_titolo2').mouseenter(function () { 
    //     //console.log("cliccato");
    //     $('.tendina2').show();
    // });

    // $('.menu_titolo2').mouseleave(function (){
    //     $('.tendina2').hide();
    // });

    // $('.menu_titolo3').mouseenter(function () { 
    //     //console.log("cliccato");
    //     $('.tendina3').show();
    // });

    // $('.menu_titolo3').mouseleave(function (){
    //     $('.tendina3').hide();
    // });

    // $('.menu_titolo4').mouseenter(function () { 
    //     //console.log("cliccato");
    //     $('.tendina4').show();
    // });

    // $('.menu_titolo4').mouseleave(function (){
    //     $('.tendina4').hide();
    // });

    // $('.menu_titolo5').mouseenter(function () { 
    //     //console.log("cliccato");
    //     $('.tendina5').show();
    // });

    // $('.menu_titolo5').mouseleave(function (){
    //     $('.tendina5').hide();
    // });

    // $('.menu_titolo6').mouseenter(function () { 
    //     //console.log("cliccato");
    //     $('.tendina6').show();
    // });

    // $('.menu_titolo6').mouseleave(function (){
    //     $('.tendina6').hide();
    // });

    //Create due funzioni che racchiudono quelle sopra

    //Funzione che al passare del mouse fa comparire il menu a tendina
    $('.menu_titolo').mouseenter(function (){
        //console.log($(this).next());
        $(this).next().show();
    });

    //Funzione che al togliere del mouse da li chiude il menu a tendina
    $('nav > ul > li').mouseleave(function (){
        $('.menu_titolo').next().hide();
    });

});

