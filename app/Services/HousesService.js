import { ProxyState } from '../AppState.js'
import House from '../Models/House.js'
import { api } from './AxiosService.js'

class HousesService {
    constructor() {
        this.getHouses()
    }

    async getHouses() {
        try {
            const res = await api.get('houses')
            ProxyState.houses = res.data.map(rawHouseData => new House(rawHouseData))
        } catch (error) {
            console.error(error);
        }
    }

    async createHouse(newHouse) {
        try {
            const res = await api.post('houses', newHouse)
            ProxyState.houses = [...ProxyState.houses, new House(res.data)]
        } catch (error) {
            console.error(error);
        }
        swal({
            text: 'New House Listing Added!',
            icon: 'success'
        })
    }

    async bid(id) {
        let house = ProxyState.houses.find(h => h.id == id)
        house.price += 10000
        try {
            await api.put('houses/' + id, house)
            ProxyState.houses = ProxyState.houses
        } catch (error) {
            console.error(error);
        }
        swal({
            text: 'Your bid has been sent!',
            icon: 'success'
        })
    }

    async deleteHouse(id) {

        swal({
            title: 'Are you sure you want to delete this listing?',
            buttons: ['Nvm, still wanna sell it', 'Get Rid of It!'],
            dangerMode: true,
        }).then(async (willDelete) => {
            if (willDelete) {
                try {
                    await api.delete('houses/' + id)
                    this.getHouses()
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

export const housesService = new HousesService()