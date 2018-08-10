
export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Babel SystemJS';
    config.map([
      {"route": ["", "welcome"], "name": "welcome", "moduleId": "./views/welcome/welcome", "nav": true, "title": "Welcome"},
      {"route": "bootstrap-select", "name": "bootstrap-select", "moduleId": "./views/bootstrap-select/bootstrap-select", "nav": true, "title": "Bootstrap Select"}
      // {"route": "bootstrap-select-demo", "name": "bootstrap-select-demo", "moduleId": "./views/bootstrap-select-demo/bootstrap-select-demo", "nav": true, "title": "Bootstrap Select Demo"}
    ]);

    this.router = router;
  }
}
