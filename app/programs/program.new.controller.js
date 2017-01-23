(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('NewProgramController', NewProgramController);

    /* @ngInject */
    function NewProgramController(programService, $window, $state) {
      var vm = this;
      vm.item = {};
      vm.exercise = {};
      vm.exercises = [];
      vm.createSuccess = false;
      vm.repetitions = false;
      vm.time = false;
      vm.maxWeight = false;
      vm.rounds = false;
      vm.program = true;
      vm.exerciseList = false;
      vm.newExercise = false

      vm.addProgram = addProgram;
      vm.goToInfo = goToInfo;
      vm.goToWorkouts = goToWorkouts;
      vm.addExercise = addExercise;
      vm.goToExercise = goToExercise;
      vm.goToExercises = goToExercises;

      activate();

      function activate() {

      };

      function addProgram() {
        programService.Programs().save(vm.item, function(response) {
          vm.createSuccess = true;
          vm.item = response;
          $state.go('edit', {id: response._id.$oid});
        });
      };

      function goToWorkouts() {
        vm.program = false;
        vm.workouts = true;
        vm.exerciseList = false;
        vm.newExercise = false;
      };

      function goToExercises() {
        vm.program = false;
        vm.workouts = false;
        vm.newExercise = false;
        vm.exerciseList = true;
      };

      function goToInfo() {
        vm.program = true;
        vm.workouts = false;
        vm.exerciseList = false;
        vm.newExercise = false;
      };

      function goToExercise() {
        vm.newExercise = true;
        vm.workouts = false;
        vm.exerciseList = false;
      };

      function addExercise() {
        vm.newExercise = false;
        vm.exercises.push(vm.exercise);
        vm.exercise = null;
        vm.exerciseList = true;
      };

    }
})();
