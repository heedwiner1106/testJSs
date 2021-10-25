$(document).ready(function(){
    $('.a').keyup(function(){
        var start = $('#start').val();
        var end = $('#end').val();
        var value = end - start;
        $('#value').val(value);
        if(value < 0) $('#value').val("wrong!");
    })
    $('#cal').click(function(){
        var value = $('#value').val();
        var price;
        if(value <= 50) price = 1480;
        else if(value > 50 && value <=100) price = 1500;
        else price = 1800;
        var total = value*price*110/100;
        $('#total').val(total);
    })
    $('#clear').click(function(){
        $('#start').val("");
        $('#end').val("");
        $('#total').val("");
    })
})