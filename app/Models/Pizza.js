import { generateId } from "../Utils/GenerateId.js";
import { ProxyState } from "../AppState.js";

export default class Pizza{
    constructor({title, id = generateId()}) {
        this.title = title
        this.id = id
    }

    get Template() {
        return /*html*/`
                <div class="col-4 border rounded shadow-lg">
                    <h1>${this.title}<button class="text-danger close mt-3"
                    onclick="app.pizzaController.delete('${this.id}')"><span>&times;</span></button> </h1>
                    <h5>Toppings</h5>
                    <form onsubmit="app.toppingsController.create(event, '${this.id}')">
                        <div class="form-group">
                            <input type="text" name="title" placeholder="Enter topping title...">
                            <button type="submit">Add Topping</button>
                            <div class="row">
                            ${this.Toppings}
                            </div>
                        </div>
                    </form>
                </div>
        `
    }

    get Toppings() {
        let template = ''
        let toppings = ProxyState.toppings.filter(t => t.pizzaId == this.id)
        toppings.forEach(t => template += t.Template)
        return template
    }
}