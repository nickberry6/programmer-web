(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('NewProgramController', NewProgramController)
        .controller('NewExerciseController', NewExerciseController);

    /* @ngInject */
    function NewProgramController(programService, exerciseService, $window, $state, $uibModal) {
      var vm = this;
      vm.item = {};
      vm.exercise = {};
      vm.exercises = [];
      vm.createSuccess = false;


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
          templateUrl: 'programs/templates/exercise.new.html',
          size: 'sm',
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

  function NewExerciseController($uibModalInstance, exerciseService) {
    var vm = this;
    vm.exercise = {};
    vm.exercises = [];
    vm.repMetric = 'repetitions';

    vm.addExercise = addExercise;
    vm.cancel = cancel;

    function addExercise() {
      vm.exercises.push(vm.exercise);
      exerciseService.Exercises().save(vm.exercise, function(response) {
        console.log(response);
        vm.exercise = null;
      });
      $uibModalInstance.close(vm.exercises);
    };

    function cancel() {
      $uibModalInstance.dismiss('cancel');
    };
  };
})();
