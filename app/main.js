import CarsController from "./Controllers/CarsController.js";
import HousesController from "./Controllers/HousesController.js";
import JobsController from "./Controllers/JobsController.js"
// import ValuesController from "./Controllers/ValuesController.js";

function tab() {
  let triggerTabList = [].slice.call(document.querySelectorAll('#nav-houses-tab, #nav-cars-tab, #nav-home-tab, #nav-jobs-tab'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
}


class App {
  constructor() {
    tab()
  }
  // valuesController = new ValuesController();
  carsController = new CarsController();
  housesController = new HousesController();

  jobsController = new JobsController();
}

window["app"] = new App();
