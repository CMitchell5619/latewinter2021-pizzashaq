import Value from "./Models/Value.js"
import Pizza from "./Models/Pizza.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Topping from "./Models/Topping.js";

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  /** @type {Pizza[]}*/ 
  pizzas = []
    /** @type {Topping[]}*/ 
  toppings = []
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
