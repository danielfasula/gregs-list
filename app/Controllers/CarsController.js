import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

  function _draw(){
    let cars = ProxyState.cars
    let template = ""
    cars.forEach(car=> template += car.Template)
    document.getElementById('cars').innerHTML = template
  }

export default class CarsController{
  constructor(){
    _draw()
    ProxyState.on("cars", _draw)
  }

  createCar(event){
    event.preventDefault();
    let form = event.target
    let rawCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: parseFloat(form.price.value),
      description: form.description.value,
      imgUrl: form.imgUrl.value,
      miles: form.miles.value
    }
    carsService.createCar(rawCar)
  }

  bid(id){
    carsService.bid(id)
  }

  deleteCar(id){
    carsService.deleteCar(id)
  }

}