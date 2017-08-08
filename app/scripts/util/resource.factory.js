(function () {
  'use strict';

  angular
    .module('mejorWebappApp')
    .factory('ResourceFactory', resourceFactory);

  /* @ngInject */
  function resourceFactory($resource, URLUtil) {
    return {
      appointmentResource: appointmentResource(),
      patientResource: patientResource()
    };

    function appointmentResource() {
      return getResource(URLUtil.APPOINTMENT);
    }

    function patientResource() {
      return getResource(URLUtil.PATIENT);
    }

    function getResource(url) {
      return $resource(url);
    }
  }
})();
