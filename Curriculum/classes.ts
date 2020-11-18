// eslint-disable-next-line max-classes-per-file
class Vehicle {
    // color: string;
    //
    // constructor(color: string) {
    //     this.color = color;
    // }

    constructor(public color: string) {}

    protected honk(): void {
        console.log("beep");
    }
}

const vehicle = new Vehicle("orange");
console.log(vehicle.color);
// Protected methods can only be called in child classes not even it's own instance.
// vehicle.honk();

// extends means Car takes all the method Vehicle has into itself
class CCar extends Vehicle {
    constructor(public wheels: number, color: string) {
        // super right here is a reference to  constructor of Vehicle
        // we can pass a variable into super() instead of directly passing values.
        super(color);
    }

    private drive(): void {
        console.log("vroom");
    }

    startDrivingProsess(): void {
        this.drive();
        this.honk();
    }
}

const ccar = new CCar(4, "royalblue");
ccar.startDrivingProsess();
