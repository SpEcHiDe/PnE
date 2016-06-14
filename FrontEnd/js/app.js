var app = angular.module('keito', ['ngRoute']);

var animation_home;

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {

		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
});

		// configure our routes
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'partials/home.html',
                controller  : 'homeController'
            })
						.when('/app', {
                templateUrl : 'partials/app.html',
                controller  : 'appController'
            })
						.when('/biz', {
                templateUrl : 'partials/biz.html',
                controller  : 'bizController'
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
        $scope.message = 'HOME';
				document.getElementById('brand-logo').style.display = "none";
				animation_home = setInterval(function(){
		      var animone = document.getElementById('animone');
		      var animtwo = document.getElementById('animtwo');
		      var animthree = document.getElementById('animthree');
		      setTimeout(function(){
		        animone.click();
		      },3000);
		      setTimeout(function(){
		        animtwo.click();
		      },5000);
		      setTimeout(function(){
		        animthree.click();
		      },5000);
		    }, 10000);
    });
		app.controller('appController', function($scope) {
        $scope.message = 'APP -- under construction';
				document.getElementById('brand-logo').style.display = "block";
				clearInterval(animation_home);
    });
		app.controller('bizController', function($scope) {
        $scope.message = 'BIZ';
				document.getElementById('brand-logo').style.display = "block";
				clearInterval(animation_home);
    });
    app.controller('faqController', function($scope) {
        $scope.message = 'FAQ';
				document.getElementById('brand-logo').style.display = "block";
				clearInterval(animation_home);
    });
    app.controller('contactusController', function($scope) {
        $scope.message = 'Contact us!';
				document.getElementById('brand-logo').style.display = "block";
				clearInterval(animation_home);
				document.getElementById('msg').onkeydown = countChar(document.getElementById('msg'), document.getElementById('ccdispqwe'));
    });
