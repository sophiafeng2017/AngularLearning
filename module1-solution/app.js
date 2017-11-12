(function () {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchString = "";
  $scope.result = "";

  $scope.check = function () {
  if ($scope.lunchString == "")
  {
    $scope.result = "Please enter data first";
    return;
  }
  var dishes = $scope.lunchString.split(',');
  var len = dishes.length;
  for(var x in dishes) {
    if (dishes[x] == " " || dishes[x] == "") {
      len--;
    }
    console.log(len);
  }
  if (len <= 3 ) {
    $scope.result = "Enjoy!";
  }
  else {
    $scope.result = "Too much!";
  }
};

};
})();
