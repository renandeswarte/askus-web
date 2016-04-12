angular.module('myApp.terms', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/terms-and-conditions', {
    authenticate: false,
    templateUrl: 'views/terms/terms.html',
    controller: 'terms'
  });
}])

.controller('terms', function() {

});
