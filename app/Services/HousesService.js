import { ProxyState } from '../AppState.js'
import House from '../Models/House.js'

class HousesService {
    constructor() {
        console.log('hello from house services');
    }

    createHouse(newHouse) {
        let temp = ProxyState.houses
        temp.push(new House(newHouse))
        ProxyState.houses = temp
    }

    bid(id) {
        let temp = ProxyState.houses
        let house = temp.find(h => h.id == id)
        house.price += 10000
        ProxyState.houses = temp
    }

    deleteHouse(id) {
        let temp = ProxyState.houses
        let houseIndex = temp.findIndex(h => h.id == id)
        temp.splice(houseIndex, 1)
        ProxyState.houses = temp
    }
    
}

export const housesService = new HousesService()