angular.module("sportsStore", ["customFilters", "cart", "ngRoute"])
    .config(function ($routeProvider) {
        $routeProvider.when("/checkout", {
            templateUrl: "angularjs/views/checkoutSummary.html"
        });

        $routeProvider.when("/products", {
            templateUrl: "angularjs/views/productList.html"
        });

        $routeProvider.when("/complete", {
            templateUrl: "angularjs/views/thankYou.html"
        });

        $routeProvider.when("/placeorder", {
            templateUrl: "angularjs/views/placeOrder.html"
        });

        $routeProvider.otherwise({
            templateUrl: "angularjs/views/productList.html"
        });
    });
