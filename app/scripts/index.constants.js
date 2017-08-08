(function () {
  'use strict';

  angular
    .module('mejorWebappApp')
    .constant('URLUtil', urlUtil());

  function urlUtil() {
    var LOCATION = 'http://0.0.0.0:5000';
    var URL = LOCATION + '/api/';

    return {
      APPOINTMENT: URL + 'appointments/:email/:resource',
      PATIENT: URL + 'patients'
    };
  }
})();
