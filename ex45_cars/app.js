"use strict";
;
function manufactureCar(manufacturer, model, ...features) {
    let newCar = {
        manufacturer: manufacturer,
        model: model,
    };
    features.forEach(([key, value]) => newCar[key] = value);
    return newCar;
}
console.log(manufactureCar("Tesla", "CyberTruck", ["color", "Pink"], ["hasTurbo", false]));
