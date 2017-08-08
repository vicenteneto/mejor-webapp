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
    .controller('MainCtrl', function () {
      var vm = this;

      vm.bookNow = bookNow;

      function bookNow(email) {
        alert(email);
      }
    });
})();
