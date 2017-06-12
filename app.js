(
  function () {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope){
      console.log("loading..");
      $scope.dishes="";
      $scope.lunchStatus="";
      $scope.displayLunchStatus = function(){
        if($scope.dishes==""){
          $scope.lunchStatus="Please enter data first";
          return;
        }
        var dishesAry = $scope.dishes.split(',');
        if(dishesAry.length > 3){
          $scope.lunchStatus="Too much!";
        }else{
          $scope.lunchStatus="Enjoy!";
        }
      }
    };
  }
)()
