angular.module("cart", [])
    .factory("cart", function () {
        let cartData = [];

        return {

            /**
             * Adds the specified product to the cart or increment the number
             * required if the cart is already contains the product
             * @param {string} id - The id of the product
             * @param {string} name - The name of the product
             * @param {string} price - The price of the product
             */
            addProduct: function (id, name, price) {
                let addedToExistingItem = false;
                for (let i = 0; i < cartData.length; i++) {
                    if (cartData[i].id === id) {
                        cartData[i].count++;
                        addedToExistingItem = true;
                        break;
                    }
                }
                if (!addedToExistingItem) {
                    cartData.push({count: 1, id: id, price: price, name: name});
                }
            },

            /**
             * Removes the product with the specified id
             * @param {string} id - The id of the product
             */
            removeProduct: function (id) {
                for (let i = 0; i < cartData.length; i++) {
                    if (cartData[i].id === id) {
                        cartData.splice(i, 1);
                        break;
                    }
                }
            },

            /**
             * Returns the array of objects in the cart
             */
            getProducts: function () {
                return cartData;
            }
        }
    })
    .directive("cartSummary", function (cart) {
        return {
            restrict: "E",
            templateUrl: "angularjs/views/cartSummary.html",
            controller: function ($scope) {

                let cartData = cart.getProducts();

                /**
                 * Calculate the amount contained in cardData.
                 * @returns {number}
                 */
                $scope.totalAmount = function () {
                    let totalAmount = 0;
                    for (let i = 0; i < cartData.length; i++) {
                        totalAmount += (cartData[i].price * cartData[i].count);
                    }
                    return totalAmount;
                };

                /**
                 * Calculate the items contained in cadData.
                 * @returns {number}
                 */
                $scope.itemCount = function () {
                    let items = 0;
                    for (let i = 0; i < cartData.length; i++) {
                        items += cartData[i].count;
                    }
                    return items;
                }
            }
        };
    });