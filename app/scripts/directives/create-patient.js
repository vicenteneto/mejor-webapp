(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name mejorWebappApp.directive:CreatePatient
   * @description
   * # CreatePatient
   * Directive of the mejorWebappApp
   */
  angular
    .module('mejorWebappApp')
    .directive('createPatient', createPatient);

  function createPatient() {
    return {
      restrict: 'E',
      scope: {
        patient: '=',
        save: '='
      },
      templateUrl: 'views/create-patient.html'
    };
  }
})();
