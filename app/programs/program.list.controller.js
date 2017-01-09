(function() {
    'use strict';

    angular
        .module('app.programs')
        .controller('ProgramListController', ProgramListController);

    /* @ngInject */
    function ProgramListController(programService, $http, $window, $stateParams, $state) {
        var vm = this;
        vm.item = {};
        vm.items = [];

        activate();

        ////////////////////////

        function activate() {
          programService.Programs().query(function(response){
            vm.items = response;
            console.log(response);
          });
        }
    }
})();
