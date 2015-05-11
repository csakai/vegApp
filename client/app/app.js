var vegApp = angular.module('vegApp', ['ngRoute']);
vegApp.config(['$routeProvider', function($routeProvider){

		$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'itemListController'
		})
		.when('/login', {
			templateUrl: 'partials/login.html'/*,
			controller: 'registration'*/
		})
		.when('/moreinfo', {
			templateUrl: 'partials/moreinfo.html',
			controller: 'moreinfo'
		})
		.when('/recipes', {
			templateUrl: 'partials/recipes.html',
			controller: 'recipes'
		})
		.otherwise({
			redirectTo: '/login'
		});
	}
]);



