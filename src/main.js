import {PLATFORM} from 'aurelia-pal';
import 'babel-polyfill';
import * as Bluebird from 'bluebird';
import 'jquery';
import 'bootstrap';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-bridge')
    .plugin('aurelia-bootstrap-select');
    // .plugin('aurelia-kendoui-bridge', (kendo) => kendo.pro());

  await aurelia.start();
  await aurelia.setRoot(PLATFORM.moduleName('app'));
}
