angular.module("footer", [])
    .directive("footerNav", function () {
        return {
            restrict: "E",
            templateUrl: "angularjs/views/footer.html"
        };
    });
