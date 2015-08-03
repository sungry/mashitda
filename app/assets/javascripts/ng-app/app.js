// ng-app folder is where angular javascripts will live

angular.module('Mashitda', [
    'ngRoute',
    'templates'
  ]).config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
      });
      $locationProvider.html5Mode(true);
  })
