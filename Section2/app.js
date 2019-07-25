var myApp = angular.module("myApp", ["ngRoute"]);

// how to configure routing within an application
myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      //
      templateUrl: "pages/main.html",
      // the controller that the page will use
      controller: "mainController"
    })
    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController"
    })
    .when("/third/:id", {
      templateUrl: "pages/third.html",
      controller: "thirdController"
    });
});

// Services - a singleton object that can hold data for the application
myApp.service("nameService", function() {
  var self = this;
  this.name = "John Doe";

  this.nameLength = function() {
    return self.name.length;
  };
});

myApp.controller("mainController", [
  "$scope",
  "$location",
  "$log",
  "nameService",
  function($scope, $location, $log, nameService) {
    //   logs out the url location
    // $log.info($location.path());
    $scope.name = nameService.name;

    // A watch is added to update the service value. In this case it's the name property
    $scope.$watch("name", function() {
      nameService.name = $scope.name;
    });
    $log.log(nameService.name);
    $log.log(nameService.nameLength());
  }
]);

myApp.controller("secondController", [
  "$scope",
  "$location",
  "$log",
  "nameService",
  function($scope, $location, $log, nameService) {
    $scope.name = nameService.name;
  }
]);

myApp.controller("thirdController", [
  "$scope",
  "$location",
  "$log",
  "$routeParams",
  function($scope, $location, $log, $routeParams) {
    $scope.name = "Third";
    $scope.paramID = $routeParams.id || 1;
  }
]);
