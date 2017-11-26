(function(){
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', foundItems);

  function foundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: FoundItemController,
      controllerAs: 'menu',
      bindToController: true
    };

    return ddo;
  }


  function FoundItemController() {
    var menu = this;
  }


  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;

    menu.getfoundItem = function (searchItem) {
      var promise = MenuSearchService.getMatchedMenuItems(searchItem);

      promise.then(function (foundItems) {
        menu.found = foundItems;
      });
    }

    menu.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };
  }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;

      var foundItems = [];

      service.removeItem = function (itemIndex) {
        foundItems.splice(itemIndex, 1);
      };

      service.getMatchedMenuItems = function (foundItem) {
        // process result and only keep items that match
        var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        });

        return response.then(function (result) {

        for (var i = 0; i < result.data.menu_items.length; i++) {
            var name = result.data.menu_items[i].name;

            if (foundItem != "" && name.toLowerCase().indexOf(foundItem) !== -1) {
              foundItems.push(result.data.menu_items[i]);
            }
          }
          // return processed items
          return foundItems;
        });
      };
  }

})();
