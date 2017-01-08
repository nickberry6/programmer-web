(function() {
    'use strict';

    angular
        .module('app.programs')
        .factory('programService', programService);

    /* @ngInject */
    function programService($resource) {
        var service = {
          Programs: Programs,
          updateProgram: updateProgram
        };

        return service;

        function Programs() {
          return $resource('http://localhost:3000/programs/:id');
        }

        function updateProgram() {
          $resource('http://localhost:3000/programs/:id', null,
          {
            'update': { method:'PUT' }
          });
        }
    }
})();
