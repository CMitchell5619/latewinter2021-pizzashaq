import { pizzaService } from "../Services/PizzaService.js";
import { ProxyState } from "../AppState.js";


function _draw() {
    let pizzasElem = document.getElementById("pizzas")
    let template = ""
    ProxyState.pizzas.forEach(pizza => template += pizza.Template)
    pizzasElem.innerHTML = template
}


export default class PizzaController{

    constructor() {
        ProxyState.on("pizzas", _draw)
        ProxyState.on("toppings", _draw)
    }
<i class="fa fa-shopping-cart" aria-hidden="true"></i>
    create(event) {
    event.preventDefault()        
        let form = event.target
        let rawPizza = {
            title: form.title.value
        }
    pizzaService.create(rawPizza)       
    }

    delete(pizzaId) {
        pizzaService.delete(pizzaId)
    }
}