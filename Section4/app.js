var myApp = angular.module("myApp", []);

myApp.controller("parent1Controller", [
  "$scope",
  function($scope) {
    $scope.parent1vm = {};
    $scope.parent1vm.message = "Parent 1 Message";
    $scope.message = "Parent 1 Message";
  }
]);

myApp.controller("child1Controller", [
  "$scope",
  function($scope) {
    $scope.child1vm = {};
    $scope.child1vm.message = "Child 1 Message";
    $scope.message = "Child 1 Message";
  }
]);

myApp.controller("parent2Controller", [
  "$scope",
  function($scope) {
    $scope.message = "Parent 2 Message";
  }
]);

myApp.controller("child2Controller", [
  "$scope",
  function($scope) {
    $scope.message = "Child 2 Message";
  }
]);

myApp.controller("parent3Controller", [
  function() {
    this.message = "Parent 3 Message";
  }
]);

myApp.controller("child3Controller", [
  function() {
    this.message = "Child 3 Message";
  }
]);
