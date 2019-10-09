var MyApp = angular.module("myapp", ["ngRoute"]);

MyApp.config(function ($routeProvider, $locationProvider) {

	$locationProvider.hashPrefix('');

	$routeProvider
	.when('/task1', {
		templateUrl: 'view/Task1.html',
		controller: 'Task1Ctrl',
		controllerAs: 'Task1Ctrl'
	})
	.when('/task2', {
		templateUrl: 'view/Task2.html',
		controller: 'Task2Ctrl',
		controllerAs: 'Task2Ctrl'
	})
	.when('/task3', {
		templateUrl: 'view/Task3.html',
		controller: 'Task3Ctrl',
		controllerAs: 'Task3Ctrl'
	})
	.when('/task4', {
		templateUrl: 'view/Task4.html',
		controller: 'Task4Ctrl',
		controllerAs: 'Task4Ctrl'
	})
	.otherwise({
		redirectTo: '/task1'
	});
});

MyApp.run(function () {});


