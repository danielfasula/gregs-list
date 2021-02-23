import { ProxyState } from "../AppState.js";
import Car from "../Models/Car.js";
import { api } from './AxiosService.js'

class CarsService {
  constructor() {
    this.getCars()
  }

  async getCars() {
    try {
      const res = await api.get('cars')
      ProxyState.cars = res.data.map(rawCarData => new Car(rawCarData))
    } catch (error) {
      console.error(error);
    }
  }

  async createCar(newCar) {
    try {
      const res = await api.post('cars', newCar)
      ProxyState.cars = [...ProxyState.cars, new Car(res.data)]
    } catch (error) {
      console.error(error);
    }
    swal({
      text: 'New Car Listing Added!',
      icon: 'success'
    })
  }

  async bid(id) {
    let car = ProxyState.cars.find(c => c.id === id)
    car.price += 100
    try {
      await api.put('cars/' + id, car)
      ProxyState.cars = ProxyState.cars
    } catch (error) {
      console.error(error);
    }
    swal({
      text: 'Your bid has been sent!',
      icon: 'success'
    })
  }

  async deleteCar(id) {
    swal({
      title: 'Are you sure you want to delete this listing?',
      buttons: ['Nvm, still wanna sell it', 'Get Rid of It!'],
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          const res = await api.delete('cars/' + id)
          this.getCars()
        } catch (error) {
          console.error(error);
        }
        swal({
          text: 'Deleted Listing!',
          icon: 'error'
        })
      } else {
        swal('This listing is unharmed by your actions')

      }
    })
  }



}

export const carsService = new CarsService()