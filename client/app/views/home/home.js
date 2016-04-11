angular.module('myApp.homepage', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    authenticate: false,
    templateUrl: 'views/home/home.html',
    controller: 'homepage'
  });
}])


.controller('homepage', function() {

});
