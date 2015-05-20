var vegApp = angular.module('vegApp', ['ngRoute',  'ngCookies']);
vegApp.factory('authInterceptor', function ($rootScope, $q, $cookies, $location) {
	return {
		request: function (config) {
			config.headers = config.headers || {};
			console.log('cookies', $cookies);
      if ($cookies.token) {
      	console.log('cookiesToken', $cookies.token);
        config.headers.Authorization = 'Bearer ' + $cookies.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        // handle the case where the user is not authenticated
        delete $cookies.token;
        $location.path('/login');
      }
      return response || $q.when(response);
    }
  };
}).config(['$routeProvider', '$httpProvider',
  function ($routeProvider, $httpProvider){

		$routeProvider
		.when('/', {
			templateUrl: 'partials/main.html',
			controller: 'itemListController'
		})
		.when('/login', {
			templateUrl: 'partials/login.html',
			controller: 'loginCtrl'
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
		$httpProvider.interceptors.push('authInterceptor');
	}
]);



