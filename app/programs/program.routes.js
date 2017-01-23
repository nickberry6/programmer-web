(function() {
    'use strict';

    angular
        .module('app.programs')
        .config(function($stateProvider){
          $stateProvider.state('list', {
            url: '/programs',
            templateUrl: 'programs/templates/program.list.html',
            controller: 'ProgramListController as vm'
          })
          .state('edit', {
            url: '/programs/:id',
            templateUrl: 'programs/templates/program.edit.html',
            controller: 'ProgramDetailController as vm'
          })
          .state('edit.workout', {
            url: '/programs/:id/workouts',
            templateUrl: 'programs/templates/program.workout.html',
            controller: 'ProgramDetailController as vm'
          })
          .state('new', {
            url: '/program/new',
            templateUrl: 'programs/templates/program.new.html',
            controller: 'NewProgramController as vm'
          })
        });
})();
