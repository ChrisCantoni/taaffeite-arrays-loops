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
for (let item of colors) {
    console.log('color', item);
}

