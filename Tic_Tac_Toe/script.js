let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let c1 = c2 = c3 = c4 = c5 = c6 = c7 = c8 = c9 = 0;
chance = 'X';


btn1.onclick = function () {
    if(c1==1) return;
    btn1.innerText = chance;
    checkWin();
    change_chance();
    c1++;
};
btn2.onclick = function () {
    if(c2==1) return;
    btn2.innerText = chance;
    checkWin();
    change_chance(); 
    c2++;
};
btn3.onclick = function () {
    if(c3==1) return;
    btn3.innerText = chance;
    checkWin();
    change_chance();
    c3++;
};
btn4.onclick = function () {
    if(c4==1) return;
    btn4.innerText = chance;
    checkWin();
    change_chance();
    c4++;
};
btn5.onclick = function () {
    if(c5==1) return;
    btn5.innerText = chance;
    checkWin();
    change_chance();
    c5++;
};
btn6.onclick = function () {
    if(c6==1) return;
    btn6.innerText = chance;
    checkWin();
    change_chance();
    c6++;
};
btn7.onclick = function () {
    if(c7==1) return;
    btn7.innerText = chance;
    checkWin();
    change_chance();
    c7++;
};
btn8.onclick = function () {
    if(c8==1) return;
    btn8.innerText = chance;
    checkWin();
    change_chance();
    c8++;
};
btn9.onclick = function () {
    if(c9==1) return;
    btn9.innerText = chance;
    checkWin();
    change_chance();
    c9++;
};


function checkWin() {
    if(btn1.innerText == btn2.innerText && btn1.innerText == btn3.innerText && btn1.innerText != ""){
        document.getElementById('result').innerText = chance + "Wins..!";
    }
    else if(btn4.innerText == btn5.innerText && btn4.innerText == btn6.innerText && btn4.innerText != ""){
        document.getElementById('result').innerText = chance + "Wins..!";
    }    
    else if(btn7.innerText == btn8.innerText && btn7.innerText == bt9.innerText && btn9.innerText != ""){
        document.getElementById('result').innerText = chance + "Wins..!";
    }
    else if(btn1.innerText == btn4.innerText && btn1.innerText == btn7.innerText && btn7.innerText != ""){
        document.getElementById('result').innerText = chance + "Wins..!";
    }
    else if(btn2.innerText == btn5.innerText && btn2.innerText == btn8.innerText && btn8.innerText != ""){
        document.getElementById('result').innerText = chance + "Wins..!";
    }
    else if(btn3.innerText == btn6.innerText && btn3.innerText == btn9.innerText && btn9.innerText != ""){
        document.getElementById('result').innerText = chance + "Wins..!";
    }
    else if(btn1.innerText == btn5.innerText && btn1.innerText == btn9.innerText && btn9.innerText != ""){
        document.getElementById('result').innerText = chance + "Wins..!";
    }
    else if(btn3.innerText == btn5.innerText && btn3.innerText == btn7.innerText && btn7.innerText != ""){
        document.getElementById('result').innerText = chance + "Wins..!";
    }
    
}
function change_chance() {
    if(chance == 'X'){
        chance = 'O';
    }else if(chance == 'O'){
        chance = 'X';
    }
}