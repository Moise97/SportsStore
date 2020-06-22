angular.module("sportsStore")
    .constant("dataUrl", "http://localhost:8082/products")
    .constant("orderUrl", "http://localhost:5500/orders")
    .controller('mainController', function ($scope, $http, $location, dataUrl, orderUrl, cart) {

        $scope.data = {};
        $http({
            method: 'GET',
            url: dataUrl
        })
            .then(response => {     // success
                $scope.data.products = response.data;
            })
            .catch(error => {       // failed
                $scope.data.error = error;
            });

        /**
         * Perform a command.
         * @param shippingDetails
         */
        $scope.sendOrder = function (shippingDetails) {

            let order = angular.copy(shippingDetails);
            order.products = cart.getProducts();

            $http({
                url: orderUrl,
                method: "POST",
                data: order
            })
                .then(function (response) {  // success
                    $scope.data.orderId = response.data.id;
                    cart.getProducts().length = 0;
                })
                .catch(function (error) {  // failed
                    $scope.data.orderError = error;
                })
                .finally(function () {
                    $location.path("/complete");
                })
        }
    });