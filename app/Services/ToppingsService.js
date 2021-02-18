import { ProxyState } from "../AppState.js";
import Topping from "../Models/Topping.js";
import { saveState } from "../Utils/LocalStorage.js";


class ToppingsService{
    constructor() {
     ProxyState.on('toppings', saveState)
 }
    create(rawTopping)
    {
        // same same
        // let temp = ProxyState.toppings
        // let newTopping = new Topping(rawTopping)
        // temp.push(newTopping)
        // ProxyState.toppings = temp

        ProxyState.toppings = [new Topping(rawTopping), ...ProxyState.toppings]
        console.log(ProxyState.toppings)
    }
    
    delete(toppingId) {
        // let temp = ProxyState.toppings
        // let toppingIndex = temp.findIndex(p => p.id == toppingId)
        // temp.splice(toppingIndex, 1)
        // ProxyState.toppings = temp
        ProxyState.toppings = ProxyState.toppings.filter(t=> t.id != toppingId)

    }
}

export const toppingsService = new ToppingsService()