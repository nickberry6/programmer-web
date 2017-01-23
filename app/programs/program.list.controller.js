(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('ProgramListController', ProgramListController);

    /* @ngInject */
    function ProgramListController(programService, $stateParams, $state) {
        var vm = this;
        vm.item = {};
        vm.items = [];

        activate();

        ////////////////////////

        function activate() {
          programService.Programs().query(function(response){
            vm.items = response;
          });
        }
    }
})();
