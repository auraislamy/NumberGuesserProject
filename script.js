let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }

const getAbsoluteDistance = (num1, num2) => {
    return Math.abs(num1 - num2);
  }
  
  const compareGuesses = (user, comp, target) => { 
    if (user < 0 || user > 9){
      return alert('Your number is out of range');
    }
  
    const absUser = getAbsoluteDistance(user - target);
    const absComp = getAbsoluteDistance(comp - target);
    if (absComp >= absUser){
      return true;
    } else {
      return false;
    }
  };
  
  const updateScore = score => {
    if (score === 'human'){
      humanScore ++;
    }
    if (score === 'computer'){
      computerScore ++;
    }
  };
  
  
  const advanceRound = () =>{
    currentRoundNumber ++;
  };
  
  
  
  //console.log(compareGuesses(10, 8, 9));
