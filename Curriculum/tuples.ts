const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
};

// type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 35];

// if we try change the type order of tuple, typescript will warn us.
pepsi[0] = 40;
pepsi[2] = "brown";

const carSpecs: [number, number] = [400, 3354];
const carStates = {
    horsepower: 400,
    weightInPounds: 3354,
};
