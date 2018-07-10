import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';

@inject(HttpClient)
export class Imates {
  heading = 'X Imates';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://jif.bergenrisk.com/api/')

    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('v1/inmate')// /1')// users')
      .then(response => response.json())
      .then(inmates => this.inmates = inmates);
      console.log('inmates ',this.inmates)
  }
}
