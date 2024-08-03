interface Car {
    manufacturer : string,
    model : string,
    [optionalFeatures: string] : any
};

function manufactureCar(manufacturer : string, model: string, ...features: [string,any][]) : Car {
    let newCar : Car = {
        manufacturer: manufacturer,
        model: model,
            
    };

    features.forEach(([key,value])=>newCar[key] = value)
    return newCar;
}

console.log(manufactureCar("Tesla","CyberTruck",["color","Pink"],["hasTurbo",false]));