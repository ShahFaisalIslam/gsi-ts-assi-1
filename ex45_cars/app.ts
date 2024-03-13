function mfg_car(manufacturer : string, model : string,...args : any[])
{
        let car : {manufacturer : string, model : string, color? : string, windows? : number} = {
            manufacturer : manufacturer,
            model : model
        };
        for (let i = 0;i < args.length;i++) {
            switch (i) {
                case 0:
                    car.color = args[i];
                    break;
                case 1:
                    car.windows = args[i];
            }
        }
        return car;
}

let car_1 = mfg_car("Toyota", "Corolla");
let car_2 = mfg_car ("Honda","Civic","Purple");
let car_3 = mfg_car("Bugatti","Buggatati","Black",7);
console.log(car_1);
console.log(car_2);
console.log(car_3);