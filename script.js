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
  const userAbs = getAbsoluteDistance(user, target);
  const compAbs = getAbsoluteDistance(comp, target);
  if (user < 0 || user > 9){
    return alert("Your number is out of range.");
  } 
  if (userAbs <= compAbs){
    return true;
  } else {
    return false;
  }
}
console.log(compareGuesses(6, 8, 9));

const updateScore = winner => {
  if (winner === 'human'){
    humanScore ++;
  } else if (winner === 'computer'){
    computerScore ++;
  }
}

const advanceRound = () => {
  currentRoundNumber ++;
}
//console.log(currentRoundNumber);
