(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('PostListController', PostListController);

    /* @ngInject */
    function PostListController(postService, $http, $window, $stateParams, $state) {
        var vm = this;
        vm.item = {};
        vm.items = [];

        activate();

        ////////////////////////

        function activate() {
          postService.Posts().query(function(response){
            vm.items = response;
          });
        }

    }
})();
