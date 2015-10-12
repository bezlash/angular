
(function (){ //JS closure
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){ //sets name of controller as well as a function that will
                                                // fire once the controller is called
    this.products = gems;
  });

    var gems = [
      { // This is a JS object stating the properties of "gem"
        name: 'Diamond',
        price: 2000,
        description: 'Clear diamond, good quality colour',
        canPurchase: true,  // Boolean used to show set the canPurchase value to true or false.  Used to show/hide add to cart button-->
        soldOut: false,
      },
      { // This is a JS object stating the properties of "gem"
        name: 'Ruby',
        price: 1000,
        description: 'Red ruby, good quality colour',
        canPurchase: false,  // Boolean used to show set the canPurchase value to true or false.  Used to show/hide add to cart button-->
        soldOut: false,
      },

    ];

})();
