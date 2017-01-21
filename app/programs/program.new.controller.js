(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('NewProgramController', NewProgramController);

    /* @ngInject */
    function NewProgramController(programService, $http, $window, $state) {
      var vm = this;
      vm.item = {};
      vm.createSuccess = false;

      vm.addProgram = addProgram;
      vm.goToInfo = goToInfo;
      vm.goToWorkouts = goToWorkouts;

      activate();

      function activate() {

      };

      function addProgram() {
        console.log(vm.item)
        programService.Programs().save(vm.item, function(response) {
          vm.createSuccess = true;
          vm.item = response;
          $state.go('edit', {id: response._id.$oid});
        });
      };

      function goToWorkouts() {
        vm.workout = true;
      };

      function goToInfo() {
        vm.workout = false;
      };

    }
})();
