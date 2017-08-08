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
  function mainCtrl(PatientService) {
    var vm = this;

    vm.bookNow = bookNow;

    function bookNow(email) {
      PatientService.query({email: email}).then(function (patients) {
        console.log(patients);
      });
    }
  }
})();
