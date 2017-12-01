(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/templates/item-detail.template.html',
  bindings: {
    items: '<',
  }
});


})();
