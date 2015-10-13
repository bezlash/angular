
(function (){ //JS closure
  var app = angular.module('store', [ ]);

  app.controller('StoreController', function(){ //sets name of controller as well as a function that will
                                                // fire once the controller is called
    this.products = gems;
  });

    var gems = [
      { // This is a JS object stating the properties of "gem"
        name: 'Diamond',
        price: 2,
        description: 'Clear diamond, good quality colour',
        canPurchase: true,  // Boolean used to show set the canPurchase value to true or false.  Used to show/hide add to cart button-->
        soldOut: false,
        images: [
            "images/diamond-icon.jpg",
            "images/diamond-icon2.jpeg",
            "images/diamond-icon3.jpeg",
        ],
      },
      { // This is a JS object stating the properties of "gem"
        name: 'Ruby',
        price: 1.95,
        description: 'Red ruby, good quality colour',
        canPurchase: false,  // Boolean used to show set the canPurchase value to true or false.  Used to show/hide add to cart button-->
        soldOut: false,
        images: [
            "images/ruby-icon.jpeg",
            "images/ruby-icon1.jpeg",
            "images/ruby-icon2.jpeg",
        ],
      },

    ];

})();
