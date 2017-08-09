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
  function mainCtrl($log, AppointmentService, PatientService, ScheduleService) {
    var vm = this;

    vm.availables = [];
    vm.schedules = [];
    vm.patient = {};

    vm.init = init;
    vm.bookNow = bookNow;
    vm.createPatient = createPatient;

    function init() {
      ScheduleService.query().then(function (schedules) {
        vm.schedules = schedules;
      }, function () {
        $log.error('Error loading schedules');
      });
    }

    function bookNow() {
      $log.log('Book appointment for patient with email: ' + vm.patient.email);
      PatientService.query({email: vm.patient.email}).then(function (patients) {
        if (patients.length > 0) {
          $log.log('Patient found with email: ' + vm.patient.email);
          showAppointmentModal();
        } else {
          $log.log('No patients found with email: ' + vm.patient.email);
          showPatientModal();
        }
      }, function () {
        $log.error('Error searching patients with email: ' + vm.patient.email);
      });
    }

    function showPatientModal() {
      angular.element('#createPatientModal').modal('show');
    }

    function showAppointmentModal() {
      AppointmentService.availables(vm.patient.email).then(function (availables) {
        vm.availables = availables;

        if (angular.element('#createPatientModal').hasClass('show')) {
          angular.element('#createPatientModal').modal('hide');
        }
        angular.element('#createAppointmentModal').modal('show');
      }, function () {
        $log.error('Error searching availables schedules for patient with email: ' + vm.patient.email);
      });
    }

    function createPatient() {
      PatientService.create(vm.patient).then(function () {
        $log.log('Patient created with success');
      }, function () {
        $log.error('Error creating patient');
      });
    }
  }
})();
