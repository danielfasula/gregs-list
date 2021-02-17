import { ProxyState } from "../AppState.js"
import { housesService } from '../Services/HousesService.js'

function _draw() {
    let houses = ProxyState.houses
    let template = ''
    houses.forEach(h => template += h.Template)
    document.getElementById('houses').innerHTML = template
}

export default class HousesController {
    constructor() {
        // console.log('hello from house controller');
        _draw()
        ProxyState.on("houses", _draw)
    }

    createHouse(event) {
        event.preventDefault();
        let form = event.target
        let newHouse = {
            bedrooms: form.bedrooms.value,
            bathrooms: form.bathrooms.value,
            levels: form.levels.value,
            price: parseFloat(form.price.value),
            description: form.description.value,
            year: form.year.value,
            imgUrl: form.imgUrl.value,
        }
        housesService.createHouse(newHouse)
    } 
    bid(id) {
        housesService.bid(id)
    }

    deleteHouse(id) {
        housesService.deleteHouse(id)
    }
}