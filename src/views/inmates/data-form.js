import { Router } from 'aurelia-router';
import { inject } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { ApplicationService } from '../../services/application-service';
// import { ApiService } from '../../utils/servicesApi';
// import { ApplicationService } from '../../services/application-service';
// import { MyDataService } from "../../services/my-data-service";
// import { Prompt } from './prompt';
// import { DialogService } from 'aurelia-dialog';
// @inject(Router, ApiService, ApplicationService, MyDataService, EventAggregator, DialogService)
@inject(Router,ApplicationService)

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

  //constructor(router, api, appService, dataService, eventAggregator, dialogService) {
   constructor(router , appService) {
    // this.api = api;
    // this.appService = appService;
      console.log('DataForm')
    this.inv = '';
    // this.dataService = dataService;
   // this.eventAggregator = eventAggregator;
   // this.createEventListeners();
    this.inscoAdjusters = []
    this.inscoAddresses = []
    this.router = router;
      this.appService = appService;
    // this.dialogService = dialogService
    // this.inscontactMatcher = {}
    // this.skippromt = false
    // this.navaway = false
  
  }

  activate(params, routeConfig) {
    console.log('activate')
    if (params.id) {
      this.recordId = params.id;

      if (this.recordId === 'create') {
        // this.appService.currentClaim = {}
        // this.appService.testrec = {}
        // this.appService.originalrec = {}
        // this.appService.currentClaim.insured = {}
        // this.appService.currentClaim.claimant = {}
        // this.appService.currentClaim.insco = {}
        // this.appService.currentClaim.insaddress = {}
        // this.appService.currentClaim.inscontact = {}
        // this.appService.currentClaim.diaries = []
        // this.appService.currentClaim.notes = []
        // this.appService.currentClaim.adjusters = []
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
        //// if ((this.appService.currentClaim !== undefined) && (this.appService.currentClaim.CLAIM_NO === this.recordId)) {
        ////  alert('You have previously modified and unsaved data')
        //// } else {


        // return this.api.findclaimOne(this.recordId).then((jsonRes) => {
        //   let claim = jsonRes.data
        //   this.appService.currentClaim = claim[0];
        //   this.appService.currentItem = claim[0];
        
        //   this.currentItem = this.appService.currentItem

        //   this.currentItem.xdesc = claim[0].LossDescription//DESCRIPTION

        //   console.log('claim[0] ', this.currentItem.LossDescription, claim[0]);
         

        //   this.currentItem.isDirty = () => {
        //     let tf = this.comparedata()
        //     let revtf
        //     tf === true ? revtf = false : revtf = true
        //     return revtf
         
        //   };
        //   this.currentItem.reset = () => {
        //     //   this.appService.originalrec = this.currentItem;
        //     // check for null
        //     this.appService.originalrec = JSON.parse(JSON.stringify(this.currentItem))// inv[0]));

        //   }
        //   // 6-13  
        //   this.appService.currentView = this.currentItem; // must set on every view
        //   this.appService.originalrec = JSON.parse(JSON.stringify(this.currentItem))// inv[0]));
        //   this.appService.testrec = claim[0];
        //   console.log('copy this.appService.originalrec ', this.appService.originalrec);
         
        //   if (claim[0].adjusters !== undefined && claim[0].adjusters.length > 0) {
        //     let aid = claim[0].adjusters.findIndex(x => x.TYPE === "Primary")
        //     this.currentItem.primaryAdjuster = claim[0].adjusters[aid].ADJUSTER_NAME;
        //     this.appService.originalrec.primaryAdjuster = this.currentItem.primaryAdjuster
        //   }
        //   let insco = this.appService.InsurancecompanyList
          
        //   let serviceinsco = this.appService.currentClaim.insco.INSURANCE_COMPANY_ID * 1
        //   if (serviceinsco !== undefined) {
        //     let aid = insco.findIndex(x => x.INSURANCE_COMPANY_ID === serviceinsco)
        //     let item = insco[aid];
        //     let icd
        //     let bid
        //     this.inscoAdjusters = item.contacts
        //     icd = this.currentItem.inscontact.INSURANCE_CONTACT_ID
        //     bid = this.inscoAdjusters.findIndex(x => x.INSURANCE_CONTACT_ID === icd)
        //     this.inscontactMatcher = this.inscoAdjusters[bid]
        //     let a = this.inscoAdjusters
        //     let b = this.currentItem.inscontact
        //     this.inscontactMatcher = (a, b) => a.INSURANCE_CONTACT_ID === b.INSURANCE_CONTACT_ID;
        //     console.log('inscontactMatcher ', this.inscontactMatcher)
        //   }

        //   if ((this.currentItem.INSURED_ID === undefined) || (this.appService.insuredList === null)) {
        //   } else {
        //     let insured = this.appService.insuredList
        //     oid = insured.findIndex(x => x.INSURED_ID === this.appService.currentClaim.INSURED_ID)
        //     console.log('oid ', oid)
        //     insuredobj = this.appService.insuredList[oid]//10]
        //     console.log('insuredobj ', insuredobj)
        //     if (insuredobj !== undefined) this.currentItem.LEGAL_NAME = insuredobj.LEGAL_NAME
        //   }
        //   // setup insured
        //   let oid
        //   let insuredobj
        //   let insured = this.appService.insuredList
        //   if ((this.currentItem.INSURED_ID === undefined) || (this.appService.insuredList === null)) {
        //   } else {
        //     oid = insured.findIndex(x => x.INSURED_ID === this.currentItem.INSURED_ID)
        //     insuredobj = this.appService.insuredList[oid]//10]
        //     if (insuredobj !== undefined) this.currentItem.LEGAL_NAME = insuredobj.LEGAL_NAME
        //   }
        //   // end setup insured

        // });
      }
      // } // state
    }


  }

  // comparedata() {
  //   console.log('ADJUSTER_NAME', this.currentItem.ADJUSTER_NAME === this.appService.originalrec.ADJUSTER_NAME)
  //   console.log('ADJUSTER_ID', this.currentItem.ADJUSTER_ID === this.appService.originalrec.ADJUSTER_ID)
  //   console.log('ASSIGNMENT_TYPE', this.currentItem.ASSIGNMENT_TYPE === this.appService.originalrec.ASSIGNMENT_TYPE)
  //   console.log('ASSIGNMENT_TYPE_DESC', this.currentItem.ASSIGNMENT_TYPE_DESC === this.appService.originalrec.ASSIGNMENT_TYPE_DESC)
  //   console.log('CARRIER_FILE_NO', this.currentItem.CARRIER_FILE_NO === this.appService.originalrec.CARRIER_FILE_NO)
  //   console.log('CLAIMANT_ID', this.currentItem.claimant.LAST_NAME === this.appService.originalrec.claimant.LAST_NAME)
  //   console.log('CLAIM_TYPE', this.currentItem.CLAIM_TYPE === this.appService.originalrec.CLAIM_TYPE)
  //   console.log('DATE_OF_LOSS', this.currentItem.DATE_OF_LOSS === this.appService.originalrec.DATE_OF_LOSS)
  //   console.log('LossDescription', this.currentItem.LossDescription === this.appService.originalrec.LossDescription)
  //   console.log('ASSIGNMENT_TYPE', this.currentItem.ASSIGNMENT_TYPE === this.appService.originalrec.ASSIGNMENT_TYPE)
  //   console.log('ASSIGNMENT_TYPE', this.currentItem.ASSIGNMENT_TYPE_DESC === this.appService.originalrec.ASSIGNMENT_TYPE_DESC)
  //   console.log('STATUS', this.currentItem.STATUS === this.appService.originalrec.STATUS)
  //   console.log('insured', this.currentItem.insured.LEGAL_NAME === this.appService.originalrec.insured.LEGAL_NAME)
  //   console.log('primaryAdjuster', this.currentItem.primaryAdjuster === this.appService.originalrec.primaryAdjuster)
  //   console.log('insco', this.currentItem.insco.NAME, this.appService.originalrec.insco.NAME, this.currentItem.insco.NAME === this.appService.originalrec.insco.NAME)
  //   console.log('inscontact', this.currentItem.inscontact.NAME_LAST === this.appService.originalrec.inscontact.NAME_LAST)
  //   console.log('claimant.LAST_NAME', this.currentItem.claimant.LAST_NAME === this.appService.originalrec.claimant.LAST_NAME)

  //   return (

  //     this.currentItem.ASSIGNMENT_TYPE === this.appService.originalrec.ASSIGNMENT_TYPE
  //     && this.currentItem.ASSIGNMENT_TYPE_DESC === this.appService.originalrec.ASSIGNMENT_TYPE_DESC

  //     && this.currentItem.CARRIER_FILE_NO === this.appService.originalrec.CARRIER_FILE_NO
  //     && this.currentItem.claimant.LAST_NAME === this.appService.originalrec.claimant.LAST_NAME

  //     && this.currentItem.CLAIM_TYPE === this.appService.originalrec.CLAIM_TYPE

  //     && this.currentItem.DATE_OF_LOSS === this.appService.originalrec.DATE_OF_LOSS

  //     && this.currentItem.LossDescription === this.appService.originalrec.LossDescription
  //     && this.currentItem.STATUS === this.appService.originalrec.STATUS
  //     && this.currentItem.insured.LEGAL_NAME === this.appService.originalrec.insured.LEGAL_NAME
  //     && this.currentItem.primaryAdjuster === this.appService.originalrec.primaryAdjuster
  //     && this.currentItem.insco.NAME === this.appService.originalrec.insco.NAME
  //     && this.currentItem.inscontact.NAME_LAST === this.appService.originalrec.inscontact.NAME_LAST

  //     && this.currentItem.claimant.LAST_NAME === this.appService.originalrec.claimant.LAST_NAME

  //   )

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

  attached() {
    // if (this.appService.dataFormOneToOneTabs.length > 0) {
    //   let tab = this.appService.dataFormOneToOneTabs[0];

    //   this.selectOneToOneTab(tab);
    // }
    // if (this.appService.dataFormOneToManyTabs.length > 0) {
    //   let tab = this.appService.dataFormOneToManyTabs[0];

    //   this.selectOneToManyTab(tab);

    // }
  }
  selectChangedIA(adjusterid) {

    // let insadjusters = this.inscoAdjusters
    // let aid = insadjusters.findIndex(x => x.INSURANCE_CONTACT_ID === adjusterid)
    // let item = insadjusters[aid];// { ADJUSTER_ID: 4, ADJUSTER_NAME: "Donna Luciani", edit: true }
    // //  this.currentnewItem.inscontact = item
    // //this.currentItem.inscontact = item
    // this.appService.currentClaim.inscontact = item
  }
  // selectChangedIAddr(insurancecompanyid) {

  //   let insaddresses = this.inscoAddresses
  //   let aid = insaddresses.findIndex(x => x.INSURANCE_COMPANY_ID === insurancecompanyid)
  //   let item = insaddresses[aid];// { ADJUSTER_ID: 4, ADJUSTER_NAME: "Donna Luciani", edit: true }
  //   this.currentnewItem.insaddress = item

  // }
  bind() {
    // this.adjusters = this.appService.adjusterList
    // console.log('adjusters ', this.adjusters);

    // this.bookApi.getGenres().then(genres => {
    //   this.adjusters = genres;
    // });
  }

  // createEventListeners() {
  //   this.adjusterSelectedListener = e => {
  //     if (e && e.detail) {
  //       this.adjuster = e.detail.value;
  //       console.log('this.adjuster  createEventListeners ', this.adjuster)
  //     }
  //   };

  // }

  detached() {
    // alert('det')
    // this.ratingElement.removeEventListener('change', this.ratingChangedListener);
    // this.selectAdjusterElement.removeEventListener('change', this.adjusterSelectedListener);
  }


  saveinmate() {

    console.log(' call save ', JSON.stringify(this.appService.currentItem) === JSON.stringify(this.appService.testrec)) //this.appService.currentClaim)
    //return 

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


  // selectOneToOneTab(tab) {
  //   this.appService.dataFormOneToOneTabs.forEach(t => t.isSelected = false);
  //   tab.isSelected = true;
  //   this.currentOneToOneTab = tab;
  //   // this.appService.currentItem = this.appService.currentClaim //this.currentItem
  //   return true;
  // }
  // selectOneToManyTab(tab) {
  //   this.appService.dataFormOneToManyTabs.forEach(t => t.isSelected = false);
  //   tab.isSelected = true;
  //   this.currentOneToManyTab = tab;
  //   // this.appService.currentItem = this.appService.currentClaim //this.currentItem
  //   return true;
  // }


  // closeTab(tab) {

  //   let index = this.appService.tabs.indexOf(tab);
  //   tab.isSelected = false;
  //   this.appService.tabs.splice(index, 1);

  // }
}

