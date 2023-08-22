console.log('Hello World!');

// 3 types of variables are strings, numbers and boolean

let firstName = 'Chris';
// numbers
let temperature = 100;
// boolean - true or false
let sunny = true;

// Hoorays for Arrays! Arrays store a collection of things.
// Generally store all the same data type (strings, nums, etc)
// Data in arrays are sorted. Zero indexed
let colors = ['orange', 'teal', 'green']

// .pop() will remove last item from an array
colors.pop();
// Will log the data from an array
console.table(colors);

// .push() adds new items to end of an array
colors.push('blue', 'pink');
console.table(colors);

// .unshift() adds new items to beginning of array
colors.unshift('purple');
console.table(colors);

// .shift() removes items from beginning of array
// does not require any input between parens
// Can assign removed item to a variable WHEN YOU CALL IT
let firstColorRemoved = colors.shift();
console.log(firstColorRemoved);
console.table(colors);

// Access item in array without removing it
let lastColor = colors[colors.length - 1];
console.log(lastColor);
console.table(colors);

// LOOPS
// 'for of' loop. Loops over each item in an array
// and assigns it the value to 'item'.

// document.querySelector is how you are importing things
// from javascript to your page/html
let colorList = document.querySelector('#color-list');
for (let item of colors) {
    console.log('color', item);
    colorList.innerHTML += '<div>' + item + '</div>';
}

// Traditional for loop
let temperatureValues = [72, 84, 93, 102];
// Traditional for loop does start, end, and increment
for (let index = 0; index < 4; index += 1) {
    console.log(index)
}

for (let i = 0; i < temperatureValues.length; i++) {
    let temp = temperatureValues[i];
    console.log('temp:', temp);
}

// While loops (least common type of loop)
//start
let start = 0;
//       end
while (start < 10) {
    console.log(start);
    start++; // increment
}
// 'for of' loop
for (let temp of temperatureValues) {
    console.log(temp);
}

// Data you are provided: A list of all item values (cost of items)
// Expected output: Total value of all items. Indication of whether
// the fundraising goal was met (log).

// What we'll need to do: Array of all items. 
// Add up all the items in the array by using a loop, I would think.
// Compare total of items to fundraising goal
// Log difference between goal and total number of items.

let itemList= [100, 500, 2000, 50, 1000, 750, 1000];
let currentTotal = 0;
const fundraisingGoal = 20000;
let goalReached = false;

for (let item of itemList) {
    console.log('for loop', item, currentTotal);
    currentTotal += item;
}
console.log('Final total:', currentTotal);

if (fundraisingGoal <= currentTotal) {
    goalReached = true;
    console.log('You did it!')
} else if (fundraisingGoal > currentTotal) {
    console.log("You didn't raise enough money :(");
}

console.log('Goal reached:', goalReached);


let outputDiv = document.querySelector('#output');
if (goalReached) {
outputDiv.innerHTML = 'Goal reached!!!'

} else {
    outputDiv.innerHTML = 'Goal not yet reached :(. Remaining amount: $' + (fundraisingGoal - currentTotal);
}