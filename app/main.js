import ValuesController from "./Controllers/ValuesController.js";
import PizzaController from "./Controllers/PizzaController.js";
import ToppingsController from "./Controllers/ToppingsController.js";
import { loadState } from "./Utils/LocalStorage.js";

class App {
  // valuesController = new ValuesController();
  pizzaController = new PizzaController()
  toppingsController  = new ToppingsController()
}

window["app"] = new App();
loadState()