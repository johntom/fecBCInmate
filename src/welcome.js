import { computedFrom } from 'aurelia-framework';
import moment from 'moment';
import { inject } from 'aurelia-framework';
import { ApiService } from './utils/servicesApi';
import { ApplicationService } from './services/application-service';
@inject(ApplicationService, ApiService)
export class Welcome {
  // ndate = moment(new Date()).format('M/D/YYYY')
  heading = 'Welcome to BCInmate Medical Services App! version: v3f / Press Ctrl+F5 for latest version in development'// + ndate;
  // heading2 = ' v3a'// + ndate;
 
  firstName = 'John ';
  lastName = 'Doe';
  previousValue = this.fullName;

  constructor(appService, api) {
    this.appService = appService;
    this.api = api;
    const format = moment(new Date()).format('M/D/YYYY');
    console.log('format', format);
  }
  // Cache(){
  //   rememberForever('js_version_number', time())
  //}

  /*
  Google Chrome
  On Windows, use one of the following:
  
  Hold the Ctrl key and press the F5 key.
  Hold the ⇧ Shift key and press the F5 key.
  Hold the Ctrl key and click the Reload button on the navigation toolbar.
  Hold the ⇧ Shift key and click the Reload button on the navigation toolbar.
  
  .plugin('aurelia-bootstrap-tagsinput', config => { config.extra.bootstrapVersion = 4; });
   */
  // Getters can't be directly observed, so they must be dirty checked.
  // However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  // To optimize by declaring the properties that this getter is computed from, uncomment the line below
  // as well as the corresponding import above.
  // @computedFrom('firstName', 'lastName')
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  clear() {
    location.reload(true)
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

    let cCodes5 = [{ id: 1, code: 'Approved' }, { id: 2, code: 'Denied – Medicaid' }, { id: 3, code: 'Denied – Medicare' }, { id: 4, code: 'Denied – Submit to Other Insurer' },
    { id: 5, code: 'Denied – Duplicate' }, { id: 6, code: 'Denied – Awaiting Documentation' }, { id: 7, code: 'Denied – Other' }]
    this.appService.approvedList = cCodes5
  }
}
export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
