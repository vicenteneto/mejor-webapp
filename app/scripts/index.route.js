(function () {
  'use strict';

  angular
    .module('mejorWebappApp')
    .config(config);

  /* @ngInject */
  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  }
})();
