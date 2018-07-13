import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ApplicationService } from '../../services/application-service';
import moment from 'moment';
import { ApiService } from '../../utils/servicesApi';
// import { ApplicationService } from '../../services/application-service';
// import { MyDataService } from "../../services/my-data-service";
// import { Prompt } from './prompt';
// import { DialogService } from 'aurelia-dialog';
// @inject(Router, ApiService, ApplicationService, MyDataService, EventAggregator, DialogService)
@inject(Router, ApplicationService, ApiService)

export class DataForm {
  heading = 'DataAddForm HEADER...';
  footer = 'DataAddForm FOOTER...';
  adjusterList = 'adjusterList';
  recordId = '';
  products = [
    { id: 0, name: 'Motherboard' },
    { id: 1, name: 'CPU' },
    { id: 2, name: 'Memory' },
  ];

  // productMatcher = (a, b) => a.id === b.id;
  // selectedProduct = { id: 1, name: 'CPU' };
  // constructor(router, api, appService, dataService, eventAggregator, dialogService) {
  constructor(router, appService, api) {
    this.api = api;
    this.appService = appService;
    this.router = router;
    console.log('DataForm')
    this.inv = '';
    // this.dataService = dataService;
    // this.eventAggregator = eventAggregator;
    // this.createEventListeners();
    this.services = []
    this.invoices = []
    // this.dialogService = dialogService
    // this.inscontactMatcher = {}
    // this.skippromt = false
    // this.navaway = false
  }

  addBooking() {
    let booking = this.currentRecord.booking //this.appService.currentRecord.booking
    let flag = false
    let item
    let bookingDate = moment().format('YYYY-MM-DD')
    if (booking === undefined) {
      flag = true
      booking = []
    }
    item = { bookingDate: bookingDate, classification: '', edit: true }
    booking.unshift(item)

    if (flag) this.appService.currentRecord = booking
    this.bookingDate = '';
    this.classification = '';
    // this.getServices(0,0) //booking, 0)
     let serviceDateFrom = moment().format('YYYY-MM-DD')//'MM-DD-YYYY')
  let item2 = { serviceDateFrom: serviceDateFrom }
  
    booking[0].services = []
    booking[0].services.push(item2)

    booking[0].services[0].invoices = []
    booking[0].services[0].invoices[0].push(item2)


    // booking.services = []
    // booking.services.push(item2)

    // booking.services.invoices = []
    // booking.services.invoices.push(item2)

    this.getServices(booking, 0) //booking, 0)

  }
  addService() {
    let service = this.services
    let flag = false
    let item
    let serviceDateFrom = moment().format('YYYY-MM-DD')
    if (service === undefined) {
      flag = true
      service = []
    }
    item = { serviceDateFrom: serviceDateFrom, serviceDateTo: serviceDateFrom, edit: true }
    service.unshift(item)
    if (flag) this.services = service
    this.serviceDateFrom = '';
    this.getInvoices(service, 0)
  }
  addInvoice() {
    let invoice = this.invoices
    let flag = false
    let item
    let invDate = moment().format('YYYY-MM-DD')
    if (invoice === undefined) {
      flag = true
      invoice = []
    }
    item = { invDate: invDate, edit: true }
    invoice.unshift(item)
    if (flag) this.invoices = invoice
    this.invDate = '';
  }
  getServices(booking, index) {
    // if (booking === 0) {
    //   //  this.getInvoices(0,0)
    //   this.invoices = []
    // } else {
    console.log(' this.currentRecord ', index, booking.services);
    this.services = booking.services
    this.getInvoices(this.services[0], index)
    // }
  }

  getInvoices(service, index) {
    // console.log(' this.currentRecord ', index, service.invoices);
    this.invoices = service.invoices
    console.log(' getInvoices ', this.invoices)
  }
  activate(params, routeConfig) {
    console.log('activate', params)
    if (params.id) {
      this.recordId = params.id;
      if (this.recordId === 'create') {

        this.appService.currentItem = {}
        this.appService.currentItem.id = 'create'
        this.appService.testrec = {}
        this.appService.originalrec = {}
        this.appService.currentItem.insured = {}
        this.appService.currentItem.claimant = {}
        this.appService.currentItem.insco = {}
        this.appService.currentItem.insaddress = {}
        this.appService.currentItem.inscontact = {}
        this.appService.currentItem.diaries = []
        this.appService.currentItem.notes = []
        this.appService.currentItem.adjusters = []
      } else {
        console.log('activate2')
        console.log('this.recordId ', this.recordId, this.appService.currentRecord);
        this.currentRecord = this.appService.currentRecord
        console.log(' this.currentRecord ', this.currentRecord.booking.services);
        this.getServices(this.currentRecord.booking[0], 0)

      }
      // } // state
    }
  }

  saveinmate() {
    //  let modrec = this.currentRecord
    // let booking =  this.currentRecord.booking //this.appService.currentRecord.booking
    //this.currentItem//.booking//.services= this.services
    //this.appService.currentItem
    // this.invoices = service.invoices booking.services

    console.log(' call save ', this.currentRecord)// JSON.stringify(this.appService.currentItem) === JSON.stringify(this.appService.testrec)) //this.appService.currentClaim)
    this.api.saveinmate(this.currentRecord)

  }



  attached() {

  }

  bind() {

  }


  detached() {
    // alert('det')
    // this.ratingElement.removeEventListener('change', this.ratingChangedListener);
    // this.selectAdjusterElement.removeEventListener('change', this.adjusterSelectedListener);
  }




  canDeactivate() {
    return new Promise((resolve, reject) => {
      if (this.currentItem &&
        this.currentItem.isDirty &&
        this.currentItem.isDirty()) {
        // Now, we need to query the user... result => makes it a closure
        this.appService.asyncHandleDirty().then(result => {
          if (!result.wasCancelled) {


            resolve(true); // ok to leave
          } else {

            resolve(false); // cancel to stay

          }
        });
      } else {
        resolve(true);
      }
    });

  }
  //    async tryCloseTab(item, tab, route) {
  requestclose() {
    // const resetFunc = () => { this.appService.originalrec = this.currentItem; };
    // let cand = this.canDeactivate()
    // let tab = this.appService.tabs.find(f => f.isSelected);
    // let rt2 = '#/claim/' + this.tabname ///claim'//Search?'cant use when search has a number 
    // this.appService.tryCloseTab(this.currentItem, tab, rt2);

  }



}
// createEventListeners() {
  //   this.adjusterSelectedListener = e => {
  //     if (e && e.detail) {
  //       this.adjuster = e.detail.value;
  //       console.log('this.adjuster  createEventListeners ', this.adjuster)
  //     }
  //   };

  // }

  // saveinmatexx() {
  // let booking =  this.currentRecord.booking //this.appService.currentRecord.booking

  //   console.log(' call save ', JSON.stringify(this.appService.currentItem) === JSON.stringify(this.appService.testrec)) //this.appService.currentClaim)
  //   //return 

    // let pcount = 0
    //  this.appService.currentItem.adjusters.forEach(function (item, index) {

    //   console.log(item);
    //   if (item.TYPE === "Primary") {
    //     pcount++
    //   }
    // });
    // if (pcount > 1) {

    //   return confirm('There can only be one primary adjuster');
    // }
    // if (pcount === 0) {

    //   return confirm('You must add a primary adjuster');
    // }
    // if (JSON.stringify(this.currentItem) !== JSON.stringify(this.appService.originalrec)) {

    //   if (this.recordId === 'create') {
    //     this.api.addclaim(this.currentItem).then((jsonRes) => {
    //       console.log('jsonRes ', jsonRes);

    //       if (this.appService.currentItem.id === 'create') this.appService.currentItem.id = ''
    //       window.alert("Save successful!");

    //     });
    //   } else {
    //     this.api.saveclaim(this.currentItem).then((jsonRes) => {
    //       console.log('jsonRes ', jsonRes);

    //       //  this.router.navigate(rt2);
    //       window.alert("Save successful!");
    //       this.skippromt = true
    //       if (option === 1) {

    //         let tab = this.appService.tabs.find(f => f.isSelected);
    //         // this.closeTab(tab);

    //         //// this.close()
    //         this.requestclose()

    //       } else {
    //         // this.appService.originalrec = this.currentItem
    //          this.appService.originalrec = JSON.parse(JSON.stringify(this.currentItem))// inv[0]));

    //       }
    //     });
    //   }

    // }
  // }
  // closeTab(tab) {

  //   let index = this.appService.tabs.indexOf(tab);
  //   tab.isSelected = false;
  //   this.appService.tabs.splice(index, 1);

  // }
// showModal(fieldname) {

  //   // alert('fieldname' + fieldname, this.appService.currentClaim.DESCRIPTION) currentClaim
  //   console.log('fieldname' + fieldname, this.currentItem.LossDescription)//DESCRIPTION)
  //   this.dialogService.open({ viewModel: Prompt, model: fieldname, lock: false }).whenClosed(response => {
  //     //INSURED_ID currentItem.insured.LEGAL_NAME
  //     if (fieldname === 'insco') {
  //       ///let serviceinsco = this.appService.currentClaim.INSURANCE_COMPANY_ID * 1 // or insco.IN...
  //       let serviceinsco = this.appService.currentItem.insco.INSURANCE_COMPANY_ID * 1 // or insco.IN...
  //       let insco = this.appService.InsurancecompanyList
  //       if (serviceinsco !== undefined) {
  //         let aid = insco.findIndex(x => x.INSURANCE_COMPANY_ID === serviceinsco)
  //         let item = insco[aid];
  //         this.inscoAdjusters = item.contacts
  //         this.inscoAddresses = item.addresses
  //         this.currentItem.insco = this.appService.currentItem.insco
  //       }
  //     }

  //     if (fieldname === 'INSURED_ID') {

  //       this.currentItem.insured = this.appService.currentItem.insured
  //     }

  //     if (fieldname === 'LossDescription') {

  //       this.currentItem.LossDescription = this.appService.currentItem.LossDescription
  //     }

  //     console.log(response.output);
  //   });
  // }