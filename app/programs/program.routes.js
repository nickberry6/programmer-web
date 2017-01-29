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
          .state('new', {
            url: '/program/new',
            templateUrl: 'programs/templates/program.new.html',
            controller: 'NewProgramController as vm',
            redirectTo: 'info',
            abstract: true
          })
          .state('new.info', {
            url: '',
            templateUrl: 'programs/templates/program.info.html',
            controller: 'NewProgramController as vm'
          })
          .state('new.workouts', {
            url: '/workouts',
            templateUrl: 'programs/templates/program.workouts.html',
            controller: 'NewProgramController as vm'
          })
          .state('new.exercises', {
            url: '/exercises',
            templateUrl: 'programs/templates/program.exercises.html',
            controller: 'NewProgramController as vm'
          })
        });
})();
