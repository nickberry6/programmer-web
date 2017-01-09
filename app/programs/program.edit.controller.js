(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('ProgramDetailController', ProgramDetailController);


    /* @ngInject */
    function ProgramDetailController(programService, $http, $window, $stateParams, $state) {
        var vm = this;
        vm.item = {};

        vm.deleteProgram = deleteProgram;
        vm.saveProgram = saveProgram;

        activate();

        function activate() {
          programService.Programs().get({id: $stateParams.id}, function(response) {
            vm.item = response;
            console.log(vm.item)
          });
        }

        function saveProgram() {
          console.log('iwascalled');
          // programService.updateProgram({vm.item._id.$oid}, vm.item);
        }

        function deleteProgram(id) {
          programService.Programs().delete({id: id}, function(response){
            vm.item = undefined;
            $window.alert('Successfully deleted program.');
            $state.go('list', {reload: true});
          });
        }
    }
})();
