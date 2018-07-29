import {computedFrom} from 'aurelia-framework';
import moment from 'moment';

export class Welcome {
 // ndate = moment(new Date()).format('M/D/YYYY')
  heading = 'Welcome to the Aurelia Navigation au-kendo App! v2f'// + ndate;
  firstName = 'John ';
  lastName = 'Doe';
  previousValue = this.fullName;

  constructor() {
    const format = moment(new Date()).format('M/D/YYYY');
    console.log('format', format);
  }

  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  // To optimize by declaring the properties that this getter is computed from, uncomment the line below
  // as well as the corresponding import above.
  // @computedFrom('firstName', 'lastName')
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
