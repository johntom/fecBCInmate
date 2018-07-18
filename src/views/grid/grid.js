import { ApiService } from '../../utils/servicesApi';
import { inject } from 'aurelia-dependency-injection';
// // import { Router } from 'aurelia-router';
// import { Router, Redirect } from 'aurelia-router';
// import { UtilService } from '../../services/util-service';
// // import moment from 'moment';
// import { ApplicationService } from '../../services/application-service';
// import { MyDataService } from "../../services/my-data-service";
// @inject(ApiService, ApplicationService, MyDataService)

// @inject(Router, ApiService, UtilService, ApplicationService, MyDataService)

@inject(ApiService)

export class Grid {
  pageable = {
    refresh: true,
    pageSizes: true,
    buttonCount: 10
  };
  constructor(api) {
    // this.datasource = {
    //   type: 'odata',
    //   transport: {
    //     read: '//demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'
    //   },
    //   pageSize: 5
    // };
 heading = 'Inmates...';

  this.datasource = new kendo.data.DataSource({
    transport: {
      read: (options) => {
        //  this.loadData(this.capColor, this.prevtown)
        this.loadData()
          .then((claim) => {
            console.log(' inv datasource ', claim.length);// inv[0]);
            options.success(claim);
          });
      },
      
    },
    schema: {
      model: {
        id: "id", // Must assign id for update to work
        // fields: {
        //   // LegacyID: { type: "number" }, // scan template
        //   Artist: { type: "string" }, // barcode insured
        // }
      }
    },
    pageSize: 12,
    // aggregate: [{ field: "type", aggregate: "count" },
    //   { field: "template", aggregate: "count" }
    // ]
  })
}


    activate() {
      console.log('in activate')

      // return this.api.getInmates()
      //   .then(jsonRes => {
      //     this.inmates = jsonRes.data
      //     this.allinmates = jsonRes.data
      //     console.log('inmates ', this.inmates)
      //   });
    }
  
 loadData() {
    console.log('this.loadData ')
   return this.api.getInmatesExpanded()
        .then(jsonRes => {
          this.inmates = jsonRes.data
         
         this.allinmates = jsonRes.data
          console.log('inmates ', this.inmates)
        });

    
    }
  }



}