(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('NewProgramController', NewProgramController)
        .controller('NewExerciseController', NewExerciseController);

    /* @ngInject */
    function NewProgramController(programService, $window, $state, $uibModal) {
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

      vm.addProgram = addProgram;
      vm.showExercise = showExercise;
      // vm.cancelModal = cancelModal;

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

      function showExercise() {
        var instance = $uibModal.open({
          animation: false,
          ariaLabelledBy: 'modal-title-top',
          ariaDescribedBy: 'modal-body-top',
          templateUrl: 'programs/templates/workout.new.html',
          size: 'md',
          controller: 'NewExerciseController',
          controllerAs: 'vm'
        });

        instance.result.then(function (exercises) {
          exercises.forEach(function(exercise){
            vm.exercises.push(exercise);
          });
        }, function () {
          console.log('closed');
        });
      };
    };

  function NewExerciseController($uibModalInstance) {
    var vm = this;
    vm.exercise = {};
    vm.exercises = [];
    vm.repMetric = 'repetitions';

    vm.addExercise = addExercise;
    vm.cancel = cancel;

    function addExercise() {
      vm.exercises.push(vm.exercise);
      vm.exercise = null;
      $uibModalInstance.close(vm.exercises);
    };

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    };
  };
})();
