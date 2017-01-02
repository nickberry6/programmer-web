(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('PostDetailController', PostDetailController);


    /* @ngInject */
    function PostDetailController(postService, $http, $window, $stateParams, $state) {
        var vm = this;
        vm.item = {};
        console.log('details')

        vm.submitPost = submitPost;
        vm.deletePost = deletePost;

        activate();

        function activate() {
          postService.Posts().get({id: $stateParams.id}, function(response) {
            vm.item = response;
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
