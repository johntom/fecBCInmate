import {inject} from 'aurelia-framework';
import { ApiService } from './utils/servicesApi';
import { ApplicationService } from './services/application-service';
@inject(ApplicationService, ApiService)
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App! v48z';
  firstName = 'John';
  lastName = 'Doe';
  previousValue = this.fullName;

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  constructor(appService, api) {
    this.appService = appService;
    this.api = api;
  }


  activate() {
    console.log('in activate')
     let cCodes = [{ id: 1, code: 'County' }, { id: 2, code: 'ICE' }, { id: 3, code: 'State' }, { id: 4, code: 'Fed' }]
    this.appService.classificationList = cCodes //" model.bind="opt.code
    let cCodes2 = [{ id: 1, code: 'Outpatient' }, { id: 2, code: 'Emergency' }, { id: 3, code: 'Inpatient' }]
    this.appService.serviceprovidedList = cCodes2 

    let cCodes3 = [{ id: 1, code: 'Jail Transport' }, { id: 2, code: 'Ambulance Service' }, { id: 3, code: 'Other Agency' }]
    this.appService.transportList = cCodes3 
    let cCodes4 = [{ id: 1, code: 'Medical' }, { id: 2, code: 'Mental Health' }]
    this.appService.servicetypeList = cCodes4 
    let cCodes5 = [{ id: 1, code: 'Approved' }, { id: 2, code: 'Denied' }]
    this.appService.approvedList = cCodes5 
  }


  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
