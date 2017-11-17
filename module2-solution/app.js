(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemToBuy = this;

  itemToBuy.items = ShoppingListCheckOffService.getBuyItems();
  // if (itemToBuy.items.length == 0)
  // {
  //   itemToBuy.errorMessage = itemToBuy
  // }
  itemToBuy.buyNow = function (item, itemIndex) {
    ShoppingListCheckOffService.buyNow(item, itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemBought = this;

  itemBought.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  service.buyItems = [];
  service.boughtItems = [];

  service.buyItems = [{name: "cookies", quantity: "10"}, {name: "apples", quantity: "10"}, {name: "oranges", quantity: "15"},
                  {name: "cakes", quantity: "5"}, {name: "wines", quantity: "2"}];

  service.buyNow = function (item, itemIdex) {
    service.boughtItems.push(item);
    service.buyItems.splice(itemIdex, 1);
  };

  service.getBuyItems = function () {
    return service.buyItems ;
  };

  service.getBoughtItems = function () {
    return service.boughtItems;
  };
}
})();
