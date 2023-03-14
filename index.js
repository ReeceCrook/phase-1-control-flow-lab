function scuberGreetingForFeet(amount){
  // Write your code here!
  if (amount <= 400){
    return 'This one is on me!'
  }
  else if (amount >= 400){
    if (amount <= 2000){
      return 'That will be twenty bucks.'
    }
  }
  else (amount >= 2000);{
    if (amount >= 2500){
      return 'No can do.'
    }
    return 'I will gladly take your thirty bucks.'
  }
  

}
scuberGreetingForFeet(199)


function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC' ? 'Ok, sounds good.' : 'No go.')
}


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      return "Thank you so much."
      break;
    case "not as generous":
      return "Thank you."
      break;
    default:
      return "Bye."
      break;
  }


}