angular.module("sportsStore", ["customFilters", "header", "footer", "ngRoute"])
    .config(function ($routeProvider) {

        $routeProvider.when("/home", {
            templateUrl: "angularjs/views/home.html"
        });

        $routeProvider.when("/about", {
            templateUrl: "angularjs/views/about.html"
        });

        $routeProvider.when("/promotions", {
            templateUrl: "angularjs/views/promotions.html"
        });

        $routeProvider.when("/tutorial", {
            templateUrl: "angularjs/views/tutorial.html"
        });

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
