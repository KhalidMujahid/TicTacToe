let t;
let text;
let buttons = document.querySelectorAll("[data-one]");

let firstTurn = Math.floor(Math.random() * 3) ? true: false;
let player = firstTurn;

//counter for draw
let userCounter = 0;
let computerCounter = 0;



//BOT part

let combination = [
  [0,0,0],
  [0,0,0],
  [0,0,]
];


//getting the turn field from the DOM

let turn = document.querySelector(".turn");

//geting the 9 buttons
let button1 = document.querySelector(".one");
let button2 = document.querySelector(".two");
let button3 = document.querySelector(".three");
let button4 = document.querySelector(".four");
let button5 = document.querySelector(".five");
let button6 = document.querySelector(".six");
let button7 = document.querySelector(".seven");
let button8 = document.querySelector(".eight");
let button9 = document.querySelector(".nine");

startGame();

function startGame(){
  
  //looping through the buttons and adding events clicks to them
buttons.forEach(cell => {
   cell.addEventListener("click", userTurn, {once: true});
   cell.classList.add("add");
});
}

function clearGame(){
   buttons.forEach(clear => {
      clear.innerHTML = '';
   });
   
   
   button1.classList.remove("wins");
   button2.classList.remove("wins");
   button3.classList.remove("wins");
   button4.classList.remove("wins");
   button5.classList.remove("wins");
   button6.classList.remove("wins");
   button7.classList.remove("wins");
   button8.classList.remove("wins");
   button9.classList.remove("wins");
}



function userTurn(e){
   t = e.target;
   if(player){
       t.innerHTML = 'X';
       check();
       t.classList.add("blue");
       userCounter++;
       isDraw();
      player = false;
   } else {
       t.innerHTML = 'O';
       check();
       t.classList.add("reds");
       computerCounter++;
       player = true;
       isDraw();
   }
   
}

function check(){
   //checking for winners
   //x part
   //rows
   if(
       (button1.innerHTML == 'X') &&
       (button2.innerHTML == 'X') &&
       (button3.innerHTML == 'X')){
             //adding colors to the background
             turn.innerHTML = "X wins";
             turn.classList.add("red");    
             button1.classList.add("wins");
             button2.classList.add("wins");
             button3.classList.add("wins");
             //turn.innerHTML = "X wins";      
       }
   if(
       (button4.innerHTML == 'X') &&
       (button5.innerHTML == 'X') &&
       (button6.innerHTML == 'X')){
                   //adding colors to the background
             turn.innerHTML = "X wins";
             turn.classList.add("red");    
             button4.classList.add("wins");
             button5.classList.add("wins");
             button6.classList.add("wins");
             //turn.innerHTML = "X wins";    
       }
    if(
       (button7.innerHTML == 'X') &&
       (button8.innerHTML == 'X') &&
       (button9.innerHTML == 'X')){
             //adding colors to the background
             turn.innerHTML = "X wins";
             turn.classList.add("red");    
             button7.classList.add("wins");
             button8.classList.add("wins");
             button9.classList.add("wins");      
       }
     //columns
    if(
       (button1.innerHTML == 'X') &&
       (button4.innerHTML == 'X') &&
       (button7.innerHTML == 'X')){
             turn.innerHTML = "X wins";
             turn.classList.add("red");    
             button1.classList.add("wins");
             button4.classList.add("wins");
             button7.classList.add("wins");     
       }
    if(
       (button2.innerHTML == 'X') &&
       (button5.innerHTML == 'X') &&
       (button8.innerHTML == 'X')){
             turn.innerHTML = "X wins";
             turn.classList.add("red");    
             button2.classList.add("wins");
             button5.classList.add("wins");
             button8.classList.add("wins");      
       }
   if(
       (button3.innerHTML == 'X') &&
       (button6.innerHTML == 'X') &&
       (button9.innerHTML == 'X')){
             turn.innerHTML = "X wins";
             turn.classList.add("red");    
             button3.classList.add("wins");
             button6.classList.add("wins");
             button9.classList.add("wins");      
       }
     //diagonal
    if(
       (button1.innerHTML == 'X') &&
       (button5.innerHTML == 'X') &&
       (button9.innerHTML == 'X')){
             turn.innerHTML = "X wins";
             turn.classList.add("red");    
             button1.classList.add("wins");
             button5.classList.add("wins");
             button9.classList.add("wins");       
       }
    if(
       (button3.innerHTML == 'X') &&
       (button5.innerHTML == 'X') &&
       (button7.innerHTML == 'X')){
             turn.innerHTML = "X wins";
             turn.classList.add("red");    
             button3.classList.add("wins");
             button5.classList.add("wins");
             button7.classList.add("wins");       
       }
       
    //o part
       //rows
   if(
       (button1.innerHTML == 'O') &&
       (button2.innerHTML == 'O') &&
       (button3.innerHTML == 'O')){
             turn.innerHTML = "O wins";
             turn.classList.add("red");    
             button1.classList.add("wins");
             button2.classList.add("wins");
             button3.classList.add("wins");        
       }
   if(
       (button4.innerHTML == 'O') &&
       (button5.innerHTML == 'O') &&
       (button6.innerHTML == 'O')){
             turn.innerHTML = "O wins";
             turn.classList.add("red");    
             button4.classList.add("wins");
             button5.classList.add("wins");
             button6.classList.add("wins");           
       }
    if(
       (button7.innerHTML == 'O') &&
       (button8.innerHTML == 'O') &&
       (button9.innerHTML == 'O')){
             turn.innerHTML = "O wins";
             turn.classList.add("red");    
             button7.classList.add("wins");
             button8.classList.add("wins");
             button9.classList.add("wins");           
       }
     //columns
    if(
       (button1.innerHTML == 'O') &&
       (button4.innerHTML == 'O') &&
       (button7.innerHTML == 'O')){
             turn.innerHTML = "O wins";
             turn.classList.add("red");    
             button1.classList.add("wins");
             button4.classList.add("wins");
             button7.classList.add("wins");           
       }
    if(
       (button2.innerHTML == 'O') &&
       (button5.innerHTML == 'O') &&
       (button8.innerHTML == 'O')){
             turn.innerHTML = "O wins";
             turn.classList.add("red");    
             button2.classList.add("wins");
             button5.classList.add("wins");
             button8.classList.add("wins");           
       }
   if(
       (button3.innerHTML == 'O') &&
       (button6.innerHTML == 'O') &&
       (button9.innerHTML == 'O')){
             turn.innerHTML = "O wins";
             turn.classList.add("red");    
             button3.classList.add("wins");
             button6.classList.add("wins");
             button9.classList.add("wins");            
       }
     //diagonal
    if(
       (button1.innerHTML == 'O') &&
       (button5.innerHTML == 'O') &&
       (button9.innerHTML == 'O')){
             turn.innerHTML = "O wins";
             turn.classList.add("red");    
             button1.classList.add("wins");
             button5.classList.add("wins");
             button9.classList.add("wins");           
       }
    if(
       (button3.innerHTML == 'O') &&
       (button5.innerHTML == 'O') &&
       (button7.innerHTML == 'O')){
             turn.innerHTML = "O wins";
             turn.classList.add("red");    
             button3.classList.add("wins");
             button5.classList.add("wins");
             button7.classList.add("wins");            
       }
}

function isDraw(){
    if((userCounter == 4 && computerCounter == 5) || (userCounter == 5 && computerCounter == 4)){
             turn.innerHTML = " Draw";
             turn.classList.add("red");  
    }
       
}

function computerTurn(){
   text = Math.floor(Math.random() * 10);
}



