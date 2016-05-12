var app = angular.module('keito', ['ngRoute']);

		// configure our routes
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'partials/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/faq', {
                templateUrl : 'partials/faq.html',
                controller  : 'faqController'
            })

            // route for the contact page
            .when('/contactus', {
                templateUrl : 'partials/contactus.html',
                controller  : 'contactusController'
            });

				// use the HTML5 History API
        /*$locationProvider.html5Mode({
  				enabled: true,
  				requireBase: false
				});*/
    });

		// create the controller and inject Angular's $scope
    app.controller('homeController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    app.controller('faqController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('contactusController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
