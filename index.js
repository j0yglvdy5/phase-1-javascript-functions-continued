function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
  }

function wrapAdjective(flair = '*') {
    return function(adjective = 'a hard worker') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  const encouragingPromptFunction = wrapAdjective('!!!');
console.log(encouragingPromptFunction('a dedicated programmer'));


const emphasizeFunction = wrapAdjective('||');
console.log(emphasizeFunction('a hard worker'));

