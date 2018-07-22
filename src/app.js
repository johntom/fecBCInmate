import {PLATFORM} from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Babel SystemJS';
    config.map([
      {"route": ["", "welcome"], "name": "welcome", "moduleId": PLATFORM.moduleName("./welcome"), "nav": true, "title": "Welcome"},
      {"route": "users", "name": "users", "moduleId": PLATFORM.moduleName("./users"), "nav": true, "title": "GitHub Users"},
      {"route": "child-router", "name": "child-router", "moduleId": PLATFORM.moduleName("./child-router"), "nav": true, "title": "Child Router"},
      {"route": "combo-box", "name": "combo-box", "moduleId": PLATFORM.moduleName("./views/combo-box/combo-box"), "nav": true, "title": "ComboBox"},
      {"route": "grid", "name": "grid", "moduleId": PLATFORM.moduleName("./views/grid/grid"), "nav": true, "title": "Grid"},
      {"route": "inmates", "name": "inmates", "moduleId": PLATFORM.moduleName("./views/inmates/inmates"), "nav": true, "title": "Inmates"},
      {"route": "inmatesdata", "name": "inmatesdata", "moduleId": PLATFORM.moduleName("./views/inmates/data-form"), "nav": false, "title": "InmatesData"},
      {"route": "inmates/:id", "name": "inmates-data-form", "moduleId": PLATFORM.moduleName("./views/inmates/data-form"), "nav": false, "title": "InmatesData"},
     
     // {"route": "inmates", "name": "inmates", "moduleId": PLATFORM.moduleName("./views/inmates/inmates-section"), "nav": true, "title": "Inmates"},
      
     //  { name: 'users', route: ['users'], moduleId: 'users/users-section', nav: true, title: 'Users' },
     
      
      // {"route": "inmates/data/:id", "name": "inmates-data-form", "moduleId": PLATFORM.moduleName("../inmates/data-form"), "nav": true, "title": "Data Form" },
    //  {"route": "inmates/data", "name": "data-form", "moduleId": PLATFORM.moduleName("./inmates/data-form"),  "title": "Data Form" },
    //
    //  {"route": "inmates/data/:id", "name": "data-form", "moduleId": PLATFORM.moduleName("../inmates/data-form"),  "title": "Data Form" },
     
      // { "route": 'inmates/data/:id', name: 'inmates-data-form', moduleId: '../inmates/data-form', title: 'Data Form' ,href: 'inmate/123', },
     // {"route": "inmates/data", "name": "data-form", "moduleId": PLATFORM.moduleName("./data-form"),  "title": "Data Form" },
    
    ]);

    this.router = router;
  }
}
//   { route: 'users/:id/detail', name: 'userDetail', moduleId: 'users/detail' },
       