 //import numeral from 'numeral';

// export class CurrencyFormatValueConverter {
export class SocialFormatValueConverter {
  toView(value) {
    console.log(value)
     return (value.slice(0,3)+'-'+value.slice(3,6)+'-'+value.slice(6,10))//.format('(000-00-0000)');
    
  }
}