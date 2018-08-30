// import 'bootstrap-select/css/bootstrap-select.min.css';

// export class AbSelect {

//   allCondiments = [
//     { id: 1, option: 'Ketchup', group: 'Condiments' },
//     { id: 2, option: 'Mustard', group: 'Condiments' },
//     { id: 10, option: 'Steam', group: 'Breads' },
//     { id: 12, option: 'Toasted', group: 'Breads' },
//   ];

//   constructor() {

//   }
// }
import 'bootstrap-select/css/bootstrap-select.min.css';
// import jQuery from 'jquery';
// import { inject } from 'aurelia-framework';
// import { bindable } from 'aurelia-framework';
import { bindable, inject } from 'aurelia-framework';
@inject()
export class AbSelect {
  //  bindingEngine : BindingEngine;
  @bindable picker;
  @bindable selectCamping;
  @bindable selectCondiment;
  @bindable selectStyledCondiment;
  @bindable selectPicnic;

  @bindable condimentItem;
  @bindable condimentValue;

  @bindable condimentItem2;
  @bindable condimentValue2;

  // @bindable condimentItem;
  // @bindable condimentValue;
  //  condimentItemChanged(newItem) {
  //   // output --> { id: 2, option: 'Mustard', company: 'French\'s' }
  //   console.log('Item changed:', newItem);
  // }

  // condimentValueChanged(newValue) {
  //   // output --> 2
  //   console.log('Value changed:', newValue)
  // }
  selectOptions = {
    liveSearch: true,
    showSubtext: true,
    showTick: true,
    selectedTextFormat: 'count > 3',
    actionsBox: true
  };
  //  };
  allCondimentsbase = [
    { id: 1, option: 'Ketchup', group: 'Condiments' },
    { id: 2, option: 'Mustard', group: 'Condiments' },
    { id: 10, option: 'Steam', group: 'Breads' },
    { id: 12, option: 'Toasted', group: 'Breads' },
  ];


  isEditing = false;
  isOptgroupBreadDisabled = false;
  selectMappingStructure = {
    subtext: 'company'
  };

  mappingDataStructure = {
    class: 'class',

    option: 'name',

    style: 'style',
    title: 'title',
    tokens: 'tokens'
  }

  allCampingStuff = ['Tent', 'Flashlight', 'Sleeping Bag'];
  allCampingStuffObject = [
    { id: 1, name: 'Tent', company: 'Sweet' },
    { id: 2, name: 'Flashlight', company: 'Sour' },
    { id: 3, name: 'Sleeping Bag', company: 'Spice' },
    { id: 4, name: 'Rum', company: 'Mt Gay' },



  ];

  // condimentSelection = {
  //   selectedCondimentItem: 'Flashlight',
  //   selectedCondimentValue: 'Flashlight'
  // };
  //  selectedCondimentItemSubscription: Subscription;


  // <div>Value: ${camping}<br /> Item: ${campingValue}</div>
  // 	<div>
  // 		<abp-select collection.bind="allCampingStuff" selected-value.bind="camping" selected-item.bind="campingValue"></abp-select>
  // 	</div>
  allSelectionWithGroups = [
    { id: 1, option: 'Relish', company: 'Sweet', group: 'Condiments' },
    { id: 12, option: 'Steam', group: 'Breads' },
    { id: 11, option: 'Plain', disabled: false, group: 'Breads' },
    { id: 4, option: 'Mayonnaise', company: 'Miracle Whip', group: 'Condiments' },
    { id: 3, option: 'Ketchup', company: 'Heinz', group: 'Condiments' },
    { id: 2, option: 'Mustard', company: 'French\'s', group: 'Condiments' },
    { id: 13, option: 'Toasted', group: 'Breads', disabled: true }
  ];
  allCondiments = [
    { id: 1, option: 'Ketchup', company: 'Heinz' },
    { id: 2, option: 'Mustard', company: 'French\'s', divider: true },
    { id: 3, option: 'Relish', company: 'Sweet', style: 'background: #5cb85c; color: #fff;', title: 'Alternate Title' },
    { id: 4, option: 'Mayonnaise', company: 'Miracle Whip', icon: 'glyphicon-heart' }
  ];
  allStyledCondiments = [
    { id: 1, option: 'Mustard', company: 'French\'s', content: '<span class="label label-warning">Mustard</span>' },
    { id: 2, option: 'Ketchup', company: 'Heinz', content: '<span class="label label-danger">Ketchup</span>' },
    { id: 3, option: 'Relish', company: 'Sweet', content: '<span class="label label-success">Relish</span>' },
    { id: 4, option: 'Mayonnaise', company: 'Miracle Whip', disabled: true, content: '<span class="label label-info">Mayonnaise</span>' }
  ];



  constructor() {
    // this.condimentSelection = {
    //   selectedCondimentItem: this.allCampingStuff[2],//'Flashlight',
    //   selectedCondimentValue: this.allCampingStuff[2]//'Flashlight'
    //   // selectedCondimentItem: 'Flashlight',
    //   // selectedCondimentValue: 'Flashlight'
    // };
  }

  attached() {
    // let observer = this.bindingEngine.expressionObserver(this.condimentSelection, 'selectedCondimentItem');
    // this.selectedCondimentItemSubscription= observer.subscribe(newValue => this.selectedCondimentItemChanged(newValue));

    // this.condimentSelection = {
    //   // selectedCondimentItem: this.allCampingStuff[2],//'Flashlight',
    //   // selectedCondimentValue: this.allCampingStuff[2]//'Flashlight'
    //   selectedCondimentItem: 'Flashlight',
    //   selectedCondimentValue: 'Flashlight'
    // };

  }

  //  detached() {
  //   this.businessesSubscription.dispose();
  //  }

  //  selectedCondimentItemChanged(newValue) {
  //    // handle value change
  //  } stringify
  checkValue() {
    alert(this.condimentSelection.selectedCondimentValue + ' ' + JSON.stringify(this.condimentSelection.selectedCondimentItem)  + ' ' + this.condimentSelection2.selectedCondimentValue)

  }
  activate() {


    // @bindable condimentItem;
    //   @bindable condimentValue;
    this.condimentSelection = {
      selectedCondimentItem: this.allCampingStuffObject[1], //'Flashlight',
      selectedCondimentValue: this.allCampingStuffObject[1] //'Flashlight'
      // selectedCondimentItem: 'Flashlight',
      // selectedCondimentValue: 'Flashlight'
    };


    //   @bindable condimentItem2;
    //   @bindable condimentValue2;
    this.condimentSelection2 = {
      selectedCondimentItem: this.allCampingStuffObject[3],
      selectedCondimentValue: this.allCampingStuffObject[3]

    };


    // <abp-select element.bind="mypicker"
    //    selected-item.bind="condimentSelection.selectedCondimentItem"
    //    selected-value.bind="condimentSelection.selectedCondimentValue"
    //    collection.bind="allCampingStuff">
    // </abp-select>

    // <label class="control-label">Object Collection - Empty on Null, Change Title, Class Styling, Alternate Title (on Relish)</label>
    // 			<div>Value: ${condimentValue} <br /> Item: ${condiment | stringify}</div>
    // 			<div>
    // 				<abp-select picker-options.bind="selectOptions" empty-on-null="true" selected-item.bind="condiment" selected-value.bind="condimentValue"
    // 				 disabled="false" collection.bind="allCondiments" data-mapping-structure.bind="selectMappingStructure" object-key="id"
    // 				 element.bind="selectCondiment"></abp-select>
    // 			</div>


    //    selected-item.bind="condiment2Selection.selectedCondimentItem"
    //          selected-value.bind="condiment2Selection.selectedCondimentValue"

    //  this.condimentSelection = {
    //       selectedCondimentItem: this.allCampingStuff[2],//'Flashlight',
    //       selectedCondimentValue: this.allCampingStuff[2]//'Flashlight'
    //       // selectedCondimentItem: 'Flashlight',
    //       // selectedCondimentValue: 'Flashlight'
    //     };


    //     $(document).ready(function () {
    //       // $('.selectpicker').selectpicker({
    //       //   liveSearch: true,
    //       //   showSubtext: true
    //       // });
    //       this.camping='Flashlight'
    //        this.campingValue='Flashlight'
    //       $('select[name=selValue]').val(2);
    // $('.selectpicker').selectpicker('refresh')
    //       	// <div>Value: ${camping}<br /> Item: ${campingValue}</div>
    // 		// 	<div>
    // 		// 		<abp-select collection.bind="allCampingStuff" selected-value.bind="camping" selected-item.bind="campingValue"></abp-select>
    // 		// 	</div>
    //     });
  }
}
