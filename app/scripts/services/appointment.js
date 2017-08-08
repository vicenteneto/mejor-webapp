(function () {
  'use strict';

  angular
    .module('mejorWebappApp')
    .factory('AppointmentService', appointmentService);

  /* @ngInject */
  function appointmentService(ResourceFactory) {
    return {
      create: create,
      query: query
    };

    function create(appointment) {
      return ResourceFactory.appointmentResource.save(appointment).$promise;
    }

    function query() {
      return ResourceFactory.appointmentResource.query({}).$promise;
    }
  }
})();
