const options = document.querySelectorAll(".options");
 let cscore = 0;
 let pscore = 0;

options.forEach((option) => {
    option.addEventListener("click", function(){
        const pInput = this.value;

        const cOptions = ["rock","paper","scissors"];
        const cInput = cOptions[Math.floor(Math.random()*cOptions.length)];
        console.log(cInput)
        playGame(cInput,pInput);
        updateScore();
       announce()
    });
})

const playGame = (cInput, pInput) =>{
    if (pInput === cInput){
        document.getElementById("result").textContent =("is a tie");
        return;
    }
    if (pInput === "rock"){
        if (cInput === "scissors"){
            document.getElementById("result").textContent =("you win")
            pscore++
        }
        else{
            document.getElementById("result").textContent =("computer wins")
            cscore++
        }
    }

  else if (pInput === "paper"){
       if (cInput === "rock"){
          document.getElementById("result").textContent =("you win")
          pscore++
        }
        else{
           document.getElementById("result").textContent =("computer wins")
           cscore++
        }
    }
   else if (pInput === "scissors"){
        if (cInput === "paper"){
            document.getElementById("result").textContent =("you win")
            pscore++
        }
        else{
            document.getElementById("result").textContent =("computer wins")
            cscore++
        }
    }
}
function updateScore(){
    document.getElementById("cscore").textContent = cscore;
    document.getElementById("pscore").textContent = pscore;
}
function announce(){
    if (cscore === 5){
        document.getElementById("result").textContent =("you lose!")
    }
    if (pscore === 5){
        document.getElementById("result").textContent =("you win!")
    }
    if (cscore === 5 || pscore === 5){
        cscore = pscore =""
    }
}
