import { generateId } from '../Utils/GenerateId.js'

export default class House {
    constructor({ bedrooms, bathrooms, levels, imgUrl, year, price, description }) {
        this.bedrooms = bedrooms
        this.bathrooms = bathrooms
        this.levels = levels
        this.price = price
        this.description = description
        this.imgUrl = imgUrl
        this.year = year
        this.id = generateId()
    }

    get Template() {
        return /*html*/ `
         <div class="card col-2 mt-5">
  <i class="fa fa-trash fa-2x text-danger d-flex align-self-end pointer" onclick="app.housesController.deleteHouse('${this.id}')" aria-hidden="true"></i>
  <img class="card-img-top" src="${this.imgUrl}" alt="">
  <div class="card-body">
      <h4 class="card-title">${this.price} </h4>
      <p class="card-text">Year : ${this.year}</p>
      <p>${this.bedrooms} Beds - ${this.bathrooms} Baths</p>
      <p>Levels : ${this.levels}</p>
      
      <button class="btn btn-success" onclick="app.housesController.bid('${this.id}')">Bid</button>
  </div>
</div>`
    }
}