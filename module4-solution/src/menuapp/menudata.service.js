(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath']
function MenuDataService($http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var categs = [];
  var items = [];

  service.getAllCategories = function () {

    var response = $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json")
        });


        return response.then(function (result) {
          //console.log(result);
          categs = result.data;
          // return processed items
          return categs;
        });
  };

  service.getItemsForCategory = function (itemShortName) {
    var response = $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json?category=" + itemShortName)
        });
        return response.then(function (result) {
          items = result.data.menu_items;
          //console.log(items);
        return items;
        });
  };
}

})();
