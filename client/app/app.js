// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.homepage',
  'myApp.terms',
  'myApp.privacy'
  ])

// Default route redirection
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.otherwise({
		redirectTo: '/'
	});
}]);
