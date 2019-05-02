angular.module("sportsStore")
        .constant("dataUrl", "http://localhost:5500/products")
        .controller('sportsStoreCtrl', function($scope, $http, dataUrl){
            $scope.data = {};

            $http({
                method: 'GET',
                url: dataUrl
            })
            .then(response => {
                $scope.data.products = response.data;
            })
            .catch(error => {
                $scope.data.error = error;
            });

        });