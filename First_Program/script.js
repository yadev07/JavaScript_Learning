let b1 = document.getElementById('1');
let b2 = document.getElementById('2');
let b3 = document.getElementById('3');
let b4 = document.getElementById('4');
let b5 = document.getElementById('5');
let b6 = document.getElementById('6');
let b7 = document.getElementById('7');
let b8 = document.getElementById('8');
let b9 = document.getElementById('9');

let chance = 'X';
let win = false;

function changeTurn(chance) {
    if(chance == 'X'){
        chance = 'O';
    }else{
        chance = 'X'
    }
    return chance;
}

function checkWin(){
    if (b1.innerText == b2.innerText && b1.innerText == b3.innerText) {
        win = b1.innerText;
    }
    else if (b4.innerText == b5.innerText && b4.innerText == b6.innerText) {
        win = b4innerText;
    }
    else if (b7.innerText == b8.innerText && b7.innerText == b9.innerText) {
        win = b7.innerText;
    }
    else if (b1.innerText == b4.innerText && b1.innerText == b7.innerText) {
        win = b1.innerText;
    }
    else if (b2.innerText == b5.innerText && b2.innerText == b8.innerText) {
        win = b2.innerText;
    }
    else if (b3.innerText == b6.innerText && b3.innerText == b9.innerText) {
        win = b3.innerText;
    }
    else if (b1.innerText == b5.innerText && b1.innerText == b9.innerText) {
        win = b1.innerText;
    }
    else if (b3.innerText == b5.innerText && b3.innerText == b7.innerText) {
        win = b3.innerText;
    }else{
        win = 'Tie';
    }
    return win;
}

function isFull(){
   let list = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
   for(let x=0 ; x<9 ; x++){
    if(list[x] == ''){
        return false;
    }
   }
   return true;
}

function Write(){
    
}

function runProgram(){
    if(isFull()){
        checkWin();
    }
}