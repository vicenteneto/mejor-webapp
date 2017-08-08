(function () {
  'use strict';

  angular
    .module('mejorWebappApp')
    .factory('PatientService', patientService);

  /* @ngInject */
  function patientService(ResourceFactory) {
    return {
      create: create,
      query: query
    };

    function create(patient) {
      return ResourceFactory.patientResource.save({}, patient).$promise;
    }

    function query(params) {
      return ResourceFactory.patientResource.query(params || {}).$promise;
    }
  }
})();
