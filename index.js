// Code your solutions in this file
function writeCards(array, eventName) {
    let messageArray = [];
    for (let i = 0; i < array.length; i++) {
        let name = array[i];
        let message = `Thank you, ${name}, for the wonderful ${eventName} gift!`;
        messageArray.push(message);
    }
    return messageArray;
}

function countDownn(number){
    while (number >= 0){
console.log(number-=1)

    }
return number
}
countDownn(11)


function countDown(numbers){
    while (numbers>=0){
        console.log(numbers);
        numbers--;
    }
}
countDown(4);