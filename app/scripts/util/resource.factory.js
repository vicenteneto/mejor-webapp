(function () {
  'use strict';

  angular
    .module('mejorWebappApp')
    .factory('ResourceFactory', resourceFactory);

  /* @ngInject */
  function resourceFactory($resource, URLUtil) {
    return {
      appointmentResource: appointmentResource(),
      patientResource: patientResource(),
      scheduleResource: scheduleResource()
    };

    function appointmentResource() {
      return getResource(URLUtil.APPOINTMENT);
    }

    function patientResource() {
      return getResource(URLUtil.PATIENT);
    }

    function scheduleResource() {
      return getResource(URLUtil.SCHEDULE);
    }

    function getResource(url) {
      return $resource(url);
    }
  }
})();
