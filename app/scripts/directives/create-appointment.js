(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name mejorWebappApp.directive:CreateAppointment
   * @description
   * # CreateAppointment
   * Directive of the mejorWebappApp
   */
  angular
    .module('mejorWebappApp')
    .directive('createAppointment', createAppointment);

  function createAppointment() {
    return {
      restrict: 'E',
      scope: {
        patient: '=',
        save: '='
      },
      templateUrl: 'views/create-appointment.html'
    };
  }
})();
