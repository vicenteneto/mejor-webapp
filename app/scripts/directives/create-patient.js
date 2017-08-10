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
      templateUrl: 'views/create-patient.html',
      controller: createPatientCtrl,
      controllerAs: 'createPatient'
    };

    /* @ngInject */
    function createPatientCtrl($scope) {
      var vm = this;

      vm.isValid = isValid;

      function isValid() {
        return $scope.patient.name && $scope.patient.dateOfBirth && $scope.patient.location
          && $scope.patient.height && $scope.patient.weight;
      }
    }
  }
})();
