// Routes
weatherApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./pages/homepage.html",
      controller: "mainController"
    })
    .when("/forecast", {
      templateUrl: "./pages/forecast.html",
      controller: "forecastController"
    })
    .when("/forecast/:days", {
      templateUrl: "./pages/forecast.html",
      controller: "forecastController"
    });
});
