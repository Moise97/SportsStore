angular.module("sportsStore")
        .controller("productListCtrl", function($scope, $filter){
            let selectedCategory = null;

            $scope.selectCategory = function(newCategory){
                selectedCategory = newCategory;
            }

            $filter.categoryFilterFn = function(product){
                return selectedCategory == null || product.category == selectedCategory;
            }
        });