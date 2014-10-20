

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

// Config controllers
// specify controller name and function
atiApp.controller('mainController',function($scope){

	// Variables inside scope to show. Messages, database records, etc.
	$scope.message = 'Hello World!';

});

atiApp.controller('packageController',function($scope){

	$scope.packages = [
			{name: 'package 1'},
			{name: 'package 2'},
			{name: 'package 3'},
			{name: 'package 4'},
			{name: 'package 5'},
			{name: 'package 6'},
		];

});
