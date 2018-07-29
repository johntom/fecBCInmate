import { Router } from 'aurelia-router';
import { inject, customAttribute } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ApplicationService } from '../../services/application-service';
import moment from 'moment';
import { ApiService } from '../../utils/servicesApi';
import { observable } from "aurelia-framework";
// import {CssAnimator} from 'aurelia-animator-css';
// import { ApplicationService } from '../../services/application-service';
// import { MyDataService } from "../../services/my-data-service";
// import { Prompt } from './prompt';
// import { DialogService } from 'aurelia-dialog';
// @inject(Router, ApiService, ApplicationService, MyDataService, EventAggregator, DialogService)

// @customAttribute('animateonchange')

//,Element, CssAnimator
@inject(Router, ApplicationService, ApiService)

export class DataForm {
  // @observable selectedBooking;
  heading = 'Inmate Entry...';
  footer = 'Inmate Footer...';
  adjusterList = 'adjusterList';
  recordId = '';
  products = [
    { id: 0, name: 'Motherboard' },
    { id: 1, name: 'CPU' },
    { id: 2, name: 'Memory' },
  ];

  // productMatcher = (a, b) => a.id === b.id;
  // selectedProduct = { id: 1, name: 'CPU' };

  constructor(router, appService, api) {

    this.api = api;
    this.appService = appService;
    this.router = router;
    console.log('DataForm')
    this.inv = '';

    this.services = []
    this.invoices = []
    this.bookingindex = 0
  }

  // valueChanged(newValue) {
  //   if (this.initialValueSet) {
  //     this.animator.addClass(this.element, 'background-animation').then(() => {
  //       this.animator.removeClass(this.element, 'background-animation');
  //     });
  //   }
  //   this.initialValueSet = true;
  // }

  // selectedBookingChanged(newVal, oldVal) {
  //   this.booking.forEach(function (d) { // no longer out of scope
  //     d.isCurrent = d === newValue;
  //   })
  // }
  changeColor(item) {
    // alert(item.classification);
    item.isSelected = !item.isSelected;
  }

  EditBooking(booking, editstate, index) {
    this.currentBooking = booking

    for (let bk of this.currentRecord.booking) {
      // console.log('bk2 ', bk2)
      bk.isSelected = false
    }

    this.currentRecord.booking[index].isSelected = true
    //this.services[0].isSelected = true

    booking.edit = !editstate//this.booking.edit
    this.services = booking.services
    this.getInvoices(this.services[0], 0)
  }

  EditService(service, editstate, index) {
    this.currentService = service
    this.currentServiceIndex = index
    service.edit = !editstate//this.booking.edit
    for (let bk of this.services) {
      // console.log('bk2 ', bk2)
      bk.isSelected = false
    }

    this.services[index].isSelected = true

    this.getInvoices(service, 0)

  }

  EditInvoice(invoice, editstate, index) {
    this.currentInvoice = invoice
    invoice.edit = !editstate//this.booking.edit
    for (let bk of this.invoices) {
      //  console.log('bk2 ', bk2)
      bk.isSelected = false
    }

    // this.currentRecord.booking[index].isSelected = true
    this.invoices[index].savings = this.invoices[index].invoiceTotal - this.invoices[index].repricedAmt
    this.invoices[index].isSelected = true
  }
  addBooking() {
    let booking = this.currentRecord.booking //this.appService.currentRecord.booking
    let flag = false
    let item, item2
    let bookingDate = moment().format('YYYY-MM-DD')
    if (booking === undefined) {
      flag = true
      booking = []
      this.bookingindex = 0
    } else this.bookingindex = booking.length

    item = { bookingDate: bookingDate, classification: 'friday', edit: true }
    booking.unshift(item)

    //    if (flag) this.appService.currentRecord = booking

    this.bookingDate = '';
    this.classification = '';
    booking[this.bookingindex].services = []
    this.services = []
    this.invoices = []

    for (let bk of booking) {
      bk.isSelected = false
    }
    booking[this.bookingindex].isSelected = true



    this.currentBooking.isSelected = true
    this.services[0].isSelected = true



    // // booking[0].services.push(item2)
    // // booking[0].services[0]=''
    // //  booking[0].services[0].invoices = []
    //  this.getServices(booking[0], 0)  //booking, 0)

  }
  addService() {
    let service = this.services
    let flag = false
    let indx
    if (service === undefined) {
      flag = true
      indx = 0
      service = []
    } else {
      indx = service.length
    }
    let item
    let serviceDateFrom = moment().format('YYYY-MM-DD')

    item = { serviceDateFrom: serviceDateFrom, serviceDateTo: serviceDateFrom, edit: true }
    service.unshift(item)
    if (flag) {
      this.services = service
      this.services[0].invoices = []
      // this.currentRecord.booking[0].services[indx] = this.services
      // this.currentRecord.currentBooking.services = this.services

    }
    //this.serviceDateFrom = '';
    this.getInvoices(service, 0)
  }
  addInvoice() {
    let invoice = this.invoices
    let flag = false
    if (invoice === undefined) {
      flag = true
      invoice = []
    }
    let item
    let invDate = moment().format('YYYY-MM-DD')
    let invno = this.currentBooking.bookingNo
    item = { invno: invno, invDate: invDate, edit: true }
    invoice.unshift(item)
    // if (flag) this.invoices = invoice
    this.invoices = invoice
    this.currentRecord.booking[this.bookingindex].services[this.currentServiceIndex].invoices = this.invoices

    this.invDate = '';
  }
  getServices(booking, index) {
    // if (booking === 0) {
    //   //  this.getInvoices(0,0)
    //   this.invoices = []
    // } else {
    this.currentBooking = booking
    console.log(' this.currentRecord ', index, booking.services);
    this.services = booking.services
    for (let bk of this.currentRecord.booking) {
      // console.log('bk2 ', bk2)
      bk.isSelected = false
    }

    this.currentRecord.booking[index].isSelected = true


    if (booking.services[0] !== undefined) {

      for (let bk of this.services) {
        // console.log('bk2 ', bk2)
        bk.isSelected = false
      }

      this.services[0].isSelected = true
      //   this.services[0].isSelected=true

      this.getInvoices(this.services[0], 0)
    }
  }

  getInvoices(service, index) {
    // console.log(' this.currentRecord ', index, service.invoices);
    // if (service.invoices===undefined)
    this.invoices = service.invoices
    this.currentService = service
    this.currentServiceIndex = index



    for (let bk of this.services) {
      // console.log('bk2 ', bk2)
      bk.isSelected = false
    }

    this.services[index].isSelected = true


    if (this.invoices !== undefined) {
      this.invoices[0].isSelected = true
    }





    console.log(' getInvoices ', this.invoices)
  }
  close() {


    // let tab = this.appService.tabs.find(f => f.isSelected);
    // Next, we navigate to the newly created claim

    // Finally, we close out this tab
    // this.closeTab(tab);
    this.closeTab
    let rt2 = '#/'
    this.router.navigate(rt2);
  }
  closeTab(tab) {
    let index = this.appService.tabs.indexOf(tab);
    tab.isSelected = false;
    this.appService.tabs.splice(index, 1);
  }

  activate(params, routeConfig) {
    console.log('activate', params)
    if (params.id) {
      this.recordId = params.id;
      if (this.recordId === 'create') {
        //let newrec = {inmate:{lastname: ""},booking: []}
        //this.appService.currentRecord ={}//newrec
        this.appService.currentRecord = {}
        this.appService.currentRecord.id = 'create'
        this.appService.testrec = {}
        this.appService.originalrec = {}
        this.appService.currentRecord.inmate = {}

        this.appService.currentRecord.booking = []
        this.appService.currentRecord.docs = []
        this.currentRecord = this.appService.currentRecord

      } else {
        console.log('activate2')
        console.log('this.recordId ', this.recordId, this.appService.currentRecord);
        this.currentRecord = this.appService.currentRecord
        this.docs = this.currentRecord.docs
        console.log(' this.currentRecord ', this.currentRecord.booking.services);
        if (this.currentRecord.booking[0] !== undefined) {
          this.currentRecord.booking[0].isSelected = true

          this.getServices(this.currentRecord.booking[0], 0)
        }
      }
      // } // state
    }
    // click.delegate
    //  this.table.click.delegate('click-row.bs.table', function (e, row, $element) {
    //     $('.success').removeClass('success');
    //     $($element).addClass('success');
    //   });
  }
  addDocs(images) {
    //images is file
    //check for dups 2/21/2018
    //https://stackoverflow.com/questions/32736599/html-file-upload-and-action-on-single-button
    let docs = this.currentRecord.docs
    if (docs === undefined) docs = []
    let formData = new FormData()
    let newDate = moment().format('YYYY-MM-DD')
    let flag = false
    let prom = Promise.resolve(this.checkData(images, formData)).then(values => {
      let newform = values;
      console.log('after checkdata1 ', newform);//this.status,
      // this.api.upload(formData, this.currentItem.CLAIM_NO)
      this.api.upload(newform, this.currentRecord.id)
        .then((jsonRes) => {
          this.upmess = jsonRes//.data.message

          $("#file").val("");
        })
    })
  }

  // addDocsInvoice(invoice,image) {
  addDocsInvoice(invoice, image) {
    // not used
    // images is file
    // let docs = this.currentRecord.docs
    // if (docs === undefined) docs = []
    let formData = new FormData()
    let newDate = moment().format('YYYY-MM-DD')
    let flag = false
    invoice.fileinvoicename = image[0].name // only 1 allowed
    //let prom = Promise.resolve(this.checkData(images, formData)).then(values => {
    // let newform = values;
    //  console.log('after checkdata1 ',  newform);//this.status,
    // this.api.upload(formData, this.currentItem.CLAIM_NO)
    // delete fileinvoice

    // formData.append('file', image);
    formData.append('fileinvoice', image);

    //    this.api.uploadInvoice(formData, invoice)
    // use same uploader just make sure pdf is uniq within record
    this.api.upload(newform, this.currentRecord.id)

      .then((jsonRes) => {
        this.upmess = jsonRes//.data.message

        $("#fileinvoice").val("");
      })
    // })
  }

  addDocTest() {
    var item = { FILE_NAME: 'fname', FILE_EXT: '.pdf', OVERWRITE: 'N' }
    console.log('item ', item)
    let docs = this.currentRecord.docs
    if (docs === undefined) docs = []
    docs.unshift(item)
    this.docs = docs
  }
  checkData(images, formData) {
    let promises = []
    return new Promise((resolve, reject) => {
      let i = 0;
      let docs = this.currentRecord.docs
      if (docs === undefined) docs = []
      let imagelen = images.length
      for (i = 0; i < images.length; i++) {
        let ext = images[i].name.split('.').pop();
        let fname = images[i].name
        console.log('fname ', fname)
        let mid = -100// not needed
        let ival = i
        console.log('ival ', ival)

        mid = docs.findIndex(x => x.FILE_NAME === fname)
        console.log('mid ', mid)

        if (mid > -1) {
          // if we find file in array pass all values so we can evaluate later
          let obj = { name: fname, val: ival, ext: ext }
          var promise = this.promiseDialog(obj)
          promises.push(promise);
        } else {
          var item = { FILE_NAME: fname, FILE_EXT: '.' + ext, OVERWRITE: 'N' }
          console.log('item ', item)

          docs.unshift(item)
          this.docs = docs
          this.currentRecord.docs = docs
          formData.append('file', images[ival]);
        }
      }
      return Promise.all(promises).then(values => {
        for (i = 0; i < values.length; i++) {
          //console.log(' this.response values[i] ',i,values[i].name,values[i].val,values[i].resp)
          if (!values[i].resp) {
            //true=wasCancelled
            var item = { FILE_NAME: values[i].name, FILE_EXT: values[i].ext, OVERWRITE: 'Y' }
            // dont add to data docs.unshift(item)
            formData.append('file', images[values[i].val]);
          }
        }
        resolve(formData)
      })
    })
  }


  saveinmate() {
    //  let modrec = this.currentRecord
    // let booking =  this.currentRecord.booking //this.appService.currentRecord.booking
    //this.currentItem//.booking//.services= this.services
    //this.appService.currentItem
    // this.invoices = service.invoices booking.services

    console.log(' call save ', this.currentRecord)// JSON.stringify(this.appService.currentItem) === JSON.stringify(this.appService.testrec)) //this.appService.currentClaim)
    if (this.recordId === 'create') {
      this.api.addinmate(this.currentRecord)
    } else {
      this.api.saveinmate(this.currentRecord)
    }
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