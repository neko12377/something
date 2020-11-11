/* eslint-disable arrow-body-style,@typescript-eslint/no-unused-vars */
const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divede(a: number, b:number): number {
    return a / b;
};

const nultiply = function(a: number, b: number): number {
    return a * b;
};

const logger = (message: string): void => {
    console.log(message);
    return undefined;
    // can not return null
};

const throwError = (message: string): never => {
    throw new Error(message);
};
// means never reach the end of function

const todaysWeather = {
    date: new Date(),
    weather: "sunny",
};

// const logWeather = (forecast: { date: Date, weather: string }): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// };

// ES2015
const logWeather = ({ date, weather }: { date: Date, weather: string }) => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);

