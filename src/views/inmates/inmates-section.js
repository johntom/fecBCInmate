export class InmatesSection {

 configureRouter(config, router) {
    config.map([
     // { name:'users' ,route: ':id', moduleId: './user-detail',      nav: false, title: '' }

  { name:'users' ,route: ':id', moduleId: './user-detail',      nav: false, title: '' }
// {"route": "inmates/data/:id", "name": "inmates-data-form", "moduleId": PLATFORM.moduleName("../inmates/data-form"), "nav": true, "title": "Data Form" },

    ]);
  }
}
    