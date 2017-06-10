/**
 * Created by ussignalmitchelldawkins on 7/10/16.
 */
$( document ).ready(function() {

    var names = [
        'Dex',
        'Hersch',
        'Noah',
        'Adrian',
        'Diaz',
        'Werger',
        'Trahan',
        'Commish'
    ];

    var bums = [
        'James',
        'Thaddeus',
        'Thomas'
    ];

    var pick = 2;
    var chooser = $('#chooser');
    var min,x,bNames,bnum,num,chosenName;
    var max = 8;
    var list = $('#list');
    var listOfName = "Name: Sarah Pick: 1";
    x =0;

    $('#click').on('click',function(){
        min = 0;
        num = Math.floor(Math.random() * (max - min + 1)) + min;
        if(num == names.length) {
            num --;
        }

        chosenName = names[num];
        chooser.html('Name:' + chosenName + '<br> Pick: ' + pick);
        console.log(num + ' LENGTH: '+ max);

        if(pick == 10 || pick == 11 || pick == 12)
        {
            if(x == 2) {
                bnum = Math.floor(Math.random() * ((0) - 0 + 1)) + 0;
            } else {
                bnum = Math.floor(Math.random() * ((1) - 0 + 1)) + 0;
            }
            chosenName = bums[bnum];
            bNames="<br>" + "Name: " + chosenName + " Pick: " + pick;
            listOfName += bNames;
            list.html(listOfName);
            bums.splice(bnum,1);
            x++;

        }else{
            listOfName += "<br> Name: " + chosenName + " Pick: " + pick;
            list.html(listOfName);
        }

        pick ++;
        names.splice(num,1);
        max = names.length;
    });
});