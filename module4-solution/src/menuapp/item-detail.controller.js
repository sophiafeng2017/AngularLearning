(function () {
'use strict';

angular.module('Data')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['MenuDataService', 'items'];
function ItemDetailController(MenuDataService, items) {
  var itemsDetail = this;
  itemsDetail.items = items;
}

})();
