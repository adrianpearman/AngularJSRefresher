var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "pages/main.html",
      controller: "mainController"
    })
    .when("/second", {
      templateUrl: "pages/second.html",
      controller: "secondController"
    });
});

myApp.controller("mainController", [
  "$scope",
  function($scope) {
    $scope.people = [
      {
        name: "John Dow",
        address: "555 Main St",
        city: "New York",
        state: "NY",
        zip: 11111
      },
      {
        name: "James Dow",
        address: "555 Main St",
        city: "New York",
        state: "NY",
        zip: 88888
      },
      {
        name: "Jane Dow",
        address: "555 Main St",
        city: "New York",
        state: "NY",
        zip: 22222
      }
    ];

    $scope.formattedAddress = function(person) {
      return `${person.address}, ${person.city}, ${person.state}, ${
        person.zip
      }`;
    };
  }
]);

myApp.controller("secondController", ["$scope", function($scope) {}]);

myApp.directive("searchResult", function() {
  return {
    restrict: "E",
    //E for element, C for class, M for comment, A for attribute. Default is AE for both
    templateUrl: "./directives/searchResult.html",
    replace: true, // will remove the trailing and opening element tags
    scope: {
      // test: "@", used for sending text
      person: "=",
      formattedAddress: "&"
    },
    transclude: true
    // compile: function(elem, attrs) {
    //   console.log("Compilling..."), console.log(elem);

    //   return {
    //     // pre: function(scope, element, attributes) {
    //     //   console.log("Pre-linking");
    //     //   console.log(element);
    //     // },
    //     post: function(scope, elements, attributes) {
    //       //   console.log("Post-linking");
    //       console.log(scope); // Shows all of the scope values
    //       console.log(elements); // Shows all of the element values
    //       console.log(attributes); // Shows all of the attribute values
    //     }
    //   };
    // }
  };
});
