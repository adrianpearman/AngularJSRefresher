// MODULE
// ("module name", ["dependancies injected into the module"])
var myApp = angular.module("myApp", ["ngMessages", "ngResource"]);

var Person = function(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
};

function logPerson(person) {
  console.log(person);
}

var adrian = new Person("Adrian", "Pearman");

// CONTROLLER
// Minification Section - the content on the array determines the order in which the injected values are passed into the function. This is expecially important during minification to maintain the correct values are passed through properly.
myApp.controller("mainController", [
  "$scope",
  "$log",
  "$filter",
  "$resource",
  "$timeout",
  "$interval",
  "$http",
  function($scope, $log, $filter, $resource, $timeout, $interval, $http) {
    $log.info($scope);
    $scope.name = "John Doe";
    $scope.firstname = adrian.firstname;
    $scope.lastname = adrian.lastname;
    $scope.getName = function() {
      return $scope.firstname + " " + $scope.lastname;
    };
    $scope.hour = new Date().getUTCHours() - 4;
    $scope.minutes = new Date().getMinutes();
    $scope.seconds = new Date().getSeconds();
    $interval(function() {
      $scope.seconds = new Date().getSeconds();
    }, 1000);
    $scope.handle = "";
    $scope.formattedHandle = function() {
      return $filter("lowercase")($scope.handle);
    };
    $scope.characters = 5;

    // Using XMLRequest instead of $http
    // var rulesRequest = new XMLHttpRequest()
    // rulesRequest.onreadystatechange = function(){
    //     $scope.$apply(function(){
    //         if(rulesRequest.readyState == 4 && rulesRequest.status == 200){
    //             $scope.rules = JSON.parse(rulesRequest.responseText)
    //         }
    //     })
    // }
    // rulesRequest.open('GET', "http://website.that.data.comes.from.com/api", true)
    // rulesRequest.send()

    // Using the $http directive
    $http
      .get("http://website.that.data.comes.from.com/api")
      .success(function(data) {
        $scope.rules = data;
      })
      .error(function(error, status) {
        console.log(error);
      });

    $scope.rules = [
      { rulename: "Must Be 5 Characters" },
      { rulename: "Must not be used elsewhere" },
      { rulename: "Must be cool" }
    ];

    $log.info($scope.rules);

    //   Using built in $log service to display content to the console
    //   console.log($scope.getName());
    //   $log.log($scope.getName());
    //   $log.info($scope.getName());
    //   $log.error($scope.getName());
    //   $log.warn($scope.getName());
    //   $log.debug($scope.getName());

    // $filter - used for formatting data displayed to the user.
    $scope.formattedName = $filter("uppercase")($scope.firstname);
    $log.info($scope.formattedName);

    //   $resource - used for making network requests
    console.log($resource);

    $timeout(function() {
      $scope.firstname = "Everybody";
    }, 3000);

    $scope.alertClick = function() {
      alert("clicked");
    };

    $scope.newRule = "";
    $scope.addRule = function() {
      $http
        .post("/api-endpoint", { newRule: $scope.newRule })
        .success(function(result) {
          $scope.rules = result;
          $scope.newRule = "";
        })
        .error(function(error, status) {
          console.log(error);
        });
    };
  }
]);

myApp.controller("secondController", [
  "$scope",
  function($scope) {
    $scope.name = ",sb,snwsv";
  }
]);
