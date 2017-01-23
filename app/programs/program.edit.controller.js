(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('ProgramDetailController', ProgramDetailController);


    /* @ngInject */
    function ProgramDetailController(programService, $window, $stateParams, $state) {
        var vm = this;
        vm.item = {};

        vm.deleteProgram = deleteProgram;
        vm.saveProgram = saveProgram;

        activate();

        function activate() {
          programService.Programs().get({id: $stateParams.id}, function(response) {
            vm.item = response;
          });
        };

        function saveProgram() {
          var program = {
            id: vm.item._id.$oid,
            name: vm.item.name,
            goal: vm.item.goal,
            duration: vm.item.duration,
            tags: vm.item.tags
          }
          programService.updateProgram().update({id: program.id}, program, function(response) {
            vm.item = response;
            $window.alert('Successfully updated program.');
          });
        };

        function deleteProgram(id) {
          programService.Programs().delete({id: id}, function(response){
            vm.item = undefined;
            $window.alert('Successfully deleted program.');
            $state.go('list', {reload: true});
          });
        };
    }
})();
