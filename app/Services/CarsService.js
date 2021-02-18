import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";

class CarsService {
  constructor() {
  }

  createCar(newCar) {
    // let temp = ProxyState.cars
    // temp.push(new Car(newCar))
    // ProxyState.cars = temp
    ProxyState.cars = [...ProxyState.cars, new Car(newCar)]
  }

  bid(id) {
    let temp = ProxyState.cars
    let car = temp.find(c => c.id === id)
    car.price += 100
    ProxyState.cars = temp
  }

  deleteCar(id) {
    ProxyState.cars = ProxyState.cars.filter(c => c.id != id)

    // let temp = ProxyState.cars
    // let carIndex = temp.findIndex(car => car.id == id)
    // temp.splice(carIndex, 1)
    // ProxyState.cars = temp
 
    // one liner

  }

}

export const carsService = new CarsService()