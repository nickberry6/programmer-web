(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('NewProgramController', NewProgramController);

    /* @ngInject */
    function NewProgramController(programService, $http, $window, $state) {
      var vm = this;
      vm.item = {};

      vm.addProgram = addProgram;

      activate();

      function activate() {

      };

      function addProgram() {
        programService.Programs().save({vm.item}, function(response) {
          vm.item = response;
          console.log(vm.item)
        });
      };

    }
})();
