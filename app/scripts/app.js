'use strict';

angular.module('destroyAllJsApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'DropdownDirectives'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
