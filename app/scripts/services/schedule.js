(function () {
  'use strict';

  angular
    .module('mejorWebappApp')
    .factory('ScheduleService', scheduleService);

  /* @ngInject */
  function scheduleService(ResourceFactory) {
    return {
      query: query
    };

    function query() {
      return ResourceFactory.scheduleResource.query().$promise;
    }
  }
})();
