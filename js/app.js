var app = angular.module('keito', ['ngRoute']);

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope, $rootScope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
    // $scope.imageName ="../img/biz2.jpg"
    $rootScope.$on('$routeChangeStart', function(e, toState, toParams, fromState, fromParams) {
        console.log(toState.$$route.originalPath.replace('/', ''));
        $scope.imageName = "img/" + toState.$$route.originalPath.replace('/', '') + '.jpg';
    });
});

// configure our routes
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    // route for the home page
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'homeController'
        })
        .when('/app', {
            templateUrl: 'partials/app.html',
            controller: 'appController'
        })
        .when('/biz', {
            templateUrl: 'partials/biz.html',
            controller: 'bizController'
        })
        // route for the about page
        .when('/faq', {
            templateUrl: 'partials/faq.html',
            controller: 'faqController'
        })

    // route for the contact page
    .when('/contactus', {
        templateUrl: 'partials/contactus.html',
        controller: 'contactusController'
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
    $('.playbutton,img').click(function() {
        var video = '<div class="video-container"><iframe src="https://www.youtube.com/embed/gPehCh-y3Yc?rel=0&autoplay=1" allowfullscreen frameborder="0" ></iframe></div>';
        $('.video').hide();
        $('.tube').html(video);
        $('.close').show();
    });
    $('.close').click(function() {
        $('.video').show();
        $('.tube').empty();
        $('.close').hide();
    });

});
app.controller('appController', function($scope) {
    $scope.message = 'APP -- under construction';
    document.getElementById('brand-logo').style.display = "block";
});
app.controller('bizController', function($scope) {
    $scope.message = 'BIZ';
    document.getElementById('brand-logo').style.display = "block";
});
app.controller('faqController', function($scope) {
    $scope.message = 'FAQ';
    document.getElementById('brand-logo').style.display = "block";
});
app.controller('contactusController', function($scope) {
    $scope.message = 'Contact us!';
    document.getElementById('brand-logo').style.display = "block";
});
