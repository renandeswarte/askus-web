angular.module('myApp.privacy', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/privacy-policy', {
    authenticate: false,
    templateUrl: 'views/privacy/privacy.html',
    controller: 'privacy'
  });
}])

.controller('privacy', function() {

});
