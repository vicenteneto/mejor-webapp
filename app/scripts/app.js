'use strict';

/**
 * @ngdoc overview
 * @name mejorWebappApp
 * @description
 * # mejorWebappApp
 *
 * Main module of the application.
 */
angular
  .module('mejorWebappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
