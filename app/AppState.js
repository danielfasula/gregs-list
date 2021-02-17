import Car from "./Models/Car.js"
import House from "./Models/House.js"
import Job from "./Models/Job.js"
import Value from "./Models/Value.js"

import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  //NOTE adding a type to your collections with jsdocs gives additional intellisense when referencing that collection.
  /**@type {Car[]} */
  cars = [new Car(
    {
      make: "Jeep",
      model: "Wrangler",
      price: 20,
      imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg',
      year: 2012,
      description: "Its nice",
      miles: 75000
    }
  ), new Car(
    {
      make: "Jeep",
      model: "Rango",
      price: 1500,
      imgUrl: 'http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg',
      year: 2012,
      description: "Its very nice",
      miles: 5000
    }
  )
  ]

  /**@type {House[]} */

  houses = [
    new House(
      {
        bedrooms: 2,
        bathrooms: 2,
        levels: 2,
        imgUrl: "http://images.thetruthaboutcars.com/2011/11/Wrangler-front-quarter.jpg",
        year: 2010,
        price: 350000,
        description: 'nice house'
      })
  ]

  /**@type {Job[]} */

  jobs = [
    new Job(
    {
      company: "BoiseCodeWorks",
      jobTitle: "Junior Software Developer",
      hours: 40,
      rate: 10000,
      description: "Very fun job. Showing a brighter future to those who are wanting to better themselves!"
    })
  ]
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
