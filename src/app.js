import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Inmate Medical'//Aurelia Babel SystemJS';
    config.map([
      {"route": ["", "welcome"], "name": "welcome", "moduleId": PLATFORM.moduleName("./welcome"), "nav": true, "title": "Welcome"},
      {"route": "grid", "name": "grid", "moduleId": PLATFORM.moduleName("./views/grid/grid"), "nav": true, "title": "Imates Grid"},
      {"route": "inmates", "name": "inmates", "moduleId": PLATFORM.moduleName("./views/inmates/inmates"), "nav": true, "title": "Inmates"},
      {"route": "inmatesdata", "name": "inmatesdata", "moduleId": PLATFORM.moduleName("./views/inmates/data-form"), "nav": false, "title": "InmatesData"},
      {"route": "inmates/:id", "name": "inmates-data-form", "moduleId": PLATFORM.moduleName("./views/inmates/data-form"), "nav": false, "title": "InmatesData"},
      // {"route": "bootstrap-select", "name": "bootstrap-select", "moduleId": PLATFORM.moduleName( "./views/bootstrap-select/bootstrap-select"), "nav": true, "title": "Bootstrap Select"}
       {"route": "ab-select", "name": "ab-select", "moduleId": PLATFORM.moduleName("./views/ab-select/ab-select"), "nav": true, "title": "AB Select"}
 
    
    ]);

    this.router = router;
  }
}
//   { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail' },
       


// import {PLATFORM} from 'aurelia-pal';

// export class App {
//   configureRouter(config, router) {
//     config.title = 'Aurelia Babel SystemJS';
//     config.map([
//       {"route": ["", "welcome"], "name": "welcome", "moduleId": PLATFORM.moduleName("./welcome"), "nav": true, "title": "Welcome"},
//       {"route": "users", "name": "users", "moduleId": PLATFORM.moduleName("./users"), "nav": true, "title": "GitHub Users"},
//       {"route": "child-router", "name": "child-router", "moduleId": PLATFORM.moduleName("./child-router"), "nav": true, "title": "Child Router"},
//       {"route": "combo-box", "name": "combo-box", "moduleId": PLATFORM.moduleName("./views/combo-box/combo-box"), "nav": true, "title": "ComboBox"},
//       {"route": "grid", "name": "grid", "moduleId": PLATFORM.moduleName("./views/grid/grid"), "nav": true, "title": "Grid"},
//       {"route": "ab-select", "name": "ab-select", "moduleId": PLATFORM.moduleName("./views/ab-select/ab-select"), "nav": true, "title": "AB Select"}
//     ]);

//     this.router = router;
//   }
// }
