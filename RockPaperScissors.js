let userInput = 'bomb';
userInput = userInput.toLowerCase();
const getUserChoice = userInput =>
{
  if(userInput === 'rock'||userInput === 'scissors'||userInput === 'paper')
    return userInput;
  else
    console.log('error');
}
//getUserChoice('paper')
const getComputerChoice = () =>
{
  number=Math.floor(Math.random() *3);
  if(number===0)
   {
     return 'rock';
   }
  if(number===1)
    {
      return 'paper';
    }
  else
    return 'scissors';
}
const determineWinner=(userChoice,computerChoice)=>
{
  if(userInput=='bomb')
  {
    return 'Secret unlocked you won';
  }
  if (userChoice == computerChoice) {
  return 'The game is a tie!';
}
  else if(userChoice == 'rock')
    {
      if(computerChoice =='paper')
        return 'Computer wins';
      else if(computerChoice =='scissors')
        return 'you win';
    }
   else if(userChoice === 'paper')
    {
      if(computerChoice==='rock')
      	return 'you win';
      else if(computerChoice==='scissors')
        return 'Computer wins';
    }
  else if(userChoice === 'scissors')
    {
      if(computerChoice==='paper')
      	return 'you win';
      else if(computerChoice==='rock')
        return 'Computer wins';
    }
}
const playGame=() =>
{
  let userChoice=userInput;
  let computerChoice=getComputerChoice();
  console.log(userChoice,computerChoice);
  console.log(determineWinner(userChoice,computerChoice));
}
playGame();