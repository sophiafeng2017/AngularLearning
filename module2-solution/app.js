(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  $scope.test = "test"
  // var itemToBuy = this;
  // var item = {
  //         name: "cookies",
  //         quantity: "10"
  //       };
  // itemToBuy.items.push(item);
  //
  // itemToBuy.buyNow = function () {
  //   ShoppingListCheckOffService.buyNow(itemToBuy.name, itemToBuy.quantity);
  // }
}

AlreadyBoughtController.$inject = ['$scope','ShoppingListCheckOffService'];
function AlreadyBoughtController($scope, ShoppingListCheckOffService) {
  var itembought = this;

  $scope.itemBought = [] ;
}

ShoppingListCheckOffService.$inject = ['scope'];
function ShoppingListCheckOffService($scope) {
  var service = this;

  // List of shopping items
  var items = [];

  service.buyNow = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };
    items.push(item);
  };

  service.getItems = function () {
    return items;
  };
}
})();
