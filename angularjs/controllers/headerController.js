angular.module("header", ["cart"])
    .directive("headerNav", function () {
        return {
            restrict: "E",
            templateUrl: "angularjs/views/header.html"
        };
    });
