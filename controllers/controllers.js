// Controllers
weatherApp.controller("mainController", [
  "$scope",
  "$http",
  "$log",
  "$location",
  "weatherService",
  function($scope, $http, $log, $location, weatherService) {
    $scope.city = weatherService.city;
    $scope.$watch("city", function() {
      weatherService.city = $scope.city;
    });
    $scope.submit = function() {
      $location.path("/forecast");
    };
  }
]);

weatherApp.controller("forecastController", [
  "$scope",
  "$resource",
  "$http",
  "$routeParams",
  "$log",
  "weatherService",
  function($scope, $resource, $http, $routeParams, $log, weatherService) {
    $scope.city = weatherService.city;
    $scope.resultList = [];
    $scope.days = $routeParams.days || "7";
    $scope.convertToFarenheit = function(degK) {
      return Math.round(1.8 * (degK - 273) + 32);
    };
    $scope.convertTime = function(date) {
      return new Date(date * 1000);
    };
    $scope.titleCase = function toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
    };

    var request = {
      method: "GET",
      url: "https://api.openweathermap.org/data/2.5/forecast/daily",
      params: {
        q: $scope.city,
        mode: "json",
        cnt: $scope.days,
        appid: "ff23d064ff7d2da292d2a63928645886"
      }
    };

    $http(request)
      .then(function(response) {
        $scope.$watch("weatherList", function() {
          weatherService.weatherList = response.data.list;
          $scope.resultList = weatherService.weatherList;
        });
      })
      .catch(function(data) {
        console.log(data);
      });
  }
]);
