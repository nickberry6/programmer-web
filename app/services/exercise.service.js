(function() {
    'use strict';

    angular
        .module('app.programs')
        .factory('exerciseService', exerciseService);

    /* @ngInject */
    function exerciseService($resource) {
        var service = {
          Exercises: Exercises,
          updateExercise: updateExercise
        };

        return service;

        // refactor Programs method for each action individually

        function Exercises() {
          return $resource('http://localhost:3000/exercises/:id');
        }

        function updateExercise() {
          return $resource('http://localhost:3000/exercises/:id', null, {
          'update': { method:'PUT' }
        })
      };
    }
})();
