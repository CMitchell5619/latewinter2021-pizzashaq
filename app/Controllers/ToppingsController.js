import { toppingsService } from "../Services/ToppingsService.js";
import { ProxyState } from "../AppState.js";

export default class ToppingsController{

    constructor() {
    }

    create(event, pizzaId) {
    event.preventDefault()        
        let form = event.target
        let rawTopping = {
            title: form.title.value,
            pizzaId: pizzaId
            // pizzaId
        }
    toppingsService.create(rawTopping)       
    }

    delete(toppingId) {
        toppingsService.delete(toppingId)
    }
}