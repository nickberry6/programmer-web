(function() {
    'use strict';

    angular
        .module('app.posts')
        .controller('PostsController', PostsController);

    // Controller.$inject = ['dependencies'];

    /* @ngInject */
    function PostsController($http) {
        var vm = this;
        vm.item = {};

        vm.submit = submit;

        activate();

        function activate() {
          $http.get('http://localhost:3000/posts').then(function(response){
            vm.items = response
          });
        }

        function submit() {
          $http.post('http://localhost:3000/posts', vm.item).then(function(response){
            vm.item = response;
          });
        }
    }
})();
