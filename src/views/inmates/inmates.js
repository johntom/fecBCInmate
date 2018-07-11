import { inject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-fetch-client';
import { Router } from 'aurelia-router';
import { ApplicationService } from '../../services/application-service';
@inject( HttpClient ,Router,ApplicationService)
export class Inmates {
  heading = 'BC Inmates';
  inmates = [];

  constructor(http,router,appService) {
    //console.log('in c')
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://jif.bergenrisk.com/api/')

    });
// https://jif.bergenrisk.com/api/v1/inmate
    this.http = http;
     this.router = router;
     this.appService = appService;
  }

  activate() {
    console.log('in c')
    return this.http.fetch('v1/inmate')// /1')// users')
      .then(response => response.json())
      .then(inmates => this.inmates = inmates.data);
    console.log('inmates ', this.inmates)
  }

  openrecord(row) {
 console.log('row', row);
    let rt2 = '#/inmates/data/' + row.id; //CLAIM_ID;
    
      this.appService.currentRecord = row;
    this.router.navigate(rt2);// `#/inventory/${path}`);
  }


}
