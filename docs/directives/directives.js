weatherApp.directive("searchResult", function() {
  return {
    restrict: "E",
    templateUrl: "./directives/searchResult.html",
    replace: true,
    scope: {
      result: "=",
      convertTime: "&",
      convertToStandard: "&",
      dateFormat: "@"
    }
  };
});

weatherApp.directive("searchHeader", function() {
  return {
    restrict: "E",
    templateUrl: "./directives/searchHeader.html",
    replace: true,
    scope: {
      days: "@"
    }
  };
});
