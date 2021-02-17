import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";

class CarsService {
  constructor() {
  }

  createCar(newCar) {
    let temp = ProxyState.cars
    temp.push(new Car(newCar))
    ProxyState.cars = temp
  }

  bid(id) {
    let temp = ProxyState.cars
    let car = temp.find(c => c.id === id)
    car.price += 100
    ProxyState.cars = temp
  }

  deleteCar(id) {
    let temp = ProxyState.cars
    let carIndex = temp.findIndex(car => car.id == id)
    temp.splice(carIndex, 1)
    ProxyState.cars = temp
  }
  
}

export const carsService = new CarsService()