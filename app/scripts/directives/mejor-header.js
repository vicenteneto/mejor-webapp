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
        patient: '=',
        bookNow: '=',
        showSuccess: '=?'
      },
      templateUrl: 'views/mejor-header.html',
      controller: mejorHeaderCtrl,
      controllerAs: 'mejorHeaderCtrl'
    };

    /* @ngInject */
    function mejorHeaderCtrl($scope, $log) {
      var vm = this;

      vm.isValidEmail = false;
      vm.messages = {
        error: {
          class: 'alert-danger',
          header: 'Error!',
          message: 'Please, enter a valid email address.'
        },
        success: {
          class: 'alert-success',
          header: 'Success!',
          message: 'Appointment reserved with success.'
        }
      };

      vm.bookNow = bookNow;

      function bookNow() {
        if (vm.isValidEmail) {
          vm.messageType = null;
          $scope.bookNow();
        } else {
          vm.messageType = 'error';
        }
      }

      function isValidEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      $scope.$watch('patient.email', function (email) {
        vm.messageType = null;

        if (email) {
          if (isValidEmail(email)) {
            vm.isValidEmail = true;
          } else {
            vm.isValidEmail = false;
            vm.messageType = 'error';
          }
        }
      });

      $scope.$watch('showSuccess', function (showSuccess) {
        if (showSuccess) {
          vm.messageType = 'success';
        }
      });
    }
  }
})();
