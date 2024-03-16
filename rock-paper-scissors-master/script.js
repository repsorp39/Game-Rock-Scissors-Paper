document.getElementById("rules").addEventListener('click',()=>
{
    document.getElementById("main-article").classList.add('rule-active');
    document.getElementById("rule-picture").classList.remove('invisible');
   
})

document.querySelector('.icon-close').addEventListener('click',()=>
{

    document.getElementById("main-article").classList.remove('rule-active');
    document.getElementById("rule-picture").classList.add('invisible');
   
})

/*Game Starting */
document.getElementById('rock').addEventListener('click' ,()=>
{
    document.querySelector('.step2').classList.remove('invisible');
    document.querySelector('.step1').classList.add('invisible');
    document.querySelector('.mypicker').id='rock';
    document.querySelector('.newpicking').id='rock';
    setTimeout(makingChoice ,'500');
    setTimeout(whoWin ,'1000');
    reset();
   
  
})


document.getElementById('scissors').addEventListener('click' ,()=>
{
    document.querySelector('.step2').classList.remove('invisible');
    document.querySelector('.step1').classList.add('invisible');
    document.querySelector('.mypicker').id='scissors';
    document.querySelector('.newpicking').id='scissors';
    setTimeout(makingChoice ,'500')
    setTimeout(whoWin ,'1000');
    reset();
  
})


document.getElementById('paper').addEventListener('click' ,()=>
{
    document.querySelector('.step2').classList.remove('invisible');
    document.querySelector('.step1').classList.add('invisible');
    document.querySelector('.mypicker').id='paper';
    document.querySelector('.newpicking').id='paper';
    setTimeout(makingChoice ,'500')
    setTimeout(whoWin ,'1000');
    reset();
  
})

let Monscore=document.getElementById('score');
let score=0;
/*house's choice */

function randomChoice()
{
     let randomNumber=Math.floor(Math.random()*3);
     if(randomNumber===0)
     {
       return 'rock';
     }
     else if(randomNumber===1)
     {
      return 'paper';
     }
     else{
      return 'scissors';
     }
}

function makingChoice()
{
    document.querySelector('.houseChoice').id=document.querySelector(".newhouse").id=randomChoice();
   
}
function reset()
{
    document.querySelector(".houseChoice").id="house-picking";
}


/*Winner's choice */
function iWin()
{
document.querySelector('.section3').classList.remove('invisible');
document.querySelector('.step2').classList.add('invisible');
document.querySelector('.status').style.color="rgb(76, 226, 76)";
document.querySelector('.status').innerText='YOU WIN';
score+=03;
Monscore.innerText=score;
}

function iLose()
{
document.querySelector('.section3').classList.remove('invisible');
document.querySelector('.step2').classList.add('invisible');
document.querySelector('.status').innerText='YOU LOSE';
document.querySelector('.status').style.color='rgb(255, 81, 81)';
}


function Draw()
{
document.querySelector('.section3').classList.remove('invisible');
document.querySelector('.step2').classList.add('invisible');
document.querySelector('.status').innerText='DRAW';
document.querySelector('.status').style.color=' rgb(240, 69, 240)';
score+=1;
Monscore.innerText=score;
}


let myChoice= document.querySelector('.mypicker');
let Hchoice=   document.querySelector('.houseChoice');


function whoWin()
{
  if((myChoice.id==='rock' && Hchoice.id==='scissors') || (myChoice.id==='paper' && Hchoice.id==='rock')  || (myChoice.id==='scissors' && Hchoice.id==='paper'))

  {
   iWin();
  }
  else if((myChoice.id==='rock' && Hchoice.id==='paper') || (myChoice.id==='paper' && Hchoice.id==='scissors')  || (myChoice.id==='scissors' && Hchoice.id==='rock'))

  {
iLose();
  }
  else{
    Draw();
  }
}

document.getElementById('play-again').addEventListener('click',()=>{

    document.querySelector('.section3').classList.add('invisible');
    document.querySelector('.step1').classList.remove('invisible');

})
