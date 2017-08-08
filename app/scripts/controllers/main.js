(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name mejorWebappApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the mejorWebappApp
   */
  angular.module('mejorWebappApp')
    .controller('MainCtrl', mainCtrl);

  /* @ngInject */
  function mainCtrl($log, PatientService) {
    var vm = this;

    vm.patient = {};

    vm.bookNow = bookNow;
    vm.createPatient = createPatient;

    function bookNow() {
      $log.log('Book appointment for patient with email: ' + vm.patient.email);
      PatientService.query({email: vm.patient.email}).then(function (patients) {
        if (patients.length > 0) {
          $log.log('Patient found with email: ' + vm.patient.email);
          showCalendar();
        } else {
          $log.log('No patients found with email: ' + vm.patient.email);
          showFormDialog();
        }
      }, function () {
        $log.error('Error searching patients with email: ' + vm.patient.email);
      });
    }

    function showFormDialog() {
      angular.element('#createPatientModal').modal('show');
    }

    function showCalendar() {

    }

    function createPatient() {
      PatientService.create(vm.patient).then(function (patient) {
        $log.log('Patient created with success');
      }, function () {
        $log.error('Error creating patient');
      });
    }
  }
})();
