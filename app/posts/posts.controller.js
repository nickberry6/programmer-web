(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('PostsController', PostsController);

    /* @ngInject */
    function PostsController(postService, $http, $window) {
        var vm = this;
        vm.item = {};
        vm.items = [];

        vm.submitPost = submitPost;
        vm.deletePost = deletePost;

        activate();

        function activate() {
          postService.Posts().query(function(response){
            vm.items = response;
          });
        }

        function submitPost() {
          postService.Posts().save(vm.item, function(response){
            vm.item = undefined;
            $window.alert('Successfully created post ' + response.name);
          });
        }

        function deletePost(id) {
          postService.Posts().delete({id: id}, function(response){
            console.log(response)
            vm.item = undefined;
            $window.alert('Successfully deleted post.');
          });
        }
    }
})();
