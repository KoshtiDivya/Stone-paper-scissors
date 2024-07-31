let userScore = 0;
let compScore = 0;
const userUpScore = document.querySelector("#user-score");
const compUpScore = document.querySelector("#comp-score");;
const choices = document.querySelectorAll(".choice"); 
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-select");
const comp = document.querySelector("#comp-select");

console.log(comp.innerText);
console.log(user.innerText);
const genCompChoice = () => {
    const options = ["stone","paper","scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
}

const drawGame = () => {
    msg.innerText="Game was Draw. Play again..";
    msg.style.backgroundColor="#3c096c";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userUpScore.innerText = userScore;
        msg.innerText=`Congratualations you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#29bf12";
    
         
    }else{
        compScore++;
        compUpScore.innerText = compScore;
        msg.innerText=`Ohh, you lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#d90429"
    }
   
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice === compChoice){
        //Draw
        drawGame();
    } else {
       let userWin = "true";
       if(userChoice === "stone"){
        //paper scissors
              userWin =  compChoice === "paper" ? false : true;
       }else {
        if(userChoice === "paper"){
            //scissor stone
            userWin = compChoice === "scissors" ? false : true;
        }else {
            //userChoice : scissors 
            //compChoice : stone , paper
            userWin = compChoice === "stone" ? false : true;
        }
       }
       
    showWinner(userWin, userChoice, compChoice);
 }
    user.innerText = userChoice;
    comp.innerText = compChoice;
}


choices.forEach((choice)  =>{
    choice.addEventListener("click", () => {
            const userChoice = choice.getAttribute("id");
             playGame(userChoice);
             
    })
})

