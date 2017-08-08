(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name mejorWebappApp.directive:MejorHeader
   * @description
   * # MejorHeader
   * Directive of the mejorWebappApp
   */
  angular
    .module('mejorWebappApp')
    .directive('mejorHeader', mejorHeader);

  function mejorHeader() {
    return {
      restrict: 'E',
      scope: {
        bookNow: '='
      },
      templateUrl: 'views/mejor-header.html'
    };
  }
})();
