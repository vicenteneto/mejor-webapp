(function () {
  'use strict';

  angular
    .module('mejorWebappApp')
    .factory('AppointmentService', appointmentService);

  /* @ngInject */
  function appointmentService(ResourceFactory) {
    return {
      create: create,
      availables: availables
    };

    function create(appointment) {
      return ResourceFactory.appointmentResource.save(appointment).$promise;
    }

    function availables(email) {
      return ResourceFactory.appointmentResource.query({email: email, resource: 'availables'}).$promise;
    }
  }
})();
