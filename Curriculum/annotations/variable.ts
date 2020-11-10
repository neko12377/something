// eslint-disable-next-line max-len
/* eslint-disable prefer-const,@typescript-eslint/no-unused-vars,no-undef-init,no-console,no-plusplus */
let apples: number = 5;

let speed: string = "km";

let hasName: boolean = false;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
// noinspection JSClassNamingConvention
class Car {

}

let car: Car = new Car();

// Object literal
const point: {x: number, y: number} = {
    x: 10,
    y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
};

// when to use annotations
// 1) Function that returns the "any" type
const json = '{"X": 10, "Y": 20}';
const coordinates: {X: number, Y: number} = JSON.parse(json);
console.log(coordinates);

// 2) When we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord = false;
for (let i = 0; i < words.length; i++) {
    if (words[i] === "green") {
        foundWord = true;
    }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, -12];
let numberAboveZero: number | boolean = false;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    } else {
        numberAboveZero = false;
    }
}
