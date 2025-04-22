let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let res = document.getElementById("reset");

let c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = 0;
let chance = 'O';

res.onclick = function(){
    reset();
    document.getElementById('result').innerText = "";
}

btn1.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c1!=0) return; c1++;
    change_chance();
    btn1.innerText = chance;
    checkWin();

   
};
btn2.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c2!=0) return; c2++;
    change_chance();
    btn2.innerText = chance;
     checkWin();
  
};
btn3.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c3!=0) return; c3++;
    change_chance();
    btn3.innerText = chance;
     checkWin();
  
};
btn4.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c4!=0) return; c4++;
    change_chance();
    btn4.innerText = chance;
    checkWin();

};
btn5.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c5!=0) return;   c5++;
    change_chance();
    btn5.innerText = chance;
    checkWin();

};
btn6.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c6!=0) return;    c6++;
    change_chance();
    btn6.innerText = chance;
    checkWin();
 

};
btn7.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c7!=0) return; c7++;
    change_chance();
    btn7.innerText = chance;
    checkWin();
  
   
};
btn8.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c8!=0) return;
    c8++;
    change_chance();
    btn8.innerText = chance;
    checkWin();
   
    
};
btn9.onclick = function () {
    if(checkWin()){
        return;
    }
    if(c9!=0) return;
    c9++;
    change_chance();
    btn9.innerText = chance;
     checkWin();
    
};


function checkWin() {
    if(btn1.innerText == btn2.innerText && btn1.innerText == btn3.innerText && btn1.innerText != ""){
        document.getElementById('result').innerText = chance + " Wins..!";
        alert(chance + " Wins..!");
        return true;
    }
    else if(btn4.innerText == btn5.innerText && btn4.innerText == btn6.innerText && btn4.innerText != ""){
        document.getElementById('result').innerText = chance + " Wins..!";
        alert(chance + " Wins..!");
        return true;
    }    
    else if(btn7.innerText == btn8.innerText && btn7.innerText == btn9.innerText && btn7.innerText != ""){
        document.getElementById('result').innerText = chance + " Wins..!";
        alert(chance + " Wins..!");
        return true;
    }
    else if(btn1.innerText == btn4.innerText && btn1.innerText == btn7.innerText && btn1.innerText != ""){
        document.getElementById('result').innerText = chance + " Wins..!";
        alert(chance + " Wins..!");
        return true;
    }
    else if(btn2.innerText == btn5.innerText && btn2.innerText == btn8.innerText && btn2.innerText != ""){
        document.getElementById('result').innerText = chance + " Wins..!";
        alert(chance + " Wins..!");
        return true;
    }
    else if(btn3.innerText == btn6.innerText && btn3.innerText == btn9.innerText && btn3.innerText != ""){
        document.getElementById('result').innerText = chance + " Wins..!";
        alert(chance + " Wins..!");
        return true;
    }
    else if(btn1.innerText == btn5.innerText && btn1.innerText == btn9.innerText && btn1.innerText != ""){
        document.getElementById('result').innerText = chance + " Wins..!";
        alert(chance + " Wins..!");
        return true;
    }
    else if(btn3.innerText == btn5.innerText && btn3.innerText == btn7.innerText && btn3.innerText != ""){
        document.getElementById('result').innerText = chance + " Wins..!";
        alert(chance + " Wins..!");
        return true;
    }
    return false; 
}

change_chance = function() {
    if(chance == 'X'){
        chance = 'O';
    }else if(chance == 'O'){
        chance = 'X';
    }
}

reset = function(){
    chance = "O";
    c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = 0;
    btn1.innerText = "";
    btn2.innerText = "";
    btn3.innerText = "";
    btn4.innerText = "";
    btn5.innerText = "";
    btn6.innerText = "";
    btn7.innerText = "";
    btn8.innerText = "";
    btn9.innerText = "";
}

isFull = function(){
    let a = document.getElementsByClassName('box');
    for(let i=0 ; i,9 ; i++){
        if(a[i].innerText == ""){
            return false;
        }
    }
    return true;
}