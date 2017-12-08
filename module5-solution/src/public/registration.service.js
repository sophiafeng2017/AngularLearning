(function () {
"use strict";

angular.module('public')
.service('registrationService', registrationService);

registrationService.$inject = ['$http', 'ApiPath'];
function registrationService($http, ApiPath) {
  var service = this;
  var userInfo = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    menushortname: ""
  };

  service.getfavoriteItem = function (shortname) {
    var url = ApiPath + '/menu_items/' + shortname +'.json';
    return $http.get(url).then(function (response) {
      return response.data;
    });
  };

  service.saveUser = function (user) {
  //  console.log(user);
    userInfo.firstname = user.firstname;
    userInfo.lastname = user.lastname;
    userInfo.email = user.email;
    userInfo.phone = user.phone;
    userInfo.menushortname = user.menushortname;
  };

  service.getUser = function () {
    return userInfo;
  };
}

})();
