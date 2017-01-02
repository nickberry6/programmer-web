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

        vm.newPost = newPost;

        activate();

        ////////////////////////

        function activate() {
          postService.Posts().query(function(response){
            vm.items = response;
          });
        }

        function newPost() {
          postService.Posts().save(vm.item, function(response){
            vm.item = response;
            $window.alert('Successfully created post ' + response.name);
            vm.isNew = false;
          });
        }

    }
})();
