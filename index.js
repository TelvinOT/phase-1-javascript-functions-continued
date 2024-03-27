function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}


const saturdayActivity = saturdayFun();
console.log(saturdayActivity); // Output: This Saturday, I want to roller-skate!

const mondayActivity = mondayWork();
console.log(mondayActivity); // Output: This Monday, I will go to the office.

const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction()); // Output: You are !!!special!!!.
console.log(encouragingPromptFunction("awesome")); // Output: You are !!!awesome!!!.
