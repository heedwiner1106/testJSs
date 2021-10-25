$(document).ready(function(){
    var arr = [];
    var diemm = {};
    for(let i = 0; i<5;i++){
        var namee = "Hoc sinh " + i;
        diemm.name = namee; 
        diemm.diem = Math.floor(Math.random() * 11);
        arr.push(diemm);
        console.log(arr[i].name +': '+ arr[i].diem);
        console.log(diemm.name +': '+ diemm.diem);
    }
    console.log(diemm);
    console.log(arr);
    function show(){
        $('p').remove();
        for(let i = 0; i< arr.length;i++){
            $('body').append('<p>'+arr[i].name+': '+arr[i].diem+'</p><br>')
        }
    }
    show();
    $('#create').click(function(){
        var name = $('#name').val();
        var score = $('#score').val();
        diemm.name = name;
        diemm.diem = score;
        arr.push(diemm);
        show();
    })
})