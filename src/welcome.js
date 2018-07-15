import {inject} from 'aurelia-framework';
import { ApiService } from './utils/servicesApi';
import { ApplicationService } from './services/application-service';
@inject(ApplicationService, ApiService)
export class Welcome {
  heading = 'Welcome to the Aurelia Navigation App! v47z';
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
    let cCodes = [{ id: 1, code: 'a1' }, { id: 2, code: 'a2' }, { id: 3, code: 'a3' }, { id: 4, code: 'a4' }]
    this.appService.classificationList = cCodes //" model.bind="opt.code
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
