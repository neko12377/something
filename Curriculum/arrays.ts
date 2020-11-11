/* eslint-disable @typescript-eslint/no-unused-vars */
const carMakers: string[] = ["ford", "toyota", "chevy"];

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ["f150"],
    ["corolla"],
    ["camaro"],
];

// Help with inference when extracting values
// @ts-ignore
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with `map`
carMakers.map<string>((car: string): string => car.toUpperCase());
// because of knowing the type of argument typescript can auto complete with correspond methods

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"];
importantDates.push("2030-10-12");
importantDates.push(new Date());
