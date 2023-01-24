const boxes = document.querySelectorAll('.box');
const sts = document.querySelector('#status');
const btn = document.querySelector('#restart');
const drwE = document.getElementById('drw');
const scoreO = document.getElementById('current--o')
const scoreX = document.getElementById('current--x')
const strttGame = document.getElementById('start');
// const result = document.getElementById('current');
//global variable........
 let x = "<img src = './images/Xmode.png'>";
 let o = "<img src = './images/oooo.png'>";
 let score1= 0;
 let score2 = 0;
 const win = [
             [0,1,2],
             [3,4,5],
             [6,7,8],
             [0,3,6],
             [1,4,7],
             [2,5,8],
             [0,4,8],
             [2,4,6]
             ];
let options = [ "","","","","","","","",""];
let currentPlayer = x;
// let running = false ;
let player = "❌";
// let player2 = "O";
init();
function init(){
boxes.forEach(box=>box.addEventListener('click',boxClick));
// btn.addEventListener('click',restartGame);
// sts.textContent= `${player} its your turn`;
running = false;
drwE.classList.remove('drw');
scoreO.innerHTML = 0;
scoreX.innerHTML = 0;
strttGame.addEventListener('click',startGame);

};
//box click
function boxClick(){
  const index = this.dataset.index;
    console.log(this.dataset.index);
    if(options[index]!=""||!running){
        return;
    }
    updateBox(this,index);
    checkWinner();

}
function updateBox(box,index){
    options[index]= player;
    box.innerHTML = currentPlayer;
 

}
function checkWinner(){
    let isWon = false;
    for(let i = 0; i< win.length;i++)
    {
        const condition = win[i];//[0,1,2,3,4,5,6,7]
        // [0]= [0,1,2],
        // [1]= [3,4,5],
        // [2]= [6,7,8],
        // [3]= [0,3,6],
        // [4]= [1,4,7],
        // [5]= [2,5,8],
        // [6]= [0,4,8],
        // [7]= [2,4,6]
        const box1 = options[condition[0]];//[0,1,2] = options[0,1,2]
        const box2 = options[condition[1]];
        const box3 = options[condition[2]];
        
    
        if(box1 == ""|| box2 == ""||box3 == ""){
            continue;
        }
        if(box1==box2 && box2==box3){
            isWon = true;
            boxes[condition[0]].classList.add('win');
            boxes[condition[1]].classList.add('win');
            boxes[condition[2]].classList.add('win');
            
            
        }
    }
   
    if(isWon){
        if(player === '❌'){
            score1++;
        scoreX.innerText = score1;
        
        }else{
            score2++;
            scoreO.innerText = score2;
            }
        

       
        //  result.innerText = (player == "❌" ) ? score2: score1;
        
    //   let src1 = (player == "⭕" ) ? score1+1: score2;
    //    let src2 = (player == "❌" ) ? score2+2: score1;
   
    //   scoreO.innerText = (player == "⭕" ) ? score1: score2;
    //   scoreX.innerText =(player == "❌" ) ? score2: score1;
    sts.innerHTML = `${player} won the round😻`;
      running = false;
     
      }else if(!options.includes("")){
 sts.innerHTML = "Game 🤐 draw";
 drwE.classList.add('drw');
 running = false;
    }else{
        changePlayer();
       
        }
 

}
btn.addEventListener('click',()=>{
    document.location.reload();
});
function startGame(){
    options = [ "","","","","","","","",""];
    currentPlayer = x;
    running =true;
    player = "❌";
    boxes.forEach(box=>{
        box.innerHTML="";
        box.classList.remove('win');
        drwE.classList.remove('drw');
        sts.textContent= `${player} its your turn😎`;
    });

}

// }
// function restartGame(){
//     options = [ "","","","","","","","",""];
//     currentPlayer = x;
//     running =true;
//     player = "❌";
//     boxes.forEach(box=>{
//         box.innerHTML="";
//         box.classList.remove('win');
//         drwE.classList.remove('drw');
//         sts.textContent= `${player} its your turn`;
//     });
// //    init();
// document.location.reload();
// }
function changePlayer(){
    player = (player == '❌') ? "⭕":"❌";
    currentPlayer = (currentPlayer == x) ? o:x;
    // sts.textContent= `${player} its your turn😍`;
    sts.textContent= (player == "❌") ? "❌its your turn😎":"⭕its your turn😍";
  
}