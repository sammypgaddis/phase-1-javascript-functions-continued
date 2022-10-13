// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

console.log(saturdayFun());
console.log(saturdayFun('go to sleep'));


// THIS IS ANOTHER EX ON HOW TO WRITE UP THE TESTING
// function saturdayFun(activity) {
//     if (activity == undefined) {
//         activity = 'roller-skate'
//     } 
//     return `This Saturday, I want to ${activity}!`;
// }

// console.log(saturdayFun());
// console.log(saturdayFun('go to sleep'));

function mondayWork(office = 'go to the office') {
    return `This Monday, I will ${office}.`;
}
console.log(mondayWork());
console.log(mondayWork('go to sleep')); 

function wrapAdjective(visualFlare) {
   return function(adjective = 'special') {
        return `You are ${visualFlare}${adjective}${visualFlare}!`;
}
}


