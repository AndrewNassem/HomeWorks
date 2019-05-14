window.onload = function () {
    var IMAGE_URLS = "http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg";
    var myButton = document.getElementById("bigger_decoration");
    var data = document.getElementById("data");
    var decorate = document.getElementById("decorate");
    var pig = document.getElementById("igpay");
    var Malkovitch = document.getElementById("Malkovitch");
    pig.onclick = getPig;
    Malkovitch.onclick = malkovitch;
    decorate.addEventListener('change', function () {
        if (this.checked) {
            data.style.fontWeight = "bold";
            data.style.color = "green";
            data.style.textDecoration = "underline";
            document.body.style.background = "url('" + IMAGE_URLS + "')";
        } else {
            data.style.fontWeight = "normal";
            data.style.color = "black";
            data.style.textDecoration = "none";
            document.body.style.background = "";
        }
    });
    myButton.onclick = setTimer;

}
function setTimer() {
    setInterval(myAlert, 500)
}
function myAlert() {
    var style = window.getComputedStyle(data, null).getPropertyValue('font-size');
    data.style.fontSize = (parseFloat(style) + 1) + "pt";
}

function getPig() {
    var newWords = ""  ;
    var res = data.value.split(" ");
    for (var i = 0; i < res.length; i++) {
        newWords = newWords + " "+ translate(res[i]);
    }
    data.value = newWords.trim() ;     
}

function translate(str) {
    str = str.toLowerCase();
    var n = str.search(/[aeiuo]/);
    switch (n) {
        case 0:
            str = str + "way";
            break;
        case -1:
            str = str + "ay";
            break;
        default :
            //str= str.substr(n)+str.substr(0,n)+"ay";
            str = str.replace(/([^aeiou]*)([aeiou])(\w+)/, "$2$3$1ay");
            break;
    }
    return str;

}

function malkovitch(){
    var newWords = "" ; 
    var res =  data.value.split(" ") ; 
    for (var i = 0 ; i< res.length ; i++){
        if(res[i].length >= 5){
            newWords += " " + "Malkovich";
        }
        else{
            newWords += " "+res[i] ;
        }
    }
    data.value =  newWords.trim(); 
}

