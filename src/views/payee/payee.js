
// import { MyDataService } from "../../services/my-data-service";
// @inject(ApiService, ApplicationService, MyDataService)
// @inject(Router, ApiService, UtilService, ApplicationService, MyDataService)
// import { Router, Redirect } from 'aurelia-router';
// import { UtilService } from '../../services/util-service';
// // import moment from 'moment';
import { ApiService } from '../../utils/servicesApi';
import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
import { ApplicationService } from '../../services/application-service';
import { bindable } from 'aurelia-framework';

@inject(Router, ApiService, ApplicationService)


export class Payee {
  @bindable searchdoc
  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };
  heading = 'Payees...';
  metapayees = ['payeename', 'payeefein', 'payeeaddr', 'payeecity', 'payeestate', 'payeeaddr']

  constructor(router, api, appService) {
    this.api = api
    this.appService = appService
    this.router = router
  }
  searchdocChanged(value) {
    if (value === "") { this.payees = this.allpayees } else {
      this.payees = this.payees.filter((item) => {
        for (let i in this.metapayees) {
          let md = this.metapayees[i]
          if (item[md] !== undefined) {
            // if (item[md].toLowerCase().search(value.toLowerCase()) != -1) return true
            if ((item[md]).toLowerCase().search(value.toLowerCase()) != -1) return true
          }
        }
      });
    }
    return
  }
  activate() {
    console.log('in activate')
    this.payees = this.appService.payeelist
    this.allpayees = this.payees
  }

  // // if update is clicked editstate=false if done is clicked editstate=true

  editPayee(payee, editstate, index) {
    this.currentPayee = payee
    // for (let bk of this.currentRecord.booking) {
    //   bk.isSelected = false
    // }
    editstate ? this.payees[index].isSelected = false : this.payees[index].isSelected = true

    if (payee.payeemode === 'insert') {
      // create 
      // this.api.createpayee(payee)
      //   .then((jsonRes) => {
      //     this.upmess = jsonRes


      //   })
      console.log(' await payeelist ', this.appService.payeelist)
    } else {
      payee.payeemode === 'update'

      // this.api.updatepayee(payee)
      //   .then((jsonRes) => {
      //     this.upmess = jsonRes
      //   })

    }

    payee.edit = !editstate

  }

  addPayee() {
    // let payee = this.currentRecord

    //let item
    //let serviceDateFrom = moment().format('YYYY-MM-DD')
    let payeerec = {
      "payeename": '',
      "payeefein": '',
      "payeeaddr": '',
      "payeecity": '',
      "payeestate": '',
      "payeezip": '',
      "payeemode": 'insert'
    }
    this.payees.unshift(payeerec)
    this.payees[0].isSelected = true
    this.payees[0].edit = true

  }
  savePayee() {
    console.log(' call save ', this.currentRecord)// JSON.stringify(this.appService.currentItem) === JSON.stringify(this.appService.testrec)) //this.appService.currentClaim)
    this.message = 'You clicked save'
    // if (this.recordId === 'create') {
    //   this.api.addinmate(this.currentRecord)
    //   Promise.all(
    //     this.api.saveinmate(this.currentRecord).then((res) => this.close('inmates'))
    //   )
    // } else {
    //   this.api.saveinmate(this.currentRecord)
    // }
  }

  close(path) {


    // let tab = this.appService.tabs.find(f => f.isSelected);
    // Next, we navigate to the newly created claim

    // Finally, we close out this tab
    // this.closeTab(tab);\
    let rt2
    this.closeTab
    if (path === undefined) {
      rt2 = `#/inmates`
    } else rt2 = `#/${path}`
    this.router.navigate(rt2);
  }
}