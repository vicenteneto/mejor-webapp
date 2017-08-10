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
        appointment: '=',
        schedules: '=',
        availables: '=',
        save: '='
      },
      templateUrl: 'views/create-appointment.html',
      controller: createAppointmentCtrl,
      controllerAs: 'createAppointment'
    };

    /* @ngInject */
    function createAppointmentCtrl($scope, moment) {
      var vm = this;

      vm.isReserved = isReserved;
      vm.isValid = isValid;
      vm.format = format;

      function isReserved(schedule) {
        return !Boolean($scope.availables.find(function (available) {
          return available === schedule.date;
        }));
      }

      function isValid() {
        return $scope.appointment.email && $scope.appointment.date;
      }

      function format(schedule) {
        return moment(new Date(schedule.date)).format('DD/MM/YYYY HH:mm:ss');
      }
    }
  }
})();
