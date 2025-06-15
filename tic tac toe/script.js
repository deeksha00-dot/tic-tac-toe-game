let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-game");
let newgameBtn = document.querySelector("#new-game") ;
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;   //playerO



const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];


const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};


boxes.forEach((box )=>{
    box.addEventListener("click", () => {
if (turnO){
box.innerText = "O"; //playerO
turnO = false; 
}else {
    box.innerText = "X"; //playerX
    turnO = true;
}
box.disabled = true; //the values will not change when you click on it the second time
checkWinner();
});
});


const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
msg.innerText= `Congrajulations! The winner is ${winner}`;
msgcontainer.classList.remove("hide");
disableBoxes();
};



const checkWinner = () => {
    for(let pattern of winpattern){
      
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};


newgameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);