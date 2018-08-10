import moment from 'moment';
export class Welcome {
  
  constructor() {
  let nDate = moment().format('MM/DD/YYYY')
    this.heading = '1 - Welcome to the Aurelia Navigation App - 2w ' + nDate
  }

}
