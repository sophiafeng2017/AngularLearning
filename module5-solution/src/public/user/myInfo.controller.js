(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['registrationService', 'ApiPath'];
function MyInfoController(registrationService, ApiPath) {
  var myCtrl = this;
  myCtrl.basePath = ApiPath;
  
  myCtrl.favoriteItem = {
    short_name: "",
    name: "",
    description: ""
  };

  myCtrl.userInfo = registrationService.getUser();
  //  console.log(myCtrl.userInfo);
  if (myCtrl.userInfo.firstname == undefined) {
    myCtrl.state = false;
  }
  else {
    myCtrl.state = true;
    var promise = registrationService.getfavoriteItem(myCtrl.userInfo.menushortname);

    promise.then(function(response) {
      console.log(response);
      myCtrl.favoriteItem.short_name = response.short_name;
      myCtrl.favoriteItem.name = response.name;
      myCtrl.favoriteItem.description = response.description;
    })
    .catch(function (error) {
    //  console.log("error");
      myCtrl.state = false;
    });
  }

  };

})();
