angular.module("sportsStore")
        .constant("dataUrl", "http://localhost:5500/products")
        .controller('sportsStoreCtrl', function($scope, $http, dataUrl){
            $scope.data = {};

            $http({
                method: 'GET',
                url: dataUrl
            })
            .then(function (response){
                console.log(response);
                $scope.data.products = response.data;
            },function (error){
                $scope.data.error = error;
            });

        });