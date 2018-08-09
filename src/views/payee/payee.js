import { ApiService } from '../../utils/servicesApi';
import { inject } from 'aurelia-dependency-injection';
// // import { Router } from 'aurelia-router';
// import { Router, Redirect } from 'aurelia-router';
// import { UtilService } from '../../services/util-service';
// // import moment from 'moment';
 import { ApplicationService } from '../../services/application-service';
// import { MyDataService } from "../../services/my-data-service";
// @inject(ApiService, ApplicationService, MyDataService)

// @inject(Router, ApiService, UtilService, ApplicationService, MyDataService)

@inject(ApiService,ApplicationService)

export class Payee {
  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };
  heading = 'Inmates...';
 
  constructor(api,appService) {
   
    this.api = api
    this.appService = appService;

  }


  activate() {
    console.log('in activate')
   this.payees= this.appService.payeelist
  }

  
}


