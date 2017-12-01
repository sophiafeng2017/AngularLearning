(function () {
'use strict';

angular.module('Data')
.controller('MainCategController', MainCategController);


MainCategController.$inject = ['MenuDataService', 'items'];
function MainCategController(MenuDataService, items) {
  var mainCateg = this;
  mainCateg.items = items;
}

})();
