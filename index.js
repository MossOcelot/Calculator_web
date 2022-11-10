var h = [];
var number = 0;
var status_cal = false;

function numberClick(n) {
    var node = document.getElementById(n);
    var text = node.innerHTML;
    
    if (number == 0 || status_cal){
        number = text;
        status_cal = false
    } else {
        number = number + text;
    }
    
    document.getElementById("opp").innerHTML = number;
    
}

function clearScreen(){
    number = 0;
    h.length = 0; // clear array h
    document.getElementById("lopp").innerHTML = "";
    document.getElementById("opp").innerHTML = 0;
}

function ce(){
    number = number.slice(0, -1);
    if (number == ""){
        number = 0;
    }
    document.getElementById("opp").innerHTML = number;
}

function add(){
    if (status_cal){
        status_cal = false;
    }
    number += "+";
    document.getElementById("opp").innerHTML = number;
    
}

function minus(){
    if (status_cal){
        status_cal = false;
    }

    if (number == 0){
        number = "-";
    } else {
        number += "-";
    }

    document.getElementById("opp").innerHTML = number;
}

function multiply() {
    if (status_cal){
        status_cal = false;
    }

    number += "x";
    document.getElementById("opp").innerHTML = number;
}

function divide() {
    if (status_cal){
        status_cal = false;
    }
    number += "&div;";
    document.getElementById("opp").innerHTML = number;
    console.log(number)
}


function equal(){
    status_cal = true;
    document.getElementById("lopp").innerHTML = number  + "=";

    number = number.replaceAll("x","*");
    number = number.replaceAll("&div;","/");
    number = number.replaceAll("%","/100")
    number = String(eval(number));

    h.push(number)
    document.getElementById("opp").innerHTML = number;
    console.log(h);
}


function reCal() {
    var lastCal = document.getElementById("lopp").innerHTML;
    number = lastCal.replace("=",'')

    h.pop();
    if (h.length == 0){
        document.getElementById("lopp").innerHTML = "";
    } else {
        document.getElementById("lopp").innerHTML = h[h.length -1];
    }
    
    document.getElementById("opp").innerHTML = number;
}