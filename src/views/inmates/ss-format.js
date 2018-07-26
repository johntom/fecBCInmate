 import numeral from 'numeral';

// export class CurrencyFormatValueConverter {
export class SsFormatValueConverter {
  toView(value) {
     return numeral(value).format('(000-00-0000)');
    //return 'ss'// (value).format('(000-00-0000)');
  }
}