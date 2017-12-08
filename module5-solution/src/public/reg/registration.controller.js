(function () {
"use strict";

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['registrationService'];
function RegistrationController(registrationService) {
  var reg = this;

  reg.submit = function () {
      //console.log(reg.user);
    var promise = registrationService.getfavoriteItem(reg.user.menushortname);

    promise.then(function(response) {
      //console.log(response.data);
      reg.completed = true;

      registrationService.saveUser(reg.user);
    })
    .catch(function (error) {
    //  console.log("error");
      reg.completed = false;
    });

  };
}

})();
