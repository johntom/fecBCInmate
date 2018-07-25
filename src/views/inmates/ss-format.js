import numeral from 'numeral';

export class ssFormatValueConverter {
  toView(value) {
    return numeral(value).format('(000-00-0000)');
  }
}