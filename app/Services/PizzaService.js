import { ProxyState } from "../AppState.js";
import Pizza from "../Models/Pizza.js";
import { saveState } from "../Utils/LocalStorage.js";


class PizzaService{
    constructor() {
        ProxyState.on('pizzas', saveState)
    }
 
    create(rawPizza)
    {
        // same same
        // let temp = ProxyState.pizzas
        // let newPizza = new Pizza(rawPizza)
        // temp.push(newPizza)
        // ProxyState.pizzas = temp

        ProxyState.pizzas = [new Pizza(rawPizza), ...ProxyState.pizzas]
    }
    
    delete(pizzaId) {
        // let temp = ProxyState.pizzas
        // let pizzaIndex = temp.findIndex(p => p.id == pizzaId)
        // temp.splice(pizzaIndex, 1)
        // ProxyState.pizzas = temp
        ProxyState.pizzas = ProxyState.pizzas.filter(p=> p.id != pizzaId)
        ProxyState.toppings = ProxyState.toppings.filter(t=> t.pizzaId != pizzaId)

    }
}

export const pizzaService = new PizzaService()