(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('PostDetailController', PostDetailController);


    /* @ngInject */
    function PostDetailController(postService, $http, $window, $stateParams, $state) {
        var vm = this;
        vm.item = {};

        vm.deletePost = deletePost;
        vm.savePost = savePost;

        activate();

        function activate() {
          postService.Posts().get({id: $stateParams.id}, function(response) {
            vm.item = response;
            console.log(vm.item)
          });
        }

        function savePost() {
          console.log('iwascalled');
          postService.updatePost({vm.item._id.$oid}, vm.item);
        }

        function deletePost(id) {
          postService.Posts().delete({id: id}, function(response){
            console.log(response)
            vm.item = undefined;
            $window.alert('Successfully deleted post.');
            $state.go('list', {reload: true});
          });
        }
    }
})();
