

// app name and route
var atiApp = angular.module('atiApp',	['ngRoute']);

// app config for routes
atiApp.config(function($routeProvider){
	// url and config
	// define endpoint and file
	// define controler
	$routeProvider
		.when('/',{
			templateUrl: 'pages/home.html',
			controller: 'mainController'
		})
		.when('/package',{
			templateUrl: 'pages/package.html',
			controller: 'packageController'
		})
		.when('/user',{
			templateUrl: 'pages/user.html',
			controller: 'userController'
		});
	});