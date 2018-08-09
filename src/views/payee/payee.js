import { ApiService } from '../../utils/servicesApi';
import { inject } from 'aurelia-dependency-injection';
import { Router } from 'aurelia-router';
// import { Router, Redirect } from 'aurelia-router';
// import { UtilService } from '../../services/util-service';
// // import moment from 'moment';
import { ApplicationService } from '../../services/application-service';
// import { MyDataService } from "../../services/my-data-service";
// @inject(ApiService, ApplicationService, MyDataService)
// @inject(Router, ApiService, UtilService, ApplicationService, MyDataService)

@inject(Router,ApiService, ApplicationService)

export class Payee {
  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };
  heading = 'Payees...';
  constructor(api, appService) {
    this.api = api
    this.appService = appService
    this.router = router
  }

  activate() {
    console.log('in activate')
    this.payees = this.appService.payeelist
  }
  editPayee(router,payee, editstate, index) {
    this.currentPayee = payee
    // for (let bk of this.currentRecord.booking) {
    //   bk.isSelected = false
    // }
    this.currentRecord.payee[index].isSelected = true
    payee.edit = !editstate

  }

  addPayee() {
    let payee = this.currentRecord

    let item
    let serviceDateFrom = moment().format('YYYY-MM-DD')
    let payeerec = {
      "payeename": '',
      "payeefein": '',
      "payeeaddr": '',
      "payeecity": '',
      "payeestate": '',
      "payeezip": ''
    }
    payee.unshift(payeerec)


  }
  savePayee() {
    console.log(' call save ', this.currentRecord)// JSON.stringify(this.appService.currentItem) === JSON.stringify(this.appService.testrec)) //this.appService.currentClaim)
    this.message='You clicked save'
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

