import { computedFrom } from 'aurelia-framework';
import moment from 'moment';
import { inject } from 'aurelia-framework';
import { ApiService } from './utils/servicesApi';
import { ApplicationService } from './services/application-service';
import { MyDataService } from "./services/my-data-service";
 
@inject(ApplicationService, ApiService, MyDataService)
export class Welcome {
  // ndate = moment(new Date()).format('M/D/YYYY')
  heading = 'Welcome to BCInmate Medical Services App! version: v3L25/ Press Ctrl+F5 for latest version in development'// + ndate;
  // heading2 = ' v3a'// + ndate;

  firstName = 'John ';
  lastName = 'Doe';
  previousValue = this.fullName;

  constructor(appService, api, dataService) {
    this.appService = appService;
    this.api = api;
    this.dataService = dataService;

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

  async attached() {
    this.appService.payeelist = await this.dataService.loadPayeeAsync()

    console.log(' await payeelist ', this.appService.payeelist)
  }
  // attached() {
  // let Promise = this.dataService.loadPayee()
  //     .then(response => {
  //        this.appService.payeelist = response.data
  //        console.log(' this.appService.payeelist ',  this.appService.payeelist)
  //       return this.appService.payeelist
  //     })
  //     // .then(states => filter.length > 0 ? states.filter(item => item.name.toLowerCase().indexOf(filter.toLowerCase()) > -1) : states)
  //     // .then(states => filter.length > 0 ? states.filter(item => item.name.toLowerCase().indexOf(filterlc) > -1) : states)
  //    return Promise
  // let Promise = this.dataService.loadPayee().then(response => {
  //   this.appService.payeelist = response.data
  // }).catch(error => {
  //   console.error("Error encountered while trying to get data.", error);
  // })
  // console.log(' this.appService.payeelist ', this.appService.payeelist)

  // const payeelist = await this.dataService.loadPayeeAsync()
  //  this.appService.payeelist = payeelist

  //  await this.dataService.loadPayee().then(response => {
  //       this.appService.payeelist = response.data
  //     }).catch(error => {
  //       console.error("Error encountered while trying to get data.", error);
  //     })
  //     console.log(' this.appService.payeelist ', this.appService.payeelist)
  //  }
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
    let cCodes6 = [{ id: 'M', code: 'Male' }, { id: 'F', code: 'Female' }
      , { id: 'O', code: 'Other' }]
    this.appService.genderList = cCodes6
    let cCodes7 = [{ id: '1', code: 'NBMD' }, { id: '2', code: 'HUMC' },
    { id: '3', code: 'North Hudson' }, { id: '4', code: 'Holy Name' },
    { id: '5', code: 'Englewood' }
    ]
    this.appService.sendingproviderList = cCodes7
    let cCodes8 = [{ id: 1, code: 'BC Jail' }, { id: 2, code: 'Other' }]
    this.appService.designatedproviderList = cCodes8
    // let cCodes9 = [{ "payeename" : "NBMD", 
    //                         "payeefein" : "NA", 
    //                         "payeeaddr" : "230 E Ridgewood Ave", 
    //                         "payeecity" : "Paramus", 
    //                         "payeestate" : "NJ", 
    //                         "payeezip" : "07652"},
    //                         { "payeename" : "HUMC", 
    //                         "payeefein" : "221487576", 
    //                         "payeeaddr" : "30 Prospect Avenue", 
    //                         "payeecity" : "Hackensack", 
    //                         "payeestate" : "NJ", 
    //                         "payeezip" : "07601"},
    //                             { "payeename" : "North Hudson ", 
    //                         "payeefein" : "NA", 
    //                         "payeeaddr" : "714 31st St", 
    //                         "payeecity" : "Union City", 
    //                         "payeestate" : "NJ", 
    //                         "payeezip" : "07087"},
    //                             { "payeename" : "Holy Name Hospital", 
    //                         "payeefein" : "221487322", 
    //                         "payeeaddr" : "718 Teaneck Road", 
    //                         "payeecity" : "Teaneck", 
    //                         "payeestate" : "NJ", 
    //                         "payeezip" : "07666"},
    //                             { "payeename" : "Englewood Hospital", 
    //                         "payeefein" : "221487173", 
    //                         "payeeaddr" : " 350 Engle Street", 
    //                         "payeecity" : "Englewood", 
    //                         "payeestate" : "NJ", 
    //                         "payeezip" : "07631"}                           
    //                         ]
    // this.appService.payeelist = cCodes9


  }
}
export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}
